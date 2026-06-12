import { Opcoes } from "./Opcoes";
import casinha from "../../assets/public/casinha.png"
import voltar from "../../assets/public/voltar.png"
import { Link, useNavigate } from "react-router-dom";

const frases = [
  "Cada dia com você é uma bênção na minha vida",
  "Seu sorriso é o meu lugar favorito",
  "Você deixa o meu mundo mais colorido",
  "Te amar é a coisa mais fácil que já fiz",
  "Você é a razão do meu viver",
  "Com você, tudo faz sentido",
  "Não existe distância para o que sinto por você",
  "Eu amo você ❤️",
  "Você é meu lugar seguro",
  "Nada no mundo se compara ao que sinto por você",
  "Você ilumina meus dias",
  "Meu amor por você só cresce todos os dias",
];

export const LayoutOpcoes = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-screen bg-pink-100 overflow-hidden">

      {/* coluna esquerda bem distribuída */}
      <Opcoes text={frases[0]} delay={0} className="top-[8%] left-[8%]" />
      <Opcoes text={frases[1]} delay={0.4} className="top-[25%] left-[5%]" />
      <Opcoes text={frases[2]} delay={0.8} className="top-[45%] left-[10%]" />
      <Opcoes text={frases[3]} delay={1.2} className="top-[65%] left-[6%]" />

      {/* coluna direita bem distribuída */}
      <Opcoes text={frases[4]} delay={1.6} className="top-[10%] right-[6%]" />
      <Opcoes text={frases[5]} delay={2} className="top-[30%] right-[10%]" />
      <Opcoes text={frases[6]} delay={2.4} className="top-[50%] right-[5%]" />
      <Opcoes text={frases[7]} delay={2.8} className="top-[70%] right-[8%]" />

      {/* centro mais espalhado */}
      
      <Opcoes text={frases[8]} delay={3.2} className="top-[20%] left-[45%]" />
      <Opcoes text={frases[9]} delay={3.6} className="top-[40%] left-[48%]" />
      <Opcoes text={frases[10]} delay={4} className="top-[60%] left-[42%]" />
      <Opcoes text={frases[11]} delay={4.4} className="top-[80%] left-[50%]" />


    <div className="absolute top-[8%] left-[50%] flex gap-4 items-center -translate-x-1/2 bg-white/40 backdrop-blur-md px-5 py-2 rounded-full shadow-md border border-pink-100">

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
      className="w-10 h-10 cursor-pointer hover:scale-110 transition drop-shadow-sm"
    />
  </Link>

</div>


       

    </div>
  );
};