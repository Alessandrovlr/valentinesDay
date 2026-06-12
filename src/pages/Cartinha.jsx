import { motion } from "framer-motion";
import moldura from "../assets/public/moldura.png";
import { Link, useNavigate } from "react-router-dom";
import voltar from "../assets/public/voltar.png";
import casinha from "../assets/public/casinha.png";

export const Cartinha = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-pink-100 overflow-hidden">

      {/* 💖 HEADER FLUTUANTE */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50 bg-white/40 backdrop-blur-md rounded-full px-5 py-2 shadow-md">

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
          className="w-9 h-9 cursor-pointer hover:scale-110 transition"
        />

        {/* HOME */}
        <Link to="/">
          <img
            src={casinha}
            alt="Home"
            className="w-10 h-10 cursor-pointer hover:scale-110 transition"
          />
        </Link>

      </div>

      {/* 🌸 MOLDURA DE FLORES */}
      <motion.img
        src={moldura}
        alt="Moldura de flores"
        className="absolute w-245 opacity-70"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* 💌 CARTA */}
      <motion.div
        className="
          relative
          z-10
          w-[90%]
          max-w-162.5
          aspect-4/3

          bg-linear-to-b from-white/80 to-pink-50/60
          backdrop-blur-md

          border border-pink-200
          rounded-xl

          p-10

          shadow-[0_25px_70px_rgba(0,0,0,0.25)]
          ring-2 ring-pink-200/40

          flex flex-col items-center justify-center
          text-center
        "
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <h1 className="text-3xl font-bold text-pink-700 mb-4">
          My Love ❤️
        </h1>

        <p className="text-pink-800 leading-relaxed text-lg">
          Escrevi isso pra te lembrar o quanto você é especial pra mim.
          Cada detalhe seu faz meu mundo mais bonito, mais leve e mais feliz.
          <br /><br />

          Espero que você sempre conte comigo pra tudo, tanto nos momentos engraçados quanto nos momentos difíceis.
          Eu quero estar ao seu lado em cada detalhe da sua vida, te apoiando, te fazendo sorrir e sendo sempre seu apoio quando você precisar.
          <br /><br />

          Você sempre me ajuda e me trata com tanto carinho e fofura, que às vezes eu nem consigo explicar o quanto isso me faz bem.
          Você tem um jeito especial que deixa meus dias melhores só por você estar neles.
          <br /><br />

          Você é meu lugar favorito no mundo inteirinho.
          <br /><br />

          Te amo 🌸
        </p>
      </motion.div>

    </div>
  );
};