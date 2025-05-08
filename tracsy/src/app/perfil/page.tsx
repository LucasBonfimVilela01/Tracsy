// Define que o código deve ser rodado do lado do cliente
"use client";

// Importa as dependências necessárias
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { PageTitle } from "@/components/ui/pageTitle";
import { handleTitle } from "@/lib/handleTitle";

function PerfilPage() {
  // Define os estados para armazenar informações do usuário, mensagens e controle de exibição
  const [user, setUser] = useState<{ id: string; nome: string; email: string; senha: string } | null>(null);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [notLoggedInMessage, setNotLoggedInMessage] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);

  // Instancia o roteador para navegação
  const router = useRouter();

  // Executa ações ao carregar a página
  useEffect(() => {
    // Define o título da página como "Perfil"
    handleTitle("Perfil");

    // Recupera o usuário logado dos cookies
    const loggedInUser = Cookies.get("loggedInUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      // Exibe mensagem após 2 segundos se o usuário não estiver logado
      const timeout = setTimeout(() => {
        setNotLoggedInMessage("Você não está logado.");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, []);

  // Atualiza os dados do usuário ao alterar os campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  // Salva as alterações feitas no perfil do usuário
  const handleSave = async () => {
    if (user) {
      try {
        // Estabelece a conexão com o banco
        const response = await fetch(
          // Pega as informações do usuário atual
          `${process.env.NEXT_PUBLIC_API_URL}/users/${user.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        );

        //Envia as informações atualizadas para o banco, cookies e da uma mensagem de feedback.
        if (response.ok) {
          const updatedUser = await response.json();
          Cookies.set("loggedInUser", JSON.stringify(updatedUser), { expires: 7 }); // Envia o user atualizado para o cookie, que expira em 7 dias.
          setUser(updatedUser);
          setMessage("Dados atualizados com sucesso!"); // Feedback positivo
        } else {
          setMessage("Erro ao atualizar os dados. Tente novamente."); // Feedback negativo
        }
      } catch (error) {
        console.error("Erro ao atualizar os dados:", error);
        setMessage("Erro ao conectar ao servidor."); // Feedback negativo da conexão do banco
      }
    }
  };

  // Realiza o logout do usuário
  const handleLogout = () => {
    Cookies.remove("loggedInUser"); // Remove o cookie
    setUser(null); // Limpa o estado do usuário
    setMessage("Você saiu da sua conta."); // Feedback positivo

    setTimeout(() => {
      window.location.reload();
    }, 200); // Recarrega a página principal para atualizar o header

    router.push("/"); // Redireciona para a página principal
  };

  // Deleta a conta do usuário
  const handleDeleteAccount = async () => {
    if (confirmDelete && user) {
      try {
        // Estabelece a conexão com o banco
        const response = await fetch(
          // Pega as informações do usuário atual
          `${process.env.NEXT_PUBLIC_API_URL}/users/${user.id}`,
          {
            method: "DELETE",
          }
        );

        // Atualiza o cookie, banco e redireciona para a página principal.
        if (response.ok) {
          Cookies.remove("loggedInUser"); // Remove o cookie
          setUser(null); // Limpa o estado do usuário
          setMessage("Sua conta foi deletada com sucesso."); // Feedback positivo

          setTimeout(() => {
            window.location.reload();
          }, 200); // Recarrega a página principal para atualizar o header

          router.push("/"); // Redireciona para a página principal
        } else {
          setMessage("Erro ao deletar a conta. Tente novamente."); // Feedback negativo
        }
      } catch (error) {
        console.error("Erro ao deletar a conta:", error);
        setMessage("Erro ao deletar a conta. Tente novamente.");  // Feedback negativo da conexão do banco
      }
    }
  };

  // Exibe mensagem de carregamento ou de erro se o usuário não estiver logado
  if (!user) {
    return (
      <div className="w-full h-[80vh] flex items-center justify-center text-center">
        {!notLoggedInMessage && (
          <p className="text-2xl font-bold text-gray-700">Carregando...</p>
        )}
        {notLoggedInMessage && (
          <p className="text-2xl font-bold text-red-500">{notLoggedInMessage}</p>
        )}
      </div>
    );
  }

  return (
    // Container principal da página
    <div className="w-full max-w-md mx-auto rounded-md">
      {/* Exibe o título da página com o nome do usuário */}
      <PageTitle title={`Olá, ${user.nome}`} />

      {/* Seção para editar informações do usuário */}
      <div className="border p-3 rounded-xl text-center">
        <h1 className="p-2 mb-2 font-bold">Editar Informações</h1>
        <form className="flex flex-col gap-4">
          {/* Campo para editar o nome */}
          <input
            type="text"
            name="nome"
            value={user.nome}
            onChange={handleChange}
            className="p-2 border rounded"
            placeholder="Nome"
          />
          {/* Campo para editar o email */}
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="p-2 border rounded"
            placeholder="Email"
          />
          {/* Campo para editar a senha */}
          <div className="relative flex justify-between">
            <input
              type={showPassword ? "text" : "password"}
              name="senha"
              value={user.senha}
              onChange={handleChange}
              className="p-2 border rounded w-[90%]"
              placeholder="Senha"
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
          {/* Botão para salvar as alterações */}
          <button
            type="button"
            onClick={handleSave}
            className="p-2 text-white rounded bg-blue-400 cursor-pointer hover:bg-blue-500"
          >
            Salvar
          </button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>

      {/* Seção para sair da conta */}
      <div className="border p-3 rounded-xl text-center mt-4">
        <h1 className="p-2 mb-2 font-bold">Sair da Conta</h1>
        <button
          type="button"
          onClick={handleLogout}
          className="p-2 w-full text-white rounded bg-red-400 cursor-pointer hover:bg-red-500"
        >
          Sair
        </button>
      </div>

      {/* Seção para deletar a conta */}
      <div className="border p-3 rounded-xl text-center mt-4">
        <h1 className="p-2 mb-2 font-bold text-red-500">Deletar Conta</h1>
        <p className="mb-4 text-gray-600">
          Marque a caixa abaixo para confirmar a exclusão da sua conta.
        </p>

        {/*Checkbox para confirmação da deleção*/}
        <div className="flex items-center justify-center gap-2 mb-4">
          <input
            type="checkbox"
            id="confirmDelete"
            checked={confirmDelete}
            onChange={(e) => setConfirmDelete(e.target.checked)}
            className="w-5 h-5 cursor-pointer"
          />
          <label htmlFor="confirmDelete" className="text-gray-700">
            Confirmo que desejo deletar minha conta
          </label>
        </div>

        {/*Botão para deleção*/}
        <button
          type="button"
          onClick={handleDeleteAccount}
          disabled={!confirmDelete}
          className={`p-2 w-full text-white rounded ${confirmDelete ? "bg-red-400 hover:bg-red-500" : "bg-gray-300 cursor-not-allowed"
            }`}
        >
          Deletar Conta
        </button>
      </div>
    </div>
  );
}

// Exporta a página PerfilPage
export default PerfilPage;