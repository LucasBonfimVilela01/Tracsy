interface CompHomeProps {
    title: string;
    description: string;
    title2: string;
    description2: string;
    imgSrc: string;
}

export function GuiaHome({ title, title2, description, description2, imgSrc }: CompHomeProps) {
    return (
        <div className="flex justify-center">
            <div className="w-full p-2 gap-2 flex flex-col">
                <h1 className="font-bold text-xl text-center">{title}</h1>
                <p className="font-light text-3 text-center">{description}</p>
                <div className="w-full flex justify-center">
                    <img className="w-[70%] rounded-2xl shadow-[0_25px_20px_-15px_rgba(0,0,0,0.3)]" src={imgSrc} />
                </div>
                <h2 className="font-bold text-4">{title2}</h2>
                <p className="font-light text-3">{description2}</p>
                <hr />
            </div>
        </div>
    );
}