"use client"
import { PageTitle } from "@/components/ui/pageTitle";

//imports pro form
"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
//fim imports form


//formatação caracteres max e min das fields
const formSchema = z.object({
    username: z.string().min(2).max(50)
})

//format do form baseado num já importado
export function ProfileForm(){
    //define o seu formm
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    //define o envio

    function onSubmit(values: z.infer<typeof formSchema>){
        //ao submitar os valores serão salvos e validados
        console.log(values)
    }

    //retorno
    return(
        <Form {...form}>
        <form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
                control={form.control}
                name="username"
                render={({field}) =>(
                    <FormItem>
                        <FormLabel>Nome do Usuário</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                            Esse é seu nome
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}            
            />
            <Button type="submit"> Enviar </Button>
        </form>
    </Form>
    )
}
//fim form



function CadastroPage() {
    return (
        <div className="container flex justify-center items-center">
            <PageTitle title="Cadastro"/>
            <ProfileForm/>
        </div>
    );
}

export default CadastroPage;
