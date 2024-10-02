function S1() {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="p-4 md:p-16 text-left flex flex-col justify-center bg-gray-100 h-auto md:h-25">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                Nossos Véiculos
                </h1>
                <p className="mt-4 md:mt-10 mb-4 md:mb-6 text-base md:text-lg text-gray-600 max-w-xl">
                Confira abaixo quais são os nossos automotivos, para encontrar o que melhor se encaixa na sua necessidade!
                </p>
            </div>
            <div className="flex-shrink-0">
                <img
                    src="https://static.wixstatic.com/media/bdf21a_e6043269361e4c17bbb0edbe9ac3ed37~mv2.jpeg/v1/fill/w_846,h_650,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bdf21a_e6043269361e4c17bbb0edbe9ac3ed37~mv2.jpeg"
                    alt="Objetivo"
                    className="w-full md:w-auto h-auto"
                />
            </div>
        </div>
    );
}

export default S1;
