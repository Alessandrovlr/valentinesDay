import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const hearts = ["❤️", "💖", "💕", "💗", "💘"];
    const frases = ["Quer ver seu presentinho?",
      "TEM CERTEZA?",
      "PENSA MELHOR 😢",
      "CLICA EM SIM ❤️",
      "ULTIMA CHANCE!!!",
      "VAI VER SIM!!!"
    ];

    const [yesScale, setYesScale] = useState(1);
    const [noScale, setNoScale] = useState(1);
    const [noClicks, setNoClicks] = useState(0);
    const navigate = useNavigate();

    const handleNo = () => {
      const novoClique = noClicks + 1;

      setNoClicks(novoClique);
      setYesScale((prev) => prev + 0.2);
      setNoScale((prev) => Math.max(0.2, prev - 0.15));
    };

    const handleYes = () => {
      navigate("/presentes");
      console.log("Abrir presente ❤️");
    };
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(500)].map((_, index) => (
          <span
            key={index}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          >
            {hearts[Math.floor(Math.random() * hearts.length)]}
          </span>
        ))}
      </div>

      <main className="flex flex-col items-center justify-center min-h-screen text-center">
        <img src="src/assets/public/shycat.webp" alt="Gatinho" />
        <h1 className="text-[#8B1E3F] 
                text-lg" 
            style={{ fontFamily: "Chewy" }}>
                Oii Fofinha ❤️
        </h1>
        <br />
        <h2 className="text-5xl 
                text-[#8B1E3F] 
                font-bold 
                tracking-wide 
                drop-shadow-sm" 
            style={{ fontFamily: "Chewy" }}>
                {frases[noClicks]}
        </h2>
        <br />
        <div className="flex gap-8 mt-8">
          <button onClick={handleYes}
                  style={{ transform: `scale(${yesScale})` }}
                  className=" px-8 py-2
                  cursor-pointer
                  rounded-full
                  bg-linear-to-r
                  from-pink-500
                  to-pink-400
                  text-white
                  font-bold
                  text-sm
                  shadow-[0_4px_15px_rgba(236,72,153,0.5)]
                  hover:-translate-y-1
                  hover:scale-105
                  hover:shadow-[0_8px_20px_rgba(236,72,153,0.4)]
                  transition-all
                  duration-300">
                    SIMM
          </button>

        {noClicks < 5 && (
                <button onClick={handleNo}
                style={{ transform: `scale(${noScale})` }}
                className=" px-8 py-2
                cursor-pointer
                rounded-full
                bg-pink-300
                text-pink-900
                font-bold
                text-sm
                border
                border-pink-400
                shadow-[0_4px_10px_rgba(236,72,153,0.2)]
                hover:-translate-y-1
                hover:scale-105
                hover:shadow-[0_8px_20px_rgba(236,72,153,0.4)]
                transition-all
                duration-300">
                  NÃOO
          </button>
        )}
        </div>
      </main>
      
    </>
  );
}