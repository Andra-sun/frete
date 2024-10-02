function S1(){
    return (
        <div className="relative h-screen bg-cover bg-center">
        <div
            className="absolute inset-0 bg-cover"
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
    );
}
export default S1;
