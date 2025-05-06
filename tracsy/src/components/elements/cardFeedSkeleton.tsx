export function CardFeedSkeleton() {
    return (
        <div className="w-full h-125 flex bg-gray-200 rounded-xl animate-pulse">
            {/* Skeleton para a imagem */}
            <div className="w-[48%] h-full p-3 flex flex-col mt-2">
                <div className="w-full h-[40%] bg-gray-300 rounded-xl"></div>
                {/* Skeleton para o texto */}
                <div className="mt-4 space-y-2">
                    <div className="h-1 bg-gray-300 rounded w-4/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
                {/* Skeleton para o botão */}
                <div className="mb-5 mt-auto h-10 bg-gray-300 rounded w-[60%] self-center"></div>
            </div>
            {/* Skeleton para o mapa */}
            <div className="bg-gray-300 w-[52%] h-full rounded-xl"></div>
        </div>
    );
}