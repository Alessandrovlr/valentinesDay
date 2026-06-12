import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { PageNotFound } from "../pages/PageNotFound";
import { Presentes } from "../pages/Presentes";
import { PresenteFrases } from "../pages/PresenteFrases";
import { Cartinha } from "../pages/Cartinha";
import { Plans } from "../pages/Plans";
import Pedido from "../pages/Pedido";
import { Sim } from "../pages/Sim";
import { ComCerteza } from "../pages/ComCerteza";


export const Rotas = () => {
  return (
    
    <Routes>
      <Route index element={<Home />} />
      <Route path="/presentes" element={<Presentes />} />
      <Route path="/frases" element={<PresenteFrases/>} />
      <Route path="/cartinha" element={<Cartinha/>} />
      <Route path="/planos" element={<Plans/>} />
      <Route path="/pedido" element={<Pedido/>} />
      <Route path="/sim" element={<Sim/>} />
      <Route path="/comcerteza" element={<ComCerteza/>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};