// Define que o código deve ser rodado do lado do cliente
"use client";

// Importa as dependências necessárias
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Importa o useRouter para navegação
import Cookies from "js-cookie";
import { PageTitle } from "@/components/ui/pageTitle";
import { handleTitle } from "@/lib/handleTitle";

function LoginPage() {
  // Define os estados para armazenar os dados do formulário, mensagens de feedback e controle de exibição da senha
  const [formData, setFormData] = useState({ email: "", senha: "" });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Instancia o roteador para navegação
  const router = useRouter();

  // Define o título da página ao carregar
  useEffect(() => {
    handleTitle("Login");
  }, []);

  // Atualiza os dados do formulário ao alterar os campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Lida com o envio do formulário de login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Faz a requisição para verificar as credenciais do usuário
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users?email=${formData.email}&senha=${formData.senha}`
      );
      const users = await response.json();

      if (users.length > 0) {
        // Solicita o token ao servidor
        const tokenResponse = await fetch("/api/generateToken", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email }),
        });

        if (!tokenResponse.ok) {
          setMessage("Erro ao gerar o token.");
          return;
        }

        const { token } = await tokenResponse.json();

        // Atualiza o campo "token" no servidor
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${users[0].id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        // Salva o token e os dados do usuário nos cookies
        Cookies.set("loggedInUser", JSON.stringify({ ...users[0], token }), { expires: 7 });
        setMessage("Login realizado com sucesso!");
  
        setTimeout(() => {
          window.location.reload();
        }, 200); // Recarrega a página para atualizar o header

        router.push("/perfil");// Redireciona para a página de perfil após o login
      } else {
        setMessage("Credenciais inválidas.");
      }
    } catch (error) {
      console.error("Erro ao conectar ao servidor:", error);
      setMessage("Erro ao conectar ao servidor.");
    }
  };

  return (
    // Container principal da página
    <div className="w-full max-w-md mx-auto rounded-md mt-8">
      {/* Exibe o título da página */}
      <PageTitle title="Login" />

      {/* Formulário de login */}
      <div className="border p-3 mb-8 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Campo para o email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />

          {/* Campo para a senha com opção de exibir/ocultar */}
          <div className="relative flex justify-between">
            <input
              type={showPassword ? "text" : "password"}
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
              className="p-2 border rounded w-[90%]"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="w-[7%] cursor-pointer"
            >
              <img
                src={showPassword ? "/mostrar.svg" : "/ocultar.svg"}
                alt={showPassword ? "Ocultar senha" : "Mostrar senha"}
                className=""
              />
            </button>
          </div>

          {/* Botão para enviar o formulário */}
          <button
            type="submit"
            className="p-2 text-white rounded bg-blue-400 cursor-pointer hover:bg-blue-500"
          >
            Entrar
          </button>
        </form>

        {/* Exibe mensagens de feedback */}
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
}

// Exporta a página LoginPage
export default LoginPage;