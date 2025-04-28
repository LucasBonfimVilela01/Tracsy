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
                        <AccordionTrigger>Pergunta2?</AccordionTrigger>
                        <AccordionContent>
                            resposta 2
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Pergunta3?</AccordionTrigger>
                        <AccordionContent>
                            resposta 3
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

export default PerguntasFrequentesPage;
