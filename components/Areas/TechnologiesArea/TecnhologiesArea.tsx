import React from 'react';
import Image from 'next/image';

const TechnologiesArea = () => {
    return (
        <section id="habilidades" className="w-full bg-neutral-950 h-auto py-8 sm:py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center sm:text-left">Tecnologias</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 my-6">
                    {[
                        { src: "/img/html-logo.png", alt: "HTML5", label: "HTML5" },
                        { src: "/img/css-logo.png", alt: "CSS3", label: "CSS3" },
                        { src: "/img/javascript.png", alt: "Javascript", label: "Javascript" },
                        { src: "/img/typescript.png", alt: "Typescript", label: "Typescript" },
                        { src: "/img/react.png", alt: "ReactJS", label: "ReactJS", extraPadding: true },
                        { src: "/img/next.png", alt: "NextJS", label: "NextJS" },
                        { src: "/img/tailwind.png", alt: "TailwindCSS", label: "TailwindCSS" },
                        { src: "/img/git-logo.png", alt: "Git", label: "Git", extraPadding: true },
                        { src: "/img/mysql.png", alt: "SQL", label: "MySQL", extraPadding: true },
                        { src: "/img/postgresql.png", alt: "PostgreSQL", label: "PostgreSQL", extraPadding: true },
                        // { src: "/img/github-logo.png", alt: "Github", label: "Github" }
                    ].map(({ src, alt, label, extraPadding }, index) => (
                        <div key={index} className={`h-full w-full bg-neutral-900 ${extraPadding ? 'pt-6 pb-6' : 'p-8'} rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center`}>
                            <Image width={90} height={90} src={src} alt={alt} />
                            <p className="text-xl">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologiesArea;
