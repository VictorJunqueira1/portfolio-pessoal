"use client"
import Image from "next/image";
import { useEffect, useState } from 'react';
import { DrawerComponent } from "@/components/ShadCN/DrawerComponent";
import { projects } from "@/app/utils/projects";
import AreaAutor from "@/components/Areas/AutorArea/AreaAutor";
import Services from "@/components/Areas/ServicesArea/Services";
import { Github, Linkedin } from "lucide-react";
import TechnologiesArea from "@/components/Areas/TechnologiesArea/TecnhologiesArea";

// EFEITO ESCRITA //

type props = {
  phrases: string[];
  loop: boolean;
}

const TypewriterEffect = ({ phrases, loop = true }: props) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (index >= phrases.length && !loop) return;

    if (subIndex === phrases[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex(prevIndex => (prevIndex + 1) % phrases.length);
      return;
    }

    const calculateDelay = () => {
      if (reverse) return 75;
      if (subIndex === phrases[index].length) return 1000;
      return Math.random() * 350 + 150;
    };

    const timeout = setTimeout(() => {
      setSubIndex(prevSubIndex => prevSubIndex + (reverse ? -1 : 1));
    }, calculateDelay());

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, phrases, loop]);

  return (
    <h1 className="text-white font-semibold text-3xl md:text-4xl xl:text-5xl">
      Eu sou <span>{`${phrases[index].substring(0, subIndex)}${blink ? "|" : " "}`}</span>
    </h1>
  );
};

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
        <div className="mx-auto max-w-7xl">
          {/* // CABEÇALHO // */}
          <header>
            <nav className="flex items-center justify-between text-white h-24">
              <h1 className="hover:text-green-500 hover:shadow-sm text-lg transition duration-300 ease-in">Portfólio</h1>
              <ul className="flex flex-row gap-12 text-lg">
                <li>
                  <a href="#inicio" className="hover:text-green-500 transition duration-300 ease-in">Início</a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-green-500 transition duration-300 ease-in">Sobre</a>
                </li>
                <li>
                  <a href="#habilidades" className="hover:text-green-500 transition duration-300 ease-in">Habilidades</a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-green-500 transition duration-300 ease-in">Contato</a>
                </li>
              </ul>
            </nav>
          </header>
          {/* // CORPO DO CABEÇALHO // */}
          <section style={{ height: "calc(100vh - 96px)" }} className="w-full flex justify-center items-start flex-col relative sm:flex-wrap md:flex-wrap">
            <div className="flex flex-col gap-2 -mt-24">
              <h4 className="font-light text-white text-2xl">Olá!</h4>
              <TypewriterEffect phrases={['desenvolvedor web', 'desenvolvedor mobile', 'desenvolvedor Front-End']} loop={false} />
              <p className="font-light text-white text-2xl">Especializado em Sites Responsivos</p>
              <div className="gap-6 flex">
                <a href="https://www.linkedin.com/in/victor-junqueira-789004281/" className=" hover:border-green-500 w-36 shadow-md hover:shadow-stone-700 border-gray-400 hover:bg-black border-2 transition-all ease-in-out duration-500 hover:text-white h-12 flex justify-center items-center color-white rounded-sm bg-transparent text-white text-lg gap-4"> <div className=""> <Linkedin> </Linkedin></div>  LinkedIn</a>
                <a href="https://github.com/VictorJunqueira1" className=" hover:border-green-500 w-36 shadow-md hover:shadow-stone-700 border-gray-400 border-2 hover:bg-black transition-all ease-in-out duration-500 hover:text-white h-12 flex justify-center items-center color-white rounded-sm bg-transparent text-white text-lg gap-4"> <div> <Github></Github> </div>Github</a>
              </div>
            </div>
            {/* // RODAPÉ DO CABEÇALHO // */}
            <div className="absolute bottom-10 left-0 text-white flex gap-6 flex-col md:flex-row">
              <div className="">
                <h3 className="text-lg font-semibold">Email</h3>
                <a href="mailto:victorjunqueira.prog@gmail.com" className="text-md font-light">victorjunqueira.prog@gmail.com</a>
              </div>
              <div className="h-18 w-0.5 bg-white"></div>
              <div>
                <h3 className="text-lg font-semibold">Telefone</h3>
                <a href="tel:+55 (19) 997116-8299" className="text-md font-light">+55 (19) 99716-8299</a>
              </div>
              <div className="h-18 w-0.5 bg-white"></div>
              <div>
                <h3 className="text-lg font-semibold">Localização</h3>
                <p className="text-md font-light">Mogi-Guaçu, SP</p>
              </div>
            </div>
          </section>
        </div>
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
        {/* RODAPÉ */}
        <nav>
          <footer className="bg-neutral-950 text-white py-6 flex-wrap">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-between items-center">
                <div className="text-lg">
                  <p>© 2024 Victor Junqueira. Todos os direitos reservados.</p>
                </div>
                <div className="text-lg">
                  <p>Contato: <a href="mailto:victorjunqueira.prog@gmail.com" className="text-white transition duration-500 hover:text-green-500">victorjunqueira.prog@gmail.com</a></p>
                </div>
                <div>
                  <a href="#" className="text-white transition duration-500 mx-2 hover:text-green-500">Página Inicial</a>
                  <a href="https://www.linkedin.com/in/victor-junqueira-789004281/" className="text-white transition duration-500 mx-2 hover:text-green-500">LinkedIn</a>
                  <a href="https://github.com/VictorJunqueira1" className="text-white transition duration-500 mx-2 hover:text-green-500">GitHub</a>
                </div>
              </div>
            </div>
          </footer>
        </nav>
      </div>
    </div>
  );
}

// Linha na área de tecnologias
// Projetos, Carousel

// Rever textos escritos
// Responsividade