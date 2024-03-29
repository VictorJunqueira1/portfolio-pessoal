import React from 'react';
import Image from 'next/image';

const AreaAutor: React.FC = () => {
    return (
        <section id="sobre" className="w-full bg-neutral-950 h-max">
            <div className="mx-auto max-w-7xl flex flex-row py-12">
                <div className="text-white w-1/3 ">
                    {/* <img src="/img/Profile.jpeg" alt="Perfil do Autor" className="w-full h-96 object-cover" /> */}
                    <Image src="/img/Profile.jpeg" alt="Foto do Autor" className="w-full object-contain" width={999} height={1} />
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
    );
};

export default AreaAutor;
