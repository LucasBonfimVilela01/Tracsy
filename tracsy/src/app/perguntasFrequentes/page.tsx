import { PageTitle } from "@/components/ui/pageTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

function PerguntasFrequentesPage() {
  return (
    <div className="sm:w-full md:w-[90%] lg:w-[80%] xl:w-[60%] 2xl:w-[50%] mx-auto ">
      <PageTitle title="Perguntas frequentes" />
      <div className="w-full p-10">
        <Accordion type="single" collapsible className="w-full">

          <AccordionItem value="item-1">
            <AccordionTrigger>Como cadastro um desaparecido?</AccordionTrigger>
            <AccordionContent>
              <h1 className="mb-2 font-semibold">Faça Login:</h1>
              <p>Acesse o site e clique em &quot;Login&quot; na parte superior da página.</p>
              <p>Digite seu e-mail e senha para fazer login na sua conta.</p>
              <br />
              <p>Veja sobre em <a href="/login" className="color:rgb(189, 2, 183); text-decoration: none;">Login</a> ou veja a imagem abaixo:</p>
              <br />
              <div className="text-align: center; margin-top: 10px;">
                <Image src="/login.png" alt="Exemplo de login" width={300} height={200} className="rounded-lg" />
              </div>
              <br /><br />
              <p className="mb-2 font-semibold">Caso ainda não tenha uma conta, clique em &quot;Cadastrar-se&quot;.</p>
              <p className="mb-4">Após fazer login, você será redirecionado para a página inicial do site.
                No header, a parte superior do site, onde geralmente ficam os menus de navegação, você verá a opção &quot;Cadastrar Desaparecido&quot; no canto superior direito. Clique nessa opção.
              </p>
              <br /><br />
              <h1 className="mb-2 font-semibold">Agora você estará na página de cadastro do desaparecido. Preencha os seguintes campos:</h1>
              <p className="mb-4">* Nome completo do desaparecido: Informe o nome da pessoa desaparecida.</p>
              <p className="mb-4">* Foto do desaparecido: Clique em &quot;Escolher arquivo&quot; ou &quot;Carregar foto&quot; para adicionar uma foto recente da pessoa desaparecida. A foto ajuda na identificação.</p>
              <p className="mb-4">* Características físicas: Adicione informações detalhadas sobre as características físicas da pessoa, como altura, peso, cor dos olhos, cor do cabelo, marcas ou cicatrizes específicas. Quanto mais detalhes, melhor!</p>
              <p className="mb-4">* Última localização conhecida: Informe a última vez que a pessoa foi vista e o local aproximado. Se souber o endereço ou um ponto de referência, coloque o máximo de informações possível.</p>
              <p className="mb-4">* Outras informações relevantes: Caso tenha mais detalhes, como horário aproximado do desaparecimento, roupas que a pessoa estava usando, ou qualquer outra informação importante, preencha esse campo.</p>
              <br /><br />
              <Image src="/cadastrarDesaparecido.png" alt="Exemplo de cadastrar uma pessoa desaparecida" width={300} height={200} className="rounded-lg" />
              <p className="mb-4">Após preencher todos os campos, revise as informações para garantir que tudo está correto. Isso é importante, pois quanto mais preciso for o cadastro, maiores são as chances de encontrar o desaparecido.</p>
              <p className="mb-2 font-semibold">Envie o cadastro:</p>
              <p className="mb-4">Depois de preencher todos os dados e revisar as informações, clique no botão &quot;Cadastrar&quot; e pronto.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Como posso contatar sobre algum desaparecido?</AccordionTrigger>
            <AccordionContent>
              <h1 className="mb-2 font-semibold">Vá ao maps:</h1>
              <p className="mb-4">No maps, selecione o local desejado.</p>
              <p className="mb-4">Ao clicar com o botão direito, clique em &quot;compartilhar este local&quot;.</p>
              <br />
              <Image src="/mapspasso1.png" alt="Exemplo de localização" width={300} height={200} className="rounded-lg" />
              <br /><br />
              <h1 className="mb-2 font-semibold">Vá para a sessão &quot;Incorporar um Mapa&quot;:</h1>
              <p className="mb-4">Clique no botão &quot;Copiar HTML&quot; e cole no formulário.</p>
              <br />
              <Image src="/mapspasso2.png" alt="Exemplo de localização 2" width={300} height={200} className="rounded-lg" />
              <br /><br />
              <h1 className="mb-2 font-semibold">Cole no formulário e finalize</h1>
              <Image src="/mapsPassoFinalUltimatoGG.png" alt="Exemplo de localização 3" width={300} height={200} className="rounded-lg" />
              <p className="mb-4">Ao preencher as informações de avistamento no mapa, marque a região geral onde você acredita ter visto a pessoa.</p>
              <p className="mb-4">Se não souber o ponto exato, não se preocupe: você pode indicar a área aproximada.</p>
              <p className="mb-4">Na descrição do avistamento, você pode incluir mais detalhes específicos sobre a localização, como pontos de referência, bairros ou quaisquer outros dados que ajudem a precisar a área.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Como posso deletar algum cadastro que eu fiz?</AccordionTrigger>
            <AccordionContent>
              <h1 className="mb-2 font-semibold">Vá para a página &quot;Meus Envios&quot;:</h1>
              <p className="mb-4">Após o login, no header acesse &quot;Meus Envios&quot;.</p>
              <p className="mb-4">Ao clicar no ícone de lixeira, o envio será automaticamente excluído.</p>
              <br />
              <Image src="/meusenvios1.png" alt="Exemplo de delete" width={300} height={200} className="rounded-lg" />
              <br /><br />
              <Image src="/meusenvios2.png" alt="Exemplo de delete 2" width={300} height={200} className="rounded-lg" />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </div>
  );
}

export default PerguntasFrequentesPage;