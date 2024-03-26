"use client"
import { CarouselPlugin } from "@/components/ShadCN/CarouselPlugin";
import { Coins, Database, File, Github, Globe, Headphones, Linkedin, Smartphone } from "lucide-react";
import Image from "next/image";
import { projects } from "./utils/projects";
import { useEffect, useState } from 'react';
import { CarouselSpacing } from "@/components/ShadCN/CarouselSpacing";

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
    <h1 className="text-white font-semibold text-5xl">
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


export default function ContactForm() {
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
          <section style={{ height: "calc(100vh - 96px)" }} className="w-full flex justify-center items-start flex-col relative">
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
            <div className="absolute bottom-10 left-0 text-white flex gap-6">
              <div>
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
        {/* // CUSTOMIZAÇÃO DA IMAGEM // */}
        <section id="sobre" className="w-full bg-neutral-950 h-max">
          <div className="mx-auto max-w-7xl flex flex-row py-12">
            <div className="text-white w-1/3 ">
              <img src="/img/Profile.jpeg" alt="Perfil do Autor" className="w-full h-96 object-cover" />
            </div>
            {/* ÁREA SOBRE O DESENVOLVEDOR  */}
            <div className="text-white w-2/3 ml-12">
              <h2 className="text-green-500 text-xl mb-2">Sobre mim</h2>
              <h1 className="font-semibold text-2xl mb-2">Eu sou Victor Junqueira, desenvolvedor front-end...</h1>
              <p>
                Sou um desenvolvedor front-end, cujo interesse pelo desenvolvimento web foi despertado em 2022, quando iniciei meu curso de Desenvolvimento de Sistemas na prestigiosa ETEC Pedro Ferreira Alves. Apesar de estar no início da minha jornada profissional, já demonstro uma compreensão aprofundada e habilidades avançadas em tecnologias fundamentais para o setor.
                <br />
                <br />
                Para enriquecer minha formação, dedico-me a cursos especializados na B7Web, uma instituição de renome por seu foco intensivo em desenvolvimento web e mobile. Essa busca constante por aprimoramento evidencia meu compromisso com a excelência e minha paixão por inovação.
                <br />
                <br />
                Aliando minha expertise técnica à determinação constante por evolução, preparado para contribuir de maneira significativa e trilhar um caminho distinto no mundo da tecnologia.
              </p>
              {/* ÁREA DE INFORMAÇÕES E CONTATO  */}
              <div className="h-0.5 w-full bg-green-500 my-6"></div>
              <div className="grid grid-cols-2 mb-6 gap-3">
                <h3 className="text-white"><strong>Nome: </strong>Victor Gustavo Junqueira</h3>
                <h3 className="text-white"><strong>Idade: </strong>17 anos</h3>
                <h3 className="text-white"><strong>Objetivo: </strong>Estágio</h3>
                <h3 className="text-white"><strong>Área: </strong>Front-End</h3>
              </div>
              {/* LINK PARA DOWNLOAD DO CURRÍCULO */}
              <a href="#" className="px-4 py-2 rounded-sm bg-green-500 text-black text-lg hover:text-neutral-00 transition-all duration-300">Download CV</a>
            </div>
          </div>
        </section>
        {/* SERVIÇOS OFERECIDOS  */}
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
        {/* TECNOLOGIAS EM CONHECIMENTO */}
        <section id="habilidades" className="w-full bg-neutral-950 h-max">
          <div className="mx-auto max-w-7xl flex flex-row py-12 text-white">
            <div className="w-full h-full">
              <h1 className="text-3xl font-semibold">Tecnologias</h1>
              <div className="grid grid-cols-6 gap-4 my-4">
                {/* <div className="h-full w-full bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                  <Image width={90} height={90} src={"/img/html-logo.png"} alt="HTML5" />
                  <p className="text-xl">HTML5</p>
                </div>
                <div className="h-full w-full bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                  <Image width={90} height={90} src={"/img/css-logo.png"} alt="CSS3" />
                  <p className="text-xl">CSS3</p>
                </div> */}
                <div className="h-full w-full bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                  <Image width={90} height={90} src={"/img/javascript.png"} alt="Javascript" />
                  <p className="text-xl">Javascript</p>
                </div>
                <div className="h-full w-full bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                  <Image width={90} height={90} src={"/img/typescript.png"} alt="Typescript" />
                  <p className="text-xl">Typescript</p>
                </div>
                <div className="h-full w-full bg-neutral-900 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                  <Image width={95} height={100} src={"/img/react.png"} alt="ReactJS" />
                  <p className="mt-2 text-xl">ReactJS</p>
                </div>
                <div className="h-full w-full bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                  <Image width={90} height={90} src={"/img/next.png"} alt="NextJS" />
                  <p className="text-xl">NextJS</p>
                </div>
                <div className="h-full w-full bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                  <Image width={90} height={90} src={"/img/tailwind.png"} alt="TailwindCSS" />
                  <p className="text-xl">TailwindCSS</p>
                </div>
                <div className="h-full w-full bg-neutral-900 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                  <Image width={70} height={70} src={"/img/mysql.png"} alt="SQL" />
                  <p className="mt-4 text-xl">MySQL</p>
                </div>
                {/* <div className="h-full w-full bg-neutral-900  rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                  <Image width={100} height={100} src={"/img/postgresql.png"} alt="SQL" />
                  <p className="mt-2 text-xl">PostgreSQL</p>
                </div> */}
                {/* <div className="h-full w-full bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                  <Image width={90} height={70} src={"/img/git-logo.png"} alt="SQL" />
                  <p className="mt-2 text-xl">Git</p>
                </div>
                <div className="h-full w-full bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                  <Image width={90} height={90} src={"/img/github-logo.png"} alt="SQL" />
                  <p className="mt-2 text-xl">Github</p>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        {/* ÁREA DE PROJETOS */}
        <section className="w-full bg-neutral-950 h-max">
          <div className="mx-auto max-w-7xl flex flex-row py-12 text-white">
            <div className="w-full h-full">
              <h1 className="text-3xl font-semibold">Projetos</h1>
              <div className="flex items-center justify-center flex-col my-4">
                <CarouselSpacing projects={projects} />
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