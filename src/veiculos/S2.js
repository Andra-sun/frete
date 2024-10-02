function S2() {
    return (
        <div className="flex flex-col text-center items-center p-12">
            <div className="w-full p-4 my-16">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                    Veículos Disponíveis
                </h1>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6">
                <div className="flex flex-col items-center">
                    <img
                        src="https://static.wixstatic.com/media/bdf21a_e37dabc330ee401baa11252329dcdcec~mv2.jpeg/v1/crop/x_0,y_160,w_960,h_960/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202024-06-02%20at%2019_43_28%20(4).jpeg"
                        className="w-32 h-32 rounded-full object-cover"
                    />
                    <p className="mt-2">Kia Bongo</p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://static.wixstatic.com/media/bdf21a_93a01de3d6604c16b531132f082f74ce~mv2.jpg/v1/crop/x_0,y_1,w_946,h_946/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202024-06-02%20at%2019_28_edited.jpg"
                        className="w-32 h-32 rounded-full object-cover"
                    />
                    <p className="mt-2">Volkswagen 8140</p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://static.wixstatic.com/media/bdf21a_e3bae5a6b5854563ab63eccce544aa7a~mv2.jpg/v1/crop/x_115,y_0,w_696,h_696/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202024-06-02%20at%2019_46_edited.jpg"
                        className="w-32 h-32 rounded-full object-cover"
                    />
                    <p className="mt-2">S-10</p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://static.wixstatic.com/media/bdf21a_be3b8d5a10684acf9a9b929b7ab80ca7~mv2.jpg/v1/crop/x_0,y_160,w_960,h_960/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/photo_4933986433564257834_y.jpg"
                        className="w-32 h-32 rounded-full object-cover"
                    />
                    <p className="mt-2">Strada</p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://static.wixstatic.com/media/bdf21a_0992133e69054033898a49847f74223d~mv2.jpg/v1/crop/x_0,y_11,w_670,h_670/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202024-06-02%20at%2019_48_edited.jpg"
                        className="w-32 h-32 rounded-full object-cover"
                    />
                    <p className="mt-2">Montana</p>
                </div>
            </div>
        </div>
    );
}

export default S2;
