import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProdutosPage from "./pages/ProdutosPage";
import UnidadesMedidaPage from "./pages/UnidadesMedidaPage";
import Header from "./shared/components/Header";

import Nav from "./shared/components/Nav";


export default function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      
       <Header/>
       <Nav />
        
        <Routes>
          <Route path="/" element={<ProdutosPage />} />
          <Route path="/unidadesmedida" element={<UnidadesMedidaPage  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
