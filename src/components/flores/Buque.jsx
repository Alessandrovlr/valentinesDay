import "./Buque.css";
import flores from "../../assets/public/svg/flores.svg"
import { SvgBuque } from "./SvgBuque";
import { OpcoesPresente } from "../OpcoesPresente/OpcoesPresente";
import { Link, useNavigate } from "react-router-dom";
import casinha from "../../assets/public/casinha.png"
import voltar from "../../assets/public/voltar.png"
import violao from "../../assets/public/violao.png"
import chuvaAmor from "../../assets/public/001.png"
import cama from "../../assets/public/cama.png"
import ajeitadinho from "../../assets/public/ajeitadinho.png"
import { useState, useEffect } from "react";

export const Buque = () => {
  const navigate = useNavigate();

  // Estado para rastrear quais presentes já foram abertos
  const [visitadas, setVisitadas] = useState({
    futuro: false,
    cartinha: false,
    amorzinho: false,
  });

  // Checa no localStorage se já foram visitadas antes
  useEffect(() => {
    const futuro = localStorage.getItem("futuro") === "true";
    const cartinha = localStorage.getItem("cartinha") === "true";
    const amorzinho = localStorage.getItem("amorzinho") === "true";
    setVisitadas({ futuro, cartinha, amorzinho });
  }, []);

  // Função para marcar uma opção como visitada
  const marcarVisitada = (chave) => {
    localStorage.setItem(chave, "true");
    setVisitadas((prev) => ({ ...prev, [chave]: true }));
  };

  const todasVisitadas = visitadas.futuro && visitadas.cartinha && visitadas.amorzinho;

  return (
    <div className="mt-20 flex items-center justify-center">
      <div className="flex justify-center gap-5 items-center">

        {/* Coluna esquerda */}
        <div className="flex flex-col gap-10">
          {/* Segredo - bloqueado até abrir as outras */}
          <OpcoesPresente
            icon={<img src={ajeitadinho} alt="ajeitado" className="w-28 h-28 object-contain cursor-pointer" />}
            onClick={() => todasVisitadas && navigate("/pedido")}
            texto={todasVisitadas ? "Segredo" : "🔒 Segredo"}
            classeExtra={!todasVisitadas ? "cursor-not-allowed opacity-50" : ""}
          />

          <OpcoesPresente
            icon={<img src={cama} alt="Caminha" className="w-27 h-27 object-contain cursor-pointer" />}
            onClick={() => {
              marcarVisitada("futuro");
              navigate("/planos");
            }}
            texto="Futuro?"
          />
        </div>

        {/* Coluna central */}
        <div>
          <h1 className="text-center text-4xl font-bold text-pink-700 mb-8" style={{ fontFamily: "Chewy" }}>
            Escolha seu presente
          </h1>

          <div className="rounded-3xl bg-pink-300 flex items-center justify-center border border-black">
            <SvgBuque />
          </div>

          <div className="flex justify-center items-center gap-6 mt-10 bg-white/40 backdrop-blur-md px-6 py-3 rounded-full shadow-md border border-pink-100">
            {/* VOLTAR */}
            <img
              src={voltar}
              alt="Voltar"
              onClick={() => {
                if (window.history.length > 1) {
                  navigate(-1);
                } else {
                  navigate("/");
                }
              }}
              className="w-10 h-10 cursor-pointer hover:scale-110 transition drop-shadow-sm"
            />

            {/* HOME */}
            <Link to="/">
              <img
                src={casinha}
                alt="Home"
                className="w-12 h-12 cursor-pointer hover:scale-110 transition drop-shadow-sm"
              />
            </Link>
          </div>
        </div>

        {/* Coluna direita */}
        <div className="flex flex-col gap-10">
          <OpcoesPresente
            icon={<img src={violao} alt="violao" className="w-29 h-29 object-contain cursor-pointer" />}
            onClick={() => {
              marcarVisitada("cartinha");
              navigate("/cartinha");
            }}
            texto="Cartinha"
          />

          <OpcoesPresente
            icon={<img src={chuvaAmor} alt="chuva amor" className="w-25 h-25 object-contain cursor-pointer" />}
            onClick={() => {
              marcarVisitada("amorzinho");
              navigate("/frases");
            }}
            texto="Amorzinho"
          />
        </div>

      </div>
    </div>



      


//       <div className="min-h-screen flex flex-col items-center justify-center">
//   <h1 className="text-center text-4xl font-bold text-pink-700 mb-8"  style={{ fontFamily: "Chewy" }}>
//     Escolha seu presente
//   </h1>



//   <div className="mt-5">
//     <div
//       className="
//         w-125
//         h-125
//         rounded-3xl
//         bg-[#f4a6bc]
//         shadow-[0_8px_30px_rgba(0,0,0,0.15)]
//         border border-pink-200
//         flex items-center justify-center
//       "
//     >
//       <SvgBuque />
//     </div>
//   </div>
// </div>
   





   // <div className="flex justify-center items-center h-screen">
    
   //    <SvgBuque></SvgBuque>
    
   // </div>
  );
}