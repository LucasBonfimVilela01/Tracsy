// Define que o código deve ser rodado do lado do cliente
"use client";

// Importa as dependências necessárias
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import Link from "next/link"; 
import Cookies from "js-cookie"; 
import { PageTitle } from "@/components/ui/pageTitle";
import { handleTitle } from "@/lib/handleTitle";

function CadastroPage() {
  // Define os estados para armazenar os dados do formulário, mensagens de feedback, controle de exibição da senha e aceitação dos termos
  const [formData, setFormData] = useState({ nome: "", email: "", senha: "" });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false); // Estado para o checkbox de aceitação dos termos

  // Instancia o roteador para navegação
  const router = useRouter();

  // Define o título da página ao carregar
  useEffect(() => {
    handleTitle("Cadastro");
  }, []);

  // Atualiza os dados do formulário ao alterar os campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Lida com o envio do formulário de cadastro
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica se os termos de uso foram aceitos
    if (!acceptedTerms) {
      setMessage("Você deve aceitar os termos de uso para continuar.");
      return;
    }

    try {
      // Verifica se o e-mail já está cadastrado
      const checkEmailResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users?email=${formData.email}`
      );
      const existingUsers = await checkEmailResponse.json();

      if (existingUsers.length > 0) {
        setMessage("Este e-mail já está cadastrado, tente outro.");
        return;
      }

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

      // Envia os dados do novo usuário para o servidor
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, id: Date.now(), token }),
      });

      if (response.ok) {
        const newUser = await response.json();
        Cookies.set("loggedInUser", JSON.stringify(newUser), { expires: 7 }); // Salva os dados do usuário nos cookies
        setMessage("Cadastro realizado com sucesso!");

        // Redireciona para a página de perfil após o cadastro
        setTimeout(() => {
          window.location.reload();
        }, 200);
        router.push("/perfil");
      } else {
        setMessage("Erro ao cadastrar. Tente novamente.");
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
      <PageTitle title="Cadastro" />

      {/* Formulário de cadastro */}
      <div className="border p-3 mb-8 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Campo para o nome */}
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />

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

          {/* Checkbox para aceitar os termos de uso */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="acceptTerms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="w-5 h-5 cursor-pointer"
            />
            <label htmlFor="acceptTerms" className="text-gray-700">
              Eu li e aceito os{" "}
              <Link href="/termosDeUso" className="text-blue-500 underline">
                termos de uso
              </Link>
            </label>
          </div>

          {/* Botão para enviar o formulário */}
          <button
            type="submit"
            className="p-2 text-white rounded bg-blue-400 cursor-pointer hover:bg-blue-500"
          >
            Cadastrar
          </button>
        </form>

        {/* Exibe mensagens de feedback */}
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
}

// Exporta a página CadastroPage
export default CadastroPage;