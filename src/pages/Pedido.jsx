import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import voltar from "../assets/public/voltar.png"
import casinha from "../assets/public/casinha.png"

export default function Pedido() {
    const [page, setPage] = useState(0);

    const next = () => setPage((p) => p + 1);
    const prev = () => setPage((p) => p - 1);
    const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-pink-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-12 ">

        {page === 0 && (
          <>
            <h1 className="text-5xl mb-8">
              Tem uma coisa que ficou faltando...
            </h1>

            <p className="text-xl">
              Às vezes eu paro para pensar em tudo o que construímos juntos.
             
              Nas conversas que pareciam durar poucos minutos, mas atravessavam horas.
           

                Nos dias bons que compartilhamos.
         
                E nos dias difíceis que enfrentamos juntos.
          

                Mesmo com a distância, você se tornou uma das pessoas mais importantes da minha vida.
            </p>
          </>
        )}

        {page === 1 && (
          <>
            <h1 className="text-4xl mb-8">
              E a verdade é que...
            </h1>

            <p className="text-xl">
              Em nenhum momento eu precisei escolher me apaixonar por você.
              Simplesmente aconteceu.

Aos poucos você virou a primeira pessoa para quem eu queria contar as novidades.

A pessoa que eu procurava quando algo dava certo.

E também quando algo dava errado.

Você se tornou lar, mesmo estando tão longe.
            </p>
          </>
        )}

        {page === 2 && (
          <>
            <h1 className="text-4xl mb-8">
              Mas existe um detalhe curioso
            </h1>

            <p className="text-xl">
                Nosso amor aconteceu de forma tão natural que nós acabamos pulando uma etapa.

                Não porque ela não fosse importante.

                Mas porque estar com você já parecia a decisão mais óbvia do mundo.

                Ainda assim... 

                Existe uma pergunta que eu gostaria de fazer.
            </p>
          </>
        )}

        {page === 3 && (
          <>
            <h1 className="text-4xl mb-8">
               🌹 Então...
            </h1>

            <p className="text-xl">
                Mesmo sabendo que meu coração já escolheu você há muito tempo.

                Mesmo sabendo que você já faz parte da minha vida.

                Mesmo sabendo que a resposta talvez já esteja escrita em tudo o que vivemos até aqui...
            </p>
          </>
        )}

        {page === 4 && (
          <>
            <h2 className="text-5xl mb-8">
              Para você ❤️
            </h2>

            <p className="text-2xl mb-8">
                Você aceita oficializar aquilo que já sentimos há tanto tempo?

                Aceita ser minha namorada do jeito que eu deveria ter perguntado desde o começo?
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <button onClick={() => navigate("/sim")} className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg transition cursor-pointer" >
              💖    Sim
                </button>

                <button  onClick={() => navigate("/comcerteza")} className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-4 rounded-full text-lg transition cursor-pointer">
                💖 Com toda certeza
                </button>
           </div>
          </>
        )}

        <div className="flex justify-between mt-10">
          <button
            onClick={prev}
            disabled={page === 0}
            className="px-6 py-3 rounded-full bg-gray-200 disabled:opacity-30 cursor-pointer"
          >
            Voltar
          </button>

          <button
            onClick={next}
            disabled={page === 4}
            className="px-6 py-3 rounded-full bg-pink-500 text-white cursor-pointer"
          >
            Próximo
          </button>
        </div>

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
}


// export default function Pedido() {
//   return (
//     <main className="min-h-screen bg-linear-to-b">
//       <div className="max-w-3xl mx-auto px-6 py-24">

//         <section className="mb-32 text-left">
//           <h1 className="text-5xl font-light mb-8">
//             Tem uma coisa que ficou faltando...
//           </h1>

//           <p className="text-xl leading-relaxed">
//             Às vezes eu paro para pensar em tudo o que construímos juntos.
//           </p>

//           <p className="text-xl leading-relaxed mt-4">
//             Nas conversas que pareciam durar poucos minutos, mas atravessavam horas.
//           </p>

//           <p className="text-xl leading-relaxed mt-4">
//             Nos dias bons que compartilhamos.
//           </p>

//           <p className="text-xl leading-relaxed mt-4">
//             E nos dias difíceis que enfrentamos juntos.
//           </p>

//           <p className="text-xl leading-relaxed mt-4">
//             Mesmo com a distância, você se tornou uma das pessoas mais importantes da minha vida.
//           </p>
//         </section>

//         <section className="mb-32">
//           <h2 className="text-4xl font-light text-left mb-8">
//             E a verdade é que...
//           </h2>

//           <div className="space-y-5 text-xl leading-relaxed">
//             <p>
//               Em nenhum momento eu precisei escolher me apaixonar por você.
//             </p>

//             <p>
//               Simplesmente aconteceu.
//             </p>

//             <p>
//               Aos poucos você virou a primeira pessoa para quem eu queria contar as novidades.
//             </p>

//             <p>
//               A pessoa que eu procurava quando algo dava certo.
//             </p>

//             <p>
//               E também quando algo dava errado.
//             </p>

//             <p>
//               Você se tornou lar, mesmo estando tão longe.
//             </p>
//           </div>
//         </section>

//         <section className="mb-32">
//           <h2 className="text-4xl font-light text-center mb-8">
//             Mas existe um detalhe curioso
//           </h2>

//           <div className="space-y-5 text-xl leading-relaxed">
//             <p>
//               Nosso amor aconteceu de forma tão natural que nós acabamos pulando uma etapa.
//             </p>

//             <p>
//               Não porque ela não fosse importante.
//             </p>

//             <p>
//               Mas porque estar com você já parecia a decisão mais óbvia do mundo.
//             </p>

//             <p>
//               Ainda assim...
//             </p>

//             <p>
//               Existe uma pergunta que eu gostaria de fazer.
//             </p>
//           </div>
//         </section>

//         {/* Aqui você pode colocar seu SVG do buquê */}
//         <section className="flex justify-center my-40">
//           <div className="text-7xl">
//             🌹
//           </div>
//         </section>

//         <section className="mb-32 text-left">
//           <h2 className="text-4xl font-light mb-10">
//             Então...
//           </h2>

//           <div className="space-y-6 text-xl leading-relaxed">
//             <p>
//               Mesmo sabendo que meu coração já escolheu você há muito tempo.
//             </p>

//             <p>
//               Mesmo sabendo que você já faz parte da minha vida.
//             </p>

//             <p>
//               Mesmo sabendo que a resposta talvez já esteja escrita em tudo o que vivemos até aqui...
//             </p>
//           </div>
//         </section>

//         <section className="text-left py-24">
//           <h2 className="text-5xl font-semibold mb-8">
//             Para você ❤️
//           </h2>

//           <p className="text-2xl leading-relaxed mb-6">
//             Você aceita oficializar aquilo que já sentimos há tanto tempo?
//           </p>

//           <p className="text-2xl leading-relaxed mb-12">
//             Aceita ser minha namorada do jeito que eu deveria ter perguntado desde o começo?
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg transition">
//               💖 Sim
//             </button>

//             <button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-4 rounded-full text-lg transition">
//               💖 Com toda certeza
//             </button>
//           </div>
//         </section>

//       </div>
//     </main>
//   );
// }



