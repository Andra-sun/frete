const Contato = () => {
    return (
      <div className="p-6 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4">Contato</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Telefone:</h2>
          <p className="text-gray-700">(024) 99963-9446</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Instagram:</h2>
          <p className="text-blue-500 hover:underline">
            <a href="https://www.instagram.com/freteparatodoobrasil/" target="_blank" rel="noopener noreferrer">
              https://www.instagram.com/freteparatodoobrasil/
            </a>
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Facebook:</h2>
          <p className="text-blue-500 hover:underline">
            <a href="https://www.facebook.com/search/top?q=fretes%20para%20todo%20brasil" target="_blank" rel="noopener noreferrer">
              https://www.facebook.com/search/top?q=fretes%20para%20todo%20brasil
            </a>
          </p>
        </div>
      </div>
    );
  };
  
export default Contato;
  