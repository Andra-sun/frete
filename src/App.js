import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Sobre from "./Sobre";
import Veiculo from "./Veiculo";
import Galeria from "./Galeria";
import Contato from "./Contato";
import Footer from "./Footer";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/veiculos" element={<Veiculo />} />
                <Route path="/galeria" element={<Galeria />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
