import { PageTitle } from "@/components/ui/pageTitle";
import { Form } from "@/components/elements/form";


function CadastroPage() {
    return (
        <>
        <div className="w-full max-w-md mx-auto p-6 rounded-md shadow-md bg-violet-300 ">
       <PageTitle title="Cadastro" />
       <Form title="Insira suas informações"/>
       </div>
       </>
    );
}

export default CadastroPage;