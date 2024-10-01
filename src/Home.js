import React from "react";
import Carousel from './Carousel';

const Home = () => {
    return (
        <>
            <div className="relative h-screen bg-cover bg-center">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url('https://static.wixstatic.com/media/bdf21a_8c72ba5f8ce74c9fb9b66fbeb7bdba08~mv2.jpg/v1/fill/w_1280,h_692,al_c,q_85,enc_auto/bdf21a_8c72ba5f8ce74c9fb9b66fbeb7bdba08~mv2.jpg')`,
                        filter: "brightness(0.3)",
                    }}
                />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                    <h1 className="text-3xl font-bold text-white mb-8">
                        Bem-vindo ao Bosco Frete!
                    </h1>
                    <p className="mt-2 text-md text-gray-200 max-w-md">
                        Nossa equipe está pronta para atender às suas
                        necessidades de transporte com segurança e cuidado.
                    </p>
                    <a
                        href="#veiculos"
                        className="mt-6 px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-200"
                    >
                        Solicitar orçamento
                    </a>
                </div>
            </div>

            <div className="p-28 bg-gray-100 text-left">
                <h1 className="text-4xl font-bold text-gray-800">
                    Experiência de transporte confiável
                </h1>
                <p className="mt-10 text-lg text-gray-600 max-w-xl">
                    Oferecemos um serviço de transporte confiável e seguro para
                    atender às suas necessidades. Conte conosco para entregar
                    sua carga com eficiência e pontualidade.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <img
                        src="https://static.wixstatic.com/media/bdf21a_71d404a0f0674ef18080ac6bf6a41f0c~mv2.jpeg/v1/fill/w_277,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bdf21a_71d404a0f0674ef18080ac6bf6a41f0c~mv2.jpeg"
                        alt="Transporte de carga 1"
                        className="w-64 h-auto rounded shadow-lg"
                    />
                    <img
                        src="https://static.wixstatic.com/media/bdf21a_29e4c2667a1d44abaa32e087618815aa~mv2.jpeg/v1/fill/w_277,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bdf21a_29e4c2667a1d44abaa32e087618815aa~mv2.jpeg"
                        alt="Transporte de carga 2"
                        className="w-64 h-auto rounded shadow-lg"
                    />
                    <img
                        src="https://static.wixstatic.com/media/bdf21a_f2951a2d42824a3c92a52cdb69460c4a~mv2.jpeg/v1/fill/w_277,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bdf21a_f2951a2d42824a3c92a52cdb69460c4a~mv2.jpeg"
                        alt="Transporte de carga 3"
                        className="w-64 h-auto rounded shadow-lg"
                    />
                </div>
            </div>
            <div className="flex">
                <div className="p-16 text-left flex flex-col  justify-center bg-gray-100 h-25">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Nosso Objetivo
                    </h1>
                    <p className="mt-10 mb-6 text-lg text-gray-600 max-w-xl">
                        Queremos fornecer soluções de transporte personalizadas
                        para atender às suas demandas exclusivas.
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
                        alt=""
                        className="h-auto"
                    />
                </div>
            </div>
            <Carousel />
        </>
    );
};

export default Home;
