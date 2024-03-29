"use client"
import Image from "next/image";
import { useEffect, useState } from 'react';
import { DrawerComponent } from "@/components/ShadCN/DrawerComponent";
import { projects } from "@/app/utils/projects";
import AreaAutor from "@/components/Areas/AutorArea/AutorArea";
import Services from "@/components/Areas/ServicesArea/Services";
import TechnologiesArea from "@/components/Areas/TechnologiesArea/TecnhologiesArea";
import HeaderArea from "@/components/Areas/HeaderArea/HeaderArea";
import FooterArea from "@/components/Areas/FooterArea/FooterArea";
import ContactArea from "@/components/Areas/ContactArea/ContactArea";

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

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

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

    console.log('Formulário enviado:', { name, lastname, email, password });
    setError('');
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
        <section className="w-full bg-neutral-950 h-auto py-12">
          <div className="mx-auto max-w-7xl px-4 text-white">
            <h1 className="text-3xl font-semibold mb-12 text-center">Projetos</h1>
            <div className="w-full">
              <div className="grid grid-cols-1 gap-12 pb-10 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="text-center flex items-center flex-col w-full relative ">
                    <div className="w-full h-48 rounded-md overflow-hidden relative">
                      <Image
                        src={project.imageFront}
                        alt={project.name}
                        layout="fill"
                        objectFit="contain"
                        className="transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="flex items-center flex-col">
                      <h4 className="text-2xl font-semibold my-4">{project.name}</h4>
                      <p>
                        {project.description}
                      </p>
                    </div>
                    <DrawerComponent image={project.imageDrawer} link={project.link} name={project.name} technologies={project.technologies} techIndex={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <ContactArea
          name={name} setName={setName}
          lastname={lastname} setLastName={setLastName}
          email={email} setEmail={setEmail}
          password={password} setPassword={setPassword}
          error={error}
          handleSubmit={handleSubmit}
        />
        <FooterArea />
      </div>
    </div>
  );
}