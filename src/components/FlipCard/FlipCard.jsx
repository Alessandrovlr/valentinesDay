import { useState } from "react";

export const FlipCard = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="w-52 h-52 cursor-pointer perspective"
    >
      <div
        className={`
          relative w-full h-full duration-700 transform
          ${flipped ? "rotate-y-180" : ""}
          transition-all
        `}
        style={{ transformStyle: "preserve-3d" }}
      >

        {/* FRENTE */}
        <div className="absolute w-full h-full backface-hidden bg-white/60 backdrop-blur-md border border-pink-200 rounded-2xl flex items-center justify-center shadow-md text-pink-700 font-bold">
          {front}
        </div>

        {/* VERSO */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-pink-200/60 backdrop-blur-md border border-pink-300 rounded-2xl flex items-center justify-center p-4 text-pink-800 text-sm text-center shadow-md">
          {back}
        </div>

      </div>
    </div>
  );
};