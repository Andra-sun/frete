import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-8">
            <div className="container mx-auto text-center flex flex-col md:flex-row justify-between">
                {/* Seção Endereço */}
                <div className="flex flex-col space-y-2 mt-2 md:mt-0 max-w-xs mx-auto">
                    <h2 className="text-lg font-semibold">Endereço</h2>
                    <p className="text-sm">R. Julieta Conceição Réis - Frade (Cunhambebe), Angra dos Reis - RJ, 23946-020</p>
                </div>
                {/* Seção Telefone */}
                <div className="flex flex-col space-y-2 mt-2 md:mt-0 max-w-xs mx-auto">
                    <h2 className="text-lg font-semibold">Telefone</h2>
                    <p className="text-sm">(024) 99963-9446</p>
                </div>
                {/* Seção Redes Sociais */}
                <div className="flex flex-col space-y-2 mt-2 md:mt-0 max-w-xs mx-auto">
                    <h2 className="text-lg font-semibold">Redes</h2>
                    <div className="flex space-x-4 justify-center">
                        <a href="https://www.instagram.com/freteparatodoobrasil/" className="hover:text-gray-400 text-2xl"><i className="fi fi-brands-instagram"></i></a>
                        <a href='https://www.facebook.com/search/top?q=fretes%20para%20todo%20brasil' className="hover:text-gray-400 text-2xl"><i className="fi fi-brands-facebook"></i></a>
                    </div>
                </div>
            </div>
            <div className="text-center text-sm mt-4">
                <p>&copy; 2024 Bosco Frete. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
