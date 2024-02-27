export default function Home() {
  return (
    <div>
      <div className="bg-stone-800 w-screen">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center justify-between text-white h-24">
            <h1 className="hover:text-green-500 hover:shadow-sm text-lg transition duration-300 ease-in">Portfólio</h1>
            <ul className="flex flex-row gap-12 text-lg">
              <li>
                <a href="#" className="hover:text-green-500 hover:shadow-sm transition duration-300 ease-in">Início</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 hover:shadow-sm transition duration-300 ease-in">Sobre</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 hover:shadow-sm transition duration-300 ease-in">Habilidades</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 hover:shadow-sm transition duration-300 ease-in">Contato</a>
              </li>
            </ul>
          </nav>

          <section className="w-full h-dynamic flex justify-center items-start flex-col relative">
            <div className="flex flex-col gap-2 -mt-24">
              <h4 className="font-light text-white text-2xl">Olá!</h4>
              <h1 className="text-white font-semibold text-5xl">Eu sou desenvolvedor...</h1>
              <p className="font-light text-white text-2xl">Especializado em Sites Responsivos</p>
              <a href="#" className="px-4 py-2 color-white bg-emerald-700 text-white w-max text-lg">Fale comigo</a>
            </div>

            <div className="absolute bottom-10 left-0 text-white flex gap-6">
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-md font-light">victorjunqueira.prog@gmail.com</p>
              </div>
              <div className="h-18 w-0.5 bg-white"></div>
              <div>
                <h3 className="text-lg font-semibold">Telefone</h3>
                <p className="text-md font-light">+55 (19) 99716-8299</p>
              </div>
              <div className="h-18 w-0.5 bg-white"></div>
              <div>
                <h3 className="text-lg font-semibold">Localização</h3>
                <p className="text-md font-light">Mogi-Guaçu, SP</p>
              </div>
            </div>
          </section>

          <section className="flex flex-row bg-black w-full">
            <div className="text-white 1/3">
              ...
            </div>
            
            <div className="text-white 2/3 bg-red-500">
              ...
            </div>

          </section>
        </div>
      </div>
    </div>
  );
}
