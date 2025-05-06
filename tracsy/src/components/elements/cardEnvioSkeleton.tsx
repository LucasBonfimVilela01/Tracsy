export function CardEnvioSkeleton() {
  return (
    <div className="bg-gray-200 rounded-lg shadow-lg w-full animate-pulse">
      <div className="flex flex-col md:flex-row">
        {/* Skeleton para a foto */}
        <div className="w-full md:w-1/3">
          <div className="w-full h-64 bg-gray-300 rounded-tl-lg md:rounded-bl-lg"></div>
        </div>

        {/* Skeleton para as informações */}
        <div className="w-full md:w-2/3 p-6">
          <div className="mb-4">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
          <div className="mb-4">
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
          <div className="mb-0">
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}