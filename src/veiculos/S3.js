import React from "react";

const S3 = () => {
    return (
        <div className="flex justify-center sm:justify-start">
            <div className="max-w-sm w-full rounded overflow-hidden shadow-lg bg-white mx-4">
                <img 
                    className="w-full h-64 object-cover" 
                    src="https://static.wixstatic.com/media/bdf21a_c1b2b6cf92394ec5b8a5089a6a9e5250~mv2.jpg/v1/fill/w_455,h_455,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/bdf21a_c1b2b6cf92394ec5b8a5089a6a9e5250~mv2.jpg" 
                    alt="Produto"
                />
                
                <div className="p-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Orçamento</h2>

                    <h3 className="text-lg text-gray-600 mb-2">Fretes a partir de R$ 50,00</h3>

                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-600">1 h</span>
                        <span className="text-gray-600">R$ 50,00</span>
                    </div>

                    <p className="text-xl font-bold text-gray-800 mb-4">R$ 50</p>

                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                        Agendar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default S3;
