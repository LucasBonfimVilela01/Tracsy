// Define que o código deve ser rodado do lado do cliente
"use client";

// Importa as dependências necessárias
import { PageTitle } from "@/components/ui/pageTitle";
import { handleTitle } from "@/lib/handleTitle";
import { useEffect } from "react";

function TermosDeUsoPage() {

    // Usa o "useEffect" para executar ações no lado do cliente
    useEffect(() => {
        // Define o título da página como "Termos de uso"
        handleTitle("Termos de uso")
    }, []);

    return (
        // Define a estrutura principal da página com responsividade
        <div className="flex flex-col w-full max-w-5xl mx-auto px-6">

            {/* Usa o componente PageTitle para exibir o título da página */}
            <PageTitle title="Termos de uso" />

            {/* Container para o conteúdo dos Termos de Uso */}
            <div className="bg-blue-200 rounded-lg shadow-lg p-8 leading-relaxed text-justify">

                {/* Título principal dos Termos de Uso */}
                <p className="text-lg font-semibold mb-2">Termos de Uso – Tracsy</p>

                {/* Data da última atualização */}
                <p className="mb-4">
                    <strong>Data da última atualização:</strong> 05/05/2025
                </p>

                {/* Introdução aos Termos de Uso */}
                <p className="mb-4">
                    Bem-vindo(a) ao Tracsy! Estes Termos de Uso (&quot;Termos&quot;) regem o acesso e uso da plataforma Tracsy
                    (&quot;nós&quot;, &quot;nosso&quot;, &quot;Tracsy&quot;) por parte dos usuários (&quot;você&quot;, &quot;usuário&quot;), disponível por meio de nosso site https://tracsy.vercel.app/.
                </p>

                {/* Aviso sobre aceitação dos Termos */}
                <p className="mb-4">
                    Ao acessar ou utilizar nossos serviços, você concorda com estes Termos. Se você não concordar, por favor, não utilize a plataforma.
                </p>

                {/* Seção 1: Objetivo do Tracsy */}
                <p className="mb-2 font-semibold">1. Objetivo do Tracsy</p>
                <p className="mb-4">
                    O Tracsy é uma plataforma dedicada à divulgação de informações sobre pessoas desaparecidas, com o objetivo de auxiliar na sua localização. A ferramenta permite que usuários compartilhem relatos, fotos e atualizações, e acessem conteúdo público sobre casos em andamento.
                </p>

                {/* Seção 2: Cadastro e Responsabilidade do Usuário */}
                <p className="mb-2 font-semibold">2. Cadastro e Responsabilidade do Usuário</p>
                <p className="mb-4">
                    O uso do Tracsy pode requerer a criação de uma conta. Ao se cadastrar, você concorda em fornecer informações verdadeiras, precisas e atualizadas.
                    Você é inteiramente responsável por todo o conteúdo que publicar, incluindo imagens, descrições, dados pessoais e relatos de desaparecimento.
                    É proibido o uso da plataforma para fins fraudulentos, difamatórios, sensacionalistas ou ilegais.
                </p>

                {/* Seção 3: Publicação de Casos */}
                <p className="mb-2 font-semibold">3. Publicação de Casos</p>
                <p className="mb-4">
                    O usuário que publica um caso declara ter autorização legal e/ou familiar para divulgar informações sobre a pessoa desaparecida.
                    Não é permitido publicar informações de terceiros sem consentimento ou respaldo legal.
                    O Tracsy pode revisar ou remover conteúdo que viole estes Termos, infrinja direitos de terceiros ou comprometa a integridade da plataforma.
                </p>

                {/* Seção 4: Privacidade e Proteção de Dados */}
                <p className="mb-2 font-semibold">4. Privacidade e Proteção de Dados</p>
                <p className="mb-4">
                    As informações coletadas e exibidas seguem nossa Política de Privacidade e respeitam a legislação aplicável de proteção de dados (como a LGPD).
                    Ao submeter informações, você concorda que elas possam ser compartilhadas publicamente na plataforma e com autoridades competentes ou organizações parceiras de busca.
                </p>

                {/* Seção 5: Direitos Autorais e Propriedade Intelectual */}
                <p className="mb-2 font-semibold">5. Direitos Autorais e Propriedade Intelectual</p>
                <p className="mb-4">
                    O conteúdo publicado por usuários continua sendo de sua titularidade, mas, ao utilizar o Tracsy, você concede uma licença gratuita, mundial e não exclusiva para exibir, reproduzir e distribuir esse conteúdo no contexto da plataforma.
                    O layout, marca, código e design do Tracsy são protegidos por direitos autorais e não podem ser copiados ou utilizados sem autorização expressa.
                </p>

                {/* Seção 6: Limitação de Responsabilidade */}
                <p className="mb-2 font-semibold">6. Limitação de Responsabilidade</p>
                <p className="mb-4">
                    O Tracsy é um serviço de apoio informativo. Não garantimos a veracidade ou sucesso na localização das pessoas divulgadas.
                    A plataforma não substitui órgãos oficiais de segurança pública.
                    O Tracsy não se responsabiliza por decisões tomadas com base nas informações aqui disponibilizadas.
                </p>

                {/* Seção 7: Modificações nos Termos */}
                <p className="mb-2 font-semibold">7. Modificações nos Termos</p>
                <p className="mb-4">
                    Reservamo-nos o direito de modificar estes Termos a qualquer momento. Notificaremos mudanças relevantes por meio do site ou por e-mail, quando aplicável. O uso contínuo da plataforma após alterações representa sua aceitação dos novos termos.
                </p>

                {/* Seção 8: Contato */}
                <p className="mb-2 font-semibold">8. Contato</p>
                <p className="mb-4">
                    Se tiver dúvidas, sugestões ou reclamações, entre em contato conosco pelo e-mail: contato@tracsy.com.
                </p>

                {/* Conclusão dos Termos de Uso */}
                <p>
                    Ao utilizar o Tracsy, você confirma que leu, compreendeu e concorda com estes Termos de Uso.
                </p>
            </div>
        </div>
    );
}

// Exporta a página TermosDeUsoPage
export default TermosDeUsoPage;