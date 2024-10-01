function S3() {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="p-4 md:p-16 text-left flex flex-col justify-center bg-gray-100 h-auto md:h-25">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                    Nosso Objetivo
                </h1>
                <p className="mt-4 md:mt-10 mb-4 md:mb-6 text-base md:text-lg text-gray-600 max-w-xl">
                    Queremos fornecer soluções de transporte personalizadas para atender às suas demandas exclusivas.
                </p>
                <a
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    href="#"
                >
                    Ver opções de frete
                </a>
            </div>
            <div className="flex-shrink-0">
                <img
                    src="https://static.wixstatic.com/media/bdf21a_e987abf5a39b4d18b51127cb286e0da9~mv2.jpeg/v1/fill/w_649,h_614,al_c,q_85,enc_auto/bdf21a_e987abf5a39b4d18b51127cb286e0da9~mv2.jpeg"
                    alt="Objetivo"
                    className="w-full md:w-auto h-auto"
                />
            </div>
        </div>
    );
}

export default S3;
