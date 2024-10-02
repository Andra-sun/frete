function S3() {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="p-4 md:p-16 text-left flex flex-col justify-center bg-gray-100 h-auto md:h-25">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                Destinos de Entrega
                </h1>
                <p className="mt-4 md:mt-10 mb-4 md:mb-6 text-base md:text-lg text-gray-600 max-w-xl">
                Atendemos a todos os destinos em território nacional.

Principalmente no estado Sudeste, que é onde encontra-se nossa sede.
                </p>
            </div>
            <div className="flex-shrink-0">
                <img
                    src="https://static.wixstatic.com/media/bdf21a_d2ba86d0a8c0439896a50aac9435d70e~mv2.jpg/v1/fill/w_564,h_615,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bdf21a_d2ba86d0a8c0439896a50aac9435d70e~mv2.jpg"
                    alt="Objetivo"
                    className="w-full md:w-auto h-auto"
                />
            </div>
        </div>
    );
}

export default S3;
