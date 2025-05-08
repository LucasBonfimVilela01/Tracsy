"use client";

import { PageTitle } from "@/components/ui/pageTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { handleTitle } from "@/lib/handleTitle";
import { useEffect } from "react";

function PerguntasFrequentesPage() {

  useEffect(() => {
    //Define o título da página como o nome dela
    handleTitle("FAC")
  }, []);
  
  return (
    <div className="sm:w-full md:w-[90%] lg:w-[80%] xl:w-[60%] 2xl:w-[50%] mx-auto ">
      <PageTitle title="Perguntas frequentes" />
      <div className="w-full p-10">
        <Accordion type="single" collapsible className="w-full">
          
        <AccordionItem value="item-1">
            <AccordionTrigger>O que é o Tracsy?</AccordionTrigger>
            <AccordionContent>
            <div className="flex flex-col text-center m-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
            <p className="mb-2 font-semibold">Tracsy é uma plataforma digital dedicada a reunir informações sobre pessoas desaparecidas, com foco em:</p>
                <p className="mb-4">Compartilhar dados essenciais (nome, foto, idade, descrição física, data do desaparecimento).</p>
                <p className="mb-4">Informar a última localização conhecida da pessoa desaparecida.</p>
                <p className="mb-4">Conectar familiares, amigos, voluntários e autoridades em torno de um objetivo comum: reencontrar pessoas desaparecidas.</p>
                <p className="mb-4">De forma humanitária dá voz aos familiares, amigos,e todos que tem o objetivo de reencontro com as pessoas queridas.</p>
          </div>  
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Por que o Tracsy é importante?</AccordionTrigger>
            <AccordionContent>
            <div className="flex flex-col text-center m-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
            <p className="mb-2 font-semibold">O Tracsy faz o melhor para:</p>
                <p className="mb-4">Centraliza casos de desaparecimento em uma única plataforma acessível.</p>
                <p className="mb-4">Transforma o público em uma rede de apoio ativa.</p>
                <p className="mb-4">Dá visibilidade contínua aos casos, mesmo após o impacto inicial da notícia desaparecer.</p>
                <p className="mb-4">Humaniza as buscas: cada perfil conta uma história e mobiliza empatia.</p>
            </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Tracsy é uma rede social?</AccordionTrigger>
            <AccordionContent>
            <div className="flex flex-col text-center m-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
                <p className="mb-2 font-semibold">Embora envolva usuários compartilhando informações, Tracsy não possui os elementos tradicionais de redes sociais, como:</p>
                <p className="mb-4">* Lista de amigos ou seguidores;</p>
                <p className="mb-4">* Publicações pessoais ou de entretenimento;</p>
                <p className="mb-4">* Curtidas, reações ou postagens de estilo livre.</p>
                <br/>
                <p className="mb-2 font-semibold">Seu foco exclusivo é a divulgação de pessoas desaparecidas, afim de auxiliar as buscas e toda a estrutura da plataforma é voltada a isso. Ou seja, Tracsy é uma ferramenta de utilidade pública, não uma rede para socialização.</p>
            </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Como cadastro um desaparecido?</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col text-center m-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
                <h1 className="my-2 font-semibold">Faça Login:</h1>
                <p>Acesse o site e clique em &quot;Login&quot; na parte superior da página.</p>
                <p>Digite seu e-mail e senha para fazer login na sua conta.</p>
                <br />
                <p>Veja sobre em <a href="/login" className="color:rgb(189, 2, 183); text-decoration: none;">Login</a> ou veja a imagem abaixo:</p>
                <br />
                <div className="mx-auto">
                  <Image src="/login.png" alt="Exemplo de login" width={300} height={200} className="rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                </div>
                <br /><br />
                <p className="mb-2 font-semibold">Caso ainda não tenha uma conta, clique em &quot;Cadastrar-se&quot;.</p>
                <p className="mb-4">Após fazer login, você será redirecionado para a página inicial do site.
                  No header, a parte superior do site, onde geralmente ficam os menus de navegação, você verá a opção &quot;Cadastrar Desaparecido&quot; no canto superior direito. Clique nessa opção.
                </p>
                <br /><br />
                <h1 className="mb-2 font-semibold">Agora você estará na página de cadastro do desaparecido. Preencha os seguintes campos:</h1>
                <div className="text-start px-4">
                  <p className="mb-4"><b>Nome completo do desaparecido:</b> Informe o nome da pessoa desaparecida.</p>
                  <p className="mb-4"><b>Foto do desaparecido:</b> Clique em &quot;Escolher arquivo&quot; ou &quot;Carregar foto&quot; para adicionar uma foto recente da pessoa desaparecida. A foto ajuda na identificação.</p>
                  <p className="mb-4"><b>Características físicas:</b> Adicione informações detalhadas sobre as características físicas da pessoa, como altura, peso, cor dos olhos, cor do cabelo, marcas ou cicatrizes específicas. Quanto mais detalhes, melhor!</p>
                  <p className="mb-4"><b>Última localização conhecida:</b> Informe a última vez que a pessoa foi vista e o local aproximado. Se souber o endereço ou um ponto de referência, coloque o máximo de informações possível.</p>
                  <p className="mb-4"><b>Outras informações relevantes:</b> Caso tenha mais detalhes, como horário aproximado do desaparecimento, roupas que a pessoa estava usando, ou qualquer outra informação importante, preencha esse campo.</p>
                </div>
                <br />
                <div className="mx-auto">
                  <Image src="/cadastrarDesaparecido.png" alt="Exemplo de cadastrar uma pessoa desaparecida" width={300} height={200} className="rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                </div>
                <br />
                <p className="mb-4">Após preencher todos os campos, revise as informações para garantir que tudo está correto. Isso é importante, pois quanto mais preciso for o cadastro, maiores são as chances de encontrar o desaparecido.</p>
                <p className="mb-2 font-semibold">Envie o cadastro:</p>
                <p className="mb-4">Depois de preencher todos os dados e revisar as informações, clique no botão &quot;<b>Cadastrar</b>&quot; e pronto.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Como posso contatar sobre algum desaparecido?</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col text-center m-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
                <h1 className="my-2 font-semibold">Vá ao maps:</h1>
                <p className="mb-4">No maps, selecione o local desejado.</p>
                <p className="mb-4">Ao clicar com o botão direito, clique em &quot;compartilhar este local&quot;.</p>
                <br />
                <div className="mx-auto">
                  <Image src="/mapspasso1.png" alt="Exemplo de localização" width={300} height={200} className="rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                </div>
                <br /><br />
                <h1 className="mb-2 font-semibold">Vá para a sessão &quot;Incorporar um Mapa&quot;:</h1>
                <p className="mb-4">Clique no botão &quot;Copiar HTML&quot; e cole no formulário.</p>
                <div className="py-2 mx-auto">
                  <Image src="/mapspasso2.png" alt="Exemplo de localização 2" width={300} height={200} className="rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                </div>
                <br />
                <h1 className="mb-2 font-semibold">Cole no formulário e finalize</h1>
                <div className="mx-auto">
                  <Image src="/mapsPassoFinalUltimatoGG.png" alt="Exemplo de localização 3" width={300} height={200} className="rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                </div>
                <br />
                <p className="mb-4">Ao preencher as informações de avistamento no mapa, marque a região geral onde você acredita ter visto a pessoa.</p>
                <p className="mb-4">Se não souber o ponto exato, não se preocupe: você pode indicar a área aproximada.</p>
                <p className="mb-4">Na descrição do avistamento, você pode incluir mais detalhes específicos sobre a localização, como pontos de referência, bairros ou quaisquer outros dados que ajudem a precisar a área.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>Como posso deletar algum cadastro que eu fiz?</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col text-center m-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
                <h1 className="mb-2 font-semibold">Vá para a página &quot;Meus Envios&quot;:</h1>
                <p className="mb-4">Após o login, no header acesse &quot;Meus Envios&quot;.</p>
                <p className="mb-4">Ao clicar no ícone de lixeira, o registro será automaticamente excluído.</p>
                <br />
                <div className="mx-auto">
                  <Image src="/meusenvios1.png" alt="Exemplo de delete" width={300} height={200} className="rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                </div>
                <br /><br />
                <p className="mb-4">Uma mensagem será mostrada quando o cadastro for excluído.</p>
                <div className="mx-auto">
                  <Image src="/meusenvios2.png" alt="Exemplo de delete 2" width={300} height={200} className="rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                </div>
                <br/>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>Como posso atualizar algum cadastro que eu fiz?</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col text-center m-4 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
                <h1 className="mb-2 font-semibold">Vá para a página &quot;Meus Envios&quot;:</h1>
                <p className="mb-4">Após o login, no header acesse &quot;Meus Envios&quot;.</p>
                <div className="mx-auto">
                  <Image src="/editarEnvio1.png" alt="Exemplo de editar 1" width={300} height={300} className="rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                </div>
                <br /><br />
                <p className="mb-4">Ao clicar no ícone de lápis, o registro será automaticamente editado.</p>
                <div className="mx-auto">
                  <Image src="/editarEnvio2.png" alt="Exemplo de delete" width={300} height={300} className="rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                </div>
                <br /><br />
                <p className="mb-4">Uma mensagem será mostrada quando o cadastro for atualizado.</p>
                <div className="mx-auto">
                  <Image src="/envioEditado.png" alt="Exemplo de envio 3" width={300} height={300} className="rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                </div>
                <br/>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default PerguntasFrequentesPage;