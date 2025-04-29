import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface AccordionData {
    trigger: string;
    content: string;
}

interface AccordionDinamicoProps {
    dados: AccordionData[];
}

export function AccordionDinamico({ dados }: AccordionDinamicoProps) {
    return (
        <Accordion type="single" collapsible className="w-full">
            {dados.map((entry, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger>{entry.trigger}</AccordionTrigger>
                    <AccordionContent>{entry.content}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
