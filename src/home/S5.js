function S5() {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="p-4 md:p-16 text-left flex flex-col justify-center bg-gray-100 h-auto md:h-25">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                    Explore nossos serviços de transporte
                </h1>
                <p className="mt-4 md:mt-10 mb-4 md:mb-6 text-base md:text-lg text-gray-600 max-w-xl">
                    Conheça mais sobre nossos serviços e descubra como podemos atender às suas necessidades.
                </p>
                <a
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    href="/sobre"
                >
                    Saiba mais
                </a>
            </div>
            <div className="flex-shrink-0">
                <img
                    src="https://static.wixstatic.com/media/bdf21a_c2f34f6b69224ab1a3fcb8b909fe7d92~mv2.jpg/v1/fill/w_846,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bdf21a_c2f34f6b69224ab1a3fcb8b909fe7d92~mv2.jpg"
                    alt="Serviços de Transporte"
                    className="w-full md:w-auto h-auto"
                />
            </div>
        </div>
    );
}

export default S5;
