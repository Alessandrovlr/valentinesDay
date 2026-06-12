import { motion } from "framer-motion";
import { FlipCard } from "../components/FlipCard/FlipCard";
import { Link, useNavigate } from "react-router-dom";
import voltar from "../assets/public/voltar.png";
import casinha from "../assets/public/casinha.png";

export const Plans = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5eee8] flex items-center justify-center px-6 relative">

      {/* 💖 HEADER FLUTUANTE */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-white/40 backdrop-blur-md px-5 py-2 rounded-full shadow-md border border-pink-100 z-50">

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

      {/* 💌 CONTEÚDO */}
      <motion.div
        className="flex flex-col items-center gap-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        {/* TÍTULO */}
        <div>
          <h1 className="text-5xl italic text-[#7a5b4f] font-serif">
            Nosso futuro juntas 💕
          </h1>

          <p className="mt-3 text-[#8f7568] text-lg">
            Clique nos cartões para descobrir nossos planos ✨
          </p>
        </div>

        {/* CARDS */}
        <div className="flex flex-wrap justify-center gap-6">

          {/* CARD 1 */}
          <FlipCard
            front={
              <div className="flex flex-col items-center gap-3">
                <span className="text-6xl">💗</span>
                <h3 className="text-2xl italic text-[#8b6c5c] font-serif">
                  Confie...
                </h3>
              </div>
            }
            back={
              <div>
                <h3 className="text-2xl italic text-[#8b6c5c] font-serif mb-3">
                  Nosso primeiro abraço 💕
                </h3>
                <p className="text-[#6b5648] text-sm leading-relaxed">
                  Sem mais telas, só eu e você.
                </p>
              </div>
            }
          />

          {/* CARD 2 */}
          <FlipCard
            front={
              <div className="flex flex-col items-center gap-3">
                <span className="text-6xl">💗</span>
                <h3 className="text-2xl italic text-[#8b6c5c] font-serif">
                  Confie...
                </h3>
              </div>
            }
            back={
              <div>
                <h3 className="text-2xl italic text-[#8b6c5c] font-serif mb-3">
                  Nosso lar 🏠
                </h3>
                <p className="text-[#6b5648] text-sm leading-relaxed">
                  Manhãs simples, conversas até altas horas da noite.
                </p>
              </div>
            }
          />

          {/* CARD 3 */}
          <FlipCard
            front={
              <div className="flex flex-col items-center gap-3">
                <span className="text-6xl">💗</span>
                <h3 className="text-2xl italic text-[#8b6c5c] font-serif">
                  Confie...
                </h3>
              </div>
            }
            back={
              <div>
                <h3 className="text-2xl italic text-[#8b6c5c] font-serif mb-3">
                  Nosso Futuro 💕
                </h3>
                <p className="text-[#6b5648] text-sm leading-relaxed">
                  Tudo vai acontecer no momento certo. Quero viver cada etapa da nossa história ao seu lado.
                </p>
              </div>
            }
          />

        </div>

      </motion.div>

    </div>
  );
};