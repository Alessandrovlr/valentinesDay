import { useNavigate, Link } from "react-router-dom";
import voltar from "../assets/public/voltar.png"
import casinha from "../assets/public/casinha.png"

export const Sim = () => {
    const navigate = useNavigate()
  return (
    <main className="min-h-screen flex items-center justify-center  p-6">
      <div className="max-w-2xl text-center bg-white rounded-3xl shadow-xl p-10">

        <h1 className="text-5xl mb-6">
          ❤️ Então é isso...
        </h1>

        <p className="text-xl mb-4">
          Você aceitou.
        </p>

        <p className="text-xl mb-4">
          Mas eu reparei uma coisa...
        </p>

        <p className="text-xl mb-8">
          Você clicou no botão <strong>"Sim"</strong> e ignorou completamente o
          <strong> "Com toda certeza"</strong>.
        </p>

        <p className="text-2xl mb-8">
          Vou deixar voce escolher a opção certa.
        </p>

        <button onClick={() => navigate("/comcerteza")} className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg transition" >
              💖 Com toda certeza
        </button>

         <div className="flex justify-center items-center gap-6 mt-10 bg-white/40 backdrop-blur-md px-6 py-3 rounded-full shadow-md border border-pink-500">

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
    </main>
  );
};