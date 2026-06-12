export const OpcoesPresente = ({ icon, onClick, texto}) => {
  return (
    <button
      onClick={onClick}
      className="
        w-42 h-42
        rounded-2xl
        bg-pink-300
        border border-black
        shadow-lg
        flex items-center justify-center
        hover:scale-105
        hover:bg-pink-100
        transition-all duration-300
        flex-col
      "
    >
      {icon}
      <p style={{ fontFamily: "Chewy" }}>{texto}</p>
    </button>
  );
}