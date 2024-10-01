import React, { useState, useEffect } from "react";

const Carousel = () => {
    const slides = [
        {
            text: "“Estou muito satisfeito com o serviço prestado.”",
            name: "Lucas Silva"
        },
        {
            text: "“A equipe de FreteParaTodoOBrasil demonstrou profissionalismo e atenção aos detalhes. Recomendo-os para qualquer necessidade de transporte.”",
            name: "Maria Oliveira"
        },
        {
            text: "“Confiei a entrega da minha carga à FreteParaTodoOBrasil e fiquei impressionado com o cuidado e comprometimento demonstrados. Excelente serviço!”",
            name: "Pedro Santos"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Altera para o próximo slide a cada 5 segundos
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    return (
        <div className="relative w-full h-96 bg-cover bg-center" style={{
            backgroundImage: `url('https://static.wixstatic.com/media/0b340f_0d1ab852ddde4f09a1e244c2aa3c37a0~mv2.png/v1/fill/w_1368,h_529,al_b,q_90,usm_0.66_1.00_0.01,enc_auto/0b340f_0d1ab852ddde4f09a1e244c2aa3c37a0~mv2.png')`
        }}>
            {/* Filtro de fundo */}
            <div className="absolute inset-0 bg-white opacity-80"></div>

            {/* Título */}
            <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-3xl md:text-4xl text-gray-800 font-bold z-10">
                Experiências Compartilhadas
            </h1>

            {/* Slides */}
            <div className="absolute inset-x-0 top-28 flex justify-center">
                <div className="overflow-hidden rounded-lg w-11/12 sm:w-3/4 md:w-1/2">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-full h-60 flex flex-col items-center justify-center text-center p-6 bg-white shadow-lg rounded-lg mx-2"
                            >
                                <h4 className="text-lg md:text-xl font-semibold text-gray-800">
                                    {slide.text}
                                </h4>
                                <p className="mt-2 text-sm md:text-base text-gray-600">
                                    {slide.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pontos de navegação */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
