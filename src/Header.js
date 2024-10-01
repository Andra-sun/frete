import React, { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#/" className="flex items-center">
                    <svg
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="10 49.5 180 101"
                        height="50"
                        width="50"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-4 text-white"
                        role="presentation"
                        aria-hidden="true"
                    >
                        <g>
                            <path
                                d="M162.254 64.751H141.4V49.5H41.5v21.531H10v6.28h37.8V55.78h87.3v75.358H87.925c-1.988-5.542-7.23-9.833-13.646-9.833s-11.658 4.023-13.646 9.833H47.8v-8.074h-6.3v15.251h19.258c.985 6.95 6.981 12.185 14.052 12.185 7.16 0 13.157-5.235 14.052-12.185h57.998c.985 6.95 6.981 12.185 14.052 12.185 7.16 0 13.157-5.235 14.052-12.185H190V96.162c-.537-19.045-11.188-31.411-27.746-31.411zM73.99 143.787c-4.23 0-7.74-3.499-7.74-7.715 0-4.216 3.51-7.715 7.74-7.715s7.74 3.499 7.74 7.715c0 4.306-3.42 7.715-7.74 7.715zm86.49 0c-4.23 0-7.74-3.499-7.74-7.715 0-4.216 3.51-7.715 7.74-7.715s7.74 3.499 7.74 7.715c.09 4.306-3.42 7.715-7.74 7.715zm22.502-11.752h-8.986c-1.997-5.603-7.262-9.941-13.707-9.941-6.263 0-11.71 4.067-13.707 9.941H140.5V71.031h21.15c13.071 0 21.15 9.67 21.15 25.215v35.789h.182zM42.476 97.047H15.4v-6.28h26.1v-6.28h6.3v12.56h-5.324zm0 18.84H19.9v-6.28h21.6v-6.28h6.3v12.56h-5.324z"
                                fill="currentColor"
                            />
                        </g>
                    </svg>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold">Bosco Frete</span>
                        <span className="text-sm text-gray-400">para todo o Brasil</span>
                    </div>
                </a>

                {/* Botão do menu hambúrguer para mobile */}
                <button 
                    className="text-white block lg:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                {/* Navegação em telas maiores */}
                <nav className="hidden lg:block">
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#sobre" className="hover:text-gray-300">
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a href="#veiculos" className="hover:text-gray-300">
                                Veículos
                            </a>
                        </li>
                        <li>
                            <a href="#galeria" className="hover:text-gray-300">
                                Galeria
                            </a>
                        </li>
                        <li>
                            <a href="#contato" className="hover:text-gray-300">
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Navegação para mobile */}
            {isMenuOpen && (
                <nav className="lg:hidden">
                    <ul className="flex flex-col space-y-4 mt-4">
                        <li>
                            <a href="#sobre" className="block text-center hover:text-gray-300">
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a href="#veiculos" className="block text-center hover:text-gray-300">
                                Veículos
                            </a>
                        </li>
                        <li>
                            <a href="#galeria" className="block text-center hover:text-gray-300">
                                Galeria
                            </a>
                        </li>
                        <li>
                            <a href="#contato" className="block text-center hover:text-gray-300">
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
