//Define as propriedas que a função vai receber.
interface CompHomeProps {
    title: string;
    description: string;
    title2: string;
    description2: string;
    imgSrc: string;
}

export function GuiaHome({ title, title2, description, description2, imgSrc }: CompHomeProps) {
    return (
        //Div principal do GuiaHome
        <div className="flex justify-center">
            <div className="w-full p-2 gap-2 flex flex-col">
                {/*Recebe um título principal*/}
                <h1 className="font-bold text-xl text-center">{title}</h1>
                {/*Recebe uma descrição*/}
                <p className="font-normal text-3 text-center mb-3">{description}</p>
                {/*Div que centraliza a imagem*/}
                <div className="w-full flex justify-center">
                    {/*Recebe a imagem*/}
                    <img className="w-[70%] rounded-2xl shadow-[0_25px_20px_-15px_rgba(0,0,0,0.3)]" src={imgSrc} />
                </div>
                {/*Recebe uma título secundário*/}
                <h2 className="font-bold text-4">{title2}</h2>
                {/*Recebe uma descrição secundária*/}
                <p className="font-light text-3">{description2}</p>
                {/*Separador horizontal*/}
                <hr />
            </div>
        </div>
    );
}