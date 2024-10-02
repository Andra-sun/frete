function S1() {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex-shrink-0">
                <img
                    src="https://static.wixstatic.com/media/bdf21a_4443de5e32e04d7aa923cb228027f8bc~mv2.jpg/v1/crop/x_0,y_0,w_360,h_514,q_80,enc_auto/bdf21a_4443de5e32e04d7aa923cb228027f8bc~mv2.jpg"
                    alt="Objetivo"
                    className="w-full md:w-auto h-auto"
                />
            </div>
            <div className="p-4 md:p-16 text-left flex flex-col justify-center bg-white h-auto md:h-25">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                João Bosco
                </h1>
                <p className="mt-4 md:mt-10 mb-4 md:mb-6 text-base md:text-lg text-gray-600 max-w-xl">
                Proprietário. 

Responsável pelos orçamentos e a logística feitas pelos seus caminhões até o destino final 
                </p>
            </div>
        </div>
    );
}

export default S1;
