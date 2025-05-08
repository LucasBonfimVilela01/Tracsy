export function CardFeedSkeleton() {
    return (
        <div className="w-full sm:h-125 h-[700px] flex flex-col sm:flex-row bg-gray-200 rounded-xl animate-pulse justify-center justify-items-center">
            {/* Skeleton para o content */}
            <div className="h-[425px] sm:w-[48%] sm:h-full p-3 mt-2">
                <div className="p-4 h-[80%]">
                    <div className="mx-auto w-[50%] sm:w-full h-[40%] bg-gray-300 rounded-xl" />
                    <div className="h-4 bg-gray-300 rounded w-1/4 sm:w-2/4 mt-2 mx-auto" />
                    <div className="h-4 bg-gray-300 rounded w-3/8 sm:w-3/4 mt-5 mx-auto" />
                    {/* Skeleton para o texto e espaçador*/}
                    <div className="mt-4 space-y-2 pb-2">
                        <div className="h-1 bg-gray-300 rounded w-2/2 mb-4" />
                        <div className="h-4 bg-gray-300 rounded w-1/4" />
                        <div className="h-12 bg-gray-300 rounded w-2/2" />
                    </div>
                </div>
                <div className="h-[20%] pb-0 flex justify-center items-center">
                    {/* Skeleton para o botão */}
                    <div className="mb-1 sm:mb-5 h-10 bg-gray-300 rounded w-[60%] self-center" />
                </div>
            </div>
            {/* Skeleton para o mapa */}
            <div className="bg-gray-300 w-full h-[275px] sm:w-[52%] sm:h-full rounded-xl" />
        </div>
    );
}