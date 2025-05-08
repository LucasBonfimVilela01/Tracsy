//Define as propriedas que a função vai receber.
interface SocialLinkProps {
    href: string;
    gradient: string;
    imageSrc: string;
    title: string;
    description: string;
  }
  
  export function SocialLink({ href, gradient, imageSrc, title, description }: SocialLinkProps) {
    return (
      //Div principal do SocialLink
      <div className="pb-10 min-h-[128px]">
        {/*Defina a url que você sera redirecionado ao clicar*/}
        <a className="min-h-full" href={href}>
          {/*Define o gradiente (de qual cor para qual cor de forma gradual) o link tera*/}
          <div className={`flex items-center ${gradient} rounded-2xl text-white shadow-[0_35px_20px_-15px_rgba(0,0,0,0.3)]`}>
            <div className="h-[17%] w-[15%]">
              {/*Define a imagem da rede social e seu texto alternativo como o título*/}
              <img className="scale-120 rounded-2xl" src={imageSrc} alt={title} />
            </div>
            <div className="h-[17%] w-[3%]" />
            <div className="h-[17%] w-[82%] p-2">
              {/*Recebe o título para o link*/}
              <h1 className="font-bold text-6">{title}</h1>
              {/*Recebe a o texto descritivo para o link*/}
              <p>{description}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }