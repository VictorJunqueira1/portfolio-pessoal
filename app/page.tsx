import { Coins, Database, File, Globe, Headphones, LineChart, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="">
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
              <a href="#" className="px-4 py-2 color-white rounded-sm bg-green-500 text-black w-max text-lg">Fale comigo</a>
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
        </div>

        <section className="w-full bg-neutral-950 h-max">
          <div className="mx-auto max-w-7xl flex flex-row py-12">
            <div className="text-white w-1/3 ">
              <img src="/img/Profile.jpeg" alt="Perfil do Autor" className="w-full h-96 object-cover" />
            </div>

            <div className="text-white w-2/3 ml-12">
              <h2 className="text-green-500 text-xl mb-2">Sobre mim</h2>
              <h1 className="font-semibold text-2xl mb-2">Eu sou Victor Junqueira, sou desenvolvedor front-end...</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, eos accusamus dicta magnam cum a voluptas cumque, incidunt, at non perferendis iusto distinctio! Non sit amet vitae magnam quibusdam commodi?</p>
              <div className="h-0.5 w-full bg-green-500 my-6"></div>

              <div className="grid grid-cols-2 mb-6 gap-3">
                <h3 className="text-white"><strong>Nome: </strong>Victor Junqueira</h3>
                <h3 className="text-white"><strong>Idade: </strong>17 anos</h3>
                <h3 className="text-white"><strong>Email: </strong>victorjunqueira.prog@gmail.com</h3>
                <h3 className="text-white"><strong>Telefone: </strong>+55 (19) 99716-8299</h3>
              </div>

              <a href="#" className="px-4 py-2 color-white rounded-sm bg-green-500 text-black w-max text-lg">Download CV</a>

            </div>
          </div>
        </section>
        <section className="w-full bg-neutral-950 h-max">
          <div className="mx-auto max-w-7xl flex flex-row py-12 text-white">
            <div className="w-full h-full">
              <h1 className="text-3xl font-semibold">Meus Serviços</h1>
              <div className="grid grid-cols-3 gap-4 my-4">
                <div className="bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700">
                  <Globe className="text-green-500 w-12 h-12" />
                  <h1 className="text-2xl font-semibold my-2">Desenvolvimento Web</h1>
                  <p>Plataformas on-line, lojas virtuais e blogs.</p>
                </div>
                <div className="bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700">
                  <Smartphone className="text-green-500 w-12 h-12" />
                  <h1 className="text-2xl font-semibold my-2">Desenvolvimento Mobile</h1>
                  <p>Aplicativos educacionais, plataformas de gerenciamento de conteúdo e entretenimento.</p>
                </div>
                <div className="bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700">
                  <Database className="text-green-500 w-12 h-12" />
                  <h1 className="text-2xl font-semibold my-2">Banco de Dados</h1>
                  <p>Gerenciar e construir esquemas de bancos de dados relacionais e não relacionais.</p>
                </div>
                <div className="bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700">
                  <Headphones className="text-green-500 w-12 h-12" />
                  <h1 className="text-2xl font-semibold my-2">Suporte</h1>
                  <p>Atendimento ao cliente dedicado e especializado.</p>
                </div>
                <div className="bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700">
                  <File className="text-green-500 w-12 h-12" />
                  <h1 className="text-2xl font-semibold my-2">Documentação e Artigos</h1>
                  <p>Desenvolvimento de artigos de pesquisas e editais.</p>
                </div>
                <div className="bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700">
                  <Coins className="text-green-500 w-12 h-12" />
                  <h1 className="text-2xl font-semibold my-2">Vendas</h1>
                  <p>Alavanque sua unidade de negócio com técnicas de vendas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
