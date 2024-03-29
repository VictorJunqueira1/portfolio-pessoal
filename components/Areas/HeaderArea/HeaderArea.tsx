import { Github, Linkedin } from 'lucide-react';
import React, { useEffect, useState } from 'react';

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

const HeaderArea = () => {
    return (
        <div className="mx-auto max-w-7xl">
            {/* CABEÇALHO */}
            <header>
                <nav className="flex items-center justify-between text-white h-24">
                    <h1 className="hover:text-green-500 hover:shadow-sm text-lg transition duration-300 ease-in">Portfólio</h1>
                    <ul className="flex flex-row gap-12 text-lg">
                        <li><a href="#inicio" className="hover:text-green-500 transition duration-300 ease-in">Início</a></li>
                        <li><a href="#sobre" className="hover:text-green-500 transition duration-300 ease-in">Sobre</a></li>
                        <li><a href="#habilidades" className="hover:text-green-500 transition duration-300 ease-in">Habilidades</a></li>
                        <li><a href="#contato" className="hover:text-green-500 transition duration-300 ease-in">Contato</a></li>
                    </ul>
                </nav>
            </header>
            {/* CORPO DO CABEÇALHO */}
            <section style={{ height: "calc(100vh - 96px)" }} className="w-full flex justify-center items-start flex-col relative sm:flex-wrap md:flex-wrap">
                <div className="flex flex-col gap-2 -mt-24">
                    <h4 className="font-light text-white text-2xl">Olá!</h4>
                    {/* Certifique-se de substituir 'TypewriterEffect' pelo componente correto que você está usando */}
                    <TypewriterEffect phrases={['desenvolvedor web', 'desenvolvedor mobile', 'desenvolvedor Front-End']} loop={false} />
                    <p className="font-light text-white text-2xl">Especializado em Sites Responsivos</p>
                    <div className="gap-6 flex">
                        <a href="https://www.linkedin.com/in/victor-junqueira-789004281/" className="hover:border-green-500 w-36 shadow-md hover:shadow-stone-700 border-gray-400 hover:bg-black border-2 transition-all ease-in-out duration-500 hover:text-white h-12 flex justify-center items-center rounded-sm bg-transparent text-white text-lg gap-4">
                            {/* Substitua '<Linkedin>' pelo componente de ícone apropriado */}
                            <div><Linkedin /></div>LinkedIn
                        </a>
                        <a href="https://github.com/VictorJunqueira1" className="hover:border-green-500 w-36 shadow-md hover:shadow-stone-700 border-gray-400 border-2 hover:bg-black transition-all ease-in-out duration-500 hover:text-white h-12 flex justify-center items-center rounded-sm bg-transparent text-white text-lg gap-4">
                            {/* Substitua '<Github>' pelo componente de ícone apropriado */}
                            <div><Github /></div>Github
                        </a>
                    </div>
                </div>
                {/* RODAPÉ DO CABEÇALHO */}
                <div className="absolute bottom-10 left-0 text-white flex gap-6 flex-col md:flex-row">
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
    );
};

export default HeaderArea;
