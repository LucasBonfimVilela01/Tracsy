import { AccordionDinamico } from "@/components/elements/accordionDinamico";
import { PageTitle } from "@/components/ui/pageTitle";

function PerguntasFrequentesPage() {
    return (
        <div className="sm:w-full md:w-[90%] lg:w-[80%] xl:w-[60%] 2xl:w-[50%] mx-auto ">
            <PageTitle title="Perguntas frequentes" />
            <div className="w-full p-10  ">
                <AccordionDinamico
                    dados={[
                        { trigger: "Como cadastro um desaparecido?", content: "Você deve fazer login e clicar em cadastrar desaparecido no nosso header." },
                        { trigger: "Como posso contatar sobre algum desaparecido?", content: "No feed na página inicial você deve apertar o botão \"Método de contato\"" },
                        { trigger: "Não sei um local exato onde eu avistei, onde devo marcar no mapa?", content: "Você deve marcar na região geral onde você pensa ter visto aquela pessoa, e se precisar especifique isso na descrição." },
                        { trigger: "Posso deletar algum cadastro que eu fiz?", content: "Sim, você pode! Você deve ir na página de \"Meus envios\" e clicar em deletar." },
                        { trigger: "Posso editar algum cadastro que eu fiz?", content: "Sim, você pode! Você deve ir na página de \"Meus envios\" e clicar em editar." }
                    ]}
                />
            </div>
        </div>
    );
}

export default PerguntasFrequentesPage;
