import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function PerguntasFrequentesPage() {
    return (
        <div className="w-[40%]">
            <div className="text-center p-5 font-bold text-[25px]">
                <h1>Perguntas Frequentes</h1>
            </div>
            <div className="w-full">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Como cadastro um desaparecido?</AccordionTrigger>
                        <AccordionContent>
                            Você deve fazer login e clicar em cadastrar desaparecido no nosso header.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Como posso contatar sobre algum desaparecido?</AccordionTrigger>
                        <AccordionContent>
                            No feed na página inicial você deve apertar o botão "Método de contato"
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Não sei um local exato onde eu avistei, onde devo marcar no mapa?</AccordionTrigger>
                        <AccordionContent>
                            Você deve marcar na região geral onde você pensa ter visto aquela pessoa, e se precisar especifique isso na descrição.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Posso deletar algum cadastro que eu fiz?</AccordionTrigger>
                        <AccordionContent>
                            Sim, você pode! Você deve ir na página de "Meus envios" e clicar em deletar.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

export default PerguntasFrequentesPage;
