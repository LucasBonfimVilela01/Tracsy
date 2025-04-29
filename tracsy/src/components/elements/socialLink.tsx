interface SocialLinkProps {
    href: string;
    gradient: string;
    imageSrc: string;
    title: string;
    description: string;
  }
  
  export function SocialLink({ href, gradient, imageSrc, title, description }: SocialLinkProps) {
    return (
      <div className="pb-10 min-h-[128px]">
        <a className="min-h-full" href={href}>
          <div className={`flex items-center ${gradient} rounded-2xl text-white shadow-[0_35px_20px_-15px_rgba(0,0,0,0.3)]`}>
            <div className="h-[17%] w-[15%]">
              <img className="scale-120 rounded-2xl" src={imageSrc} alt={title} />
            </div>
            <div className="h-[17%] w-[3%]" />
            <div className="h-[17%] w-[82%] p-2">
              <h1 className="font-bold text-6">{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }