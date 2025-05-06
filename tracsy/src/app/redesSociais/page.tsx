import { SocialLink } from "@/components/elements/socialLink";
import { PageTitle } from "@/components/ui/pageTitle";

function RedesSociaisPage() {
    return (
        <div className="lg:w-[40%] md:w-[60%] sm:w-[80%]">
            <PageTitle title="Redes sociais"/>
            <SocialLink
                href="https://www.instagram.com/"
                gradient="bg-gradient-to-r from-blue-800 via-purple-500 to-pink-500"
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png"
                title="Nosso instagram"
                description="Fique sabendo das nossas atualizações!"
            />

            <SocialLink
                href="https://www.youtube.com/"
                gradient="bg-gradient-to-r from-red-700 to-red-500"
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/YouTube_play_button_square_%282013-2017%29.svg/2048px-YouTube_play_button_square_%282013-2017%29.svg.png"
                title="Nosso Youtube"
                description="Vídeos sobre a plataforma!"
            />

            <SocialLink
                href="https://www.facebook.com/"
                gradient="bg-gradient-to-r from-blue-700 to-blue-500"
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/960px-Facebook_logo_%28square%29.png"
                title="Nosso Facebook"
                description="Saiba mais sobre nós!"
            />

            <SocialLink
                href="https://www.whatsapp.com/"
                gradient="bg-gradient-to-r from-green-700 to-green-600"
                imageSrc="https://cdn4.iconfinder.com/data/icons/miu-square-flat-social/60/whatsapp-square-social-media-512.png"
                title="Nosso Whatsapp"
                description="Converse conosco!"
            />
        </div>
    );
}

export default RedesSociaisPage;