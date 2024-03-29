"use client"
import Image from "next/image";
import { useEffect, useState } from 'react';
import { DrawerComponent } from "@/components/ShadCN/DrawerComponent";
import { projects } from "@/app/utils/projects";
import AreaAutor from "@/components/Areas/AutorArea/AreaAutor";
import Services from "@/components/Areas/ServicesArea/Services";
import TechnologiesArea from "@/components/Areas/TechnologiesArea/TecnhologiesArea";
import HeaderArea from "@/components/Areas/HeaderArea/HeaderArea";
import FooterArea from "@/components/Areas/FooterArea/FooterArea";

// VALIDAÇÃO DO FORMULÁRIO //
export function Home() {
  useEffect(() => {
    const removeHashFromUrl = () => {
      const urlWithoutHash = window.location.href.split('#')[0];
      window.history.replaceState({}, document.title, urlWithoutHash);
    };
    if (window.location.hash) {
      removeHashFromUrl();
    }
  }, []);
}

export default function Index() {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!name || !lastname || !email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor, insira um email válido.');
      return;
    }

    setError('');
    alert('Formulário enviado com sucesso!');
    setName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  // CÓDIGO DO PORTFÓLIO //
  return (
    <div className="flex-wrap">
      <div className="bg-gradient-to-r from-neutral-950 to-neutral-900 w-screen">
        <HeaderArea />
        <AreaAutor />
        <Services />
        <TechnologiesArea />
        
        {/* ÁREA DE PROJETOS */}
        <section className="w-full bg-neutral-950 h-max">
          <div className="mx-auto max-w-7xl flex flex-row py-12 text-white">
            <div className="w-full h-full">
              <h1 className="text-3xl font-semibold mb-12 text-center">Projetos</h1>
              <div className="w-full h-1/2 light:bg-black light:text-white">
                <div className="grid grid-cols-1 gap-24 pb-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                  {
                    projects.map((project, index) => {
                      return (
                        <div
                          className="text-center flex items-center flex-col w-full h-full relative ">
                          <Image src={project.imageFront} alt={"Teste"} width={400} height={400} className="rounded-md object-contain h-48">
                          </Image>
                          <div className="flex items-center flex-col">
                            <h4 className="text-2xl font-semibold mb-4 mt-4">{project.name}</h4>
                            <p className="mb-4">
                              {project.description}
                            </p>
                          </div>
                          <DrawerComponent image={project.imageDrawer} link={project.link} name={project.name} technologies={project.technologies} techIndex={index} />
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ÁREA DE FORMULÁRIO E CONTATO */}
        <section id="contato" className="w-full bg-neutral-900 h-max">
          <div className="mx-auto max-w-7xl flex flex-row py-12 text-white">
            <div className="w-full h-full">
              <h1 className="text-5xl">Contato</h1>
              <p className="mt-6 text-xl flex-col flex">Bem-vindo à seção de contato! <span className="mt-1">Se gostou do meu trabalho, é só me chamar!</span></p>
              <div className="mt-10">
                {error && <p className="text-red-500">{error}</p>}
                <form action="#" onSubmit={handleSubmit} className="">
                  <div>
                    Nome:
                    <input type="text" placeholder="Insira seu nome" value={name} onChange={e => setName(e.target.value)} className="p-2 mt-2 flex flex-col bg-transparent border-b hover:border-green-500 text-white focus:border-green-500 focus:outline-none mb-10" />
                  </div>
                  <div>
                    Sobrenome:
                    <input type="text" placeholder="Insira seu sobrenome" value={lastname} onChange={e => setLastName(e.target.value)} className="p-2 mt-2 flex flex-col bg-transparent border-b hover:border-green-500 text-white focus:border-green-500 focus:outline-none mb-10" />
                  </div>
                  <div>
                    Email:
                    <input type="email" placeholder="Insira seu email" value={email} onChange={e => setEmail(e.target.value)} className="p-2 mt-2 flex flex-col bg-transparent border-b hover:border-green-500 text-white focus:border-green-500 focus:outline-none mb-10" />
                  </div>
                  <div>
                    Senha:
                    <input type="password" placeholder="Insira sua senha" value={password} onChange={e => setPassword(e.target.value)} className="p-2 mt-2 flex flex-col bg-transparent border-b hover:border-green-500 text-white focus:border-green-500 focus:outline-none mb-10" />
                  </div>
                  <button type="submit" className="w-36 border-gray-400 hover:border-green-700 hover:bg-neutral-950 shadow-md hover:shadow-stone-700 border-2 transition-all ease-in-out duration-500 hover:text-white h-12 flex justify-center items-center color-white rounded-sm bg-transparent text-white text-lg gap-4">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <FooterArea />
      </div>
    </div>
  );
}