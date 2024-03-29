import React from 'react';
import Image from 'next/image';

const TechnologiesArea = () => {
    return (
        <section id="habilidades" className="w-full bg-neutral-950 h-max">
            <div className="mx-auto max-w-7xl flex flex-row py-12 text-white">
                <div className="w-full h-full ">
                    <h1 className="text-3xl font-semibold">Tecnologias</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 my-4">
                        <div className="h-full w-full bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                            <Image width={90} height={90} src={"/img/html-logo.png"} alt="HTML5" />
                            <p className="text-xl">HTML5</p>
                        </div>
                        <div className="h-full w-full bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                            <Image width={90} height={90} src={"/img/css-logo.png"} alt="CSS3" />
                            <p className="text-xl">CSS3</p>
                        </div>
                        <div className="h-full w-full bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                            <Image width={90} height={90} src={"/img/javascript.png"} alt="Javascript" />
                            <p className="text-xl">Javascript</p>
                        </div>
                        <div className="h-full w-full bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                            <Image width={90} height={90} src={"/img/typescript.png"} alt="Typescript" />
                            <p className="text-xl">Typescript</p>
                        </div>
                        <div className="sm:pt-6 sm:pb-6 md:pt-6 md:pb-6 h-full w-full bg-neutral-900 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
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
                        <div className="sm:pt-6 sm:pb-6 md:pt-6 md:pb-6 h-full w-full bg-neutral-900 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                            <Image width={70} height={70} src={"/img/mysql.png"} alt="SQL" />
                            <p className="mt-4 text-xl">MySQL</p>
                        </div>
                        <div className="sm:pt-6 sm:pb-6 md:pt-6 md:pb-6 h-full w-full bg-neutral-900  rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                            <Image width={100} height={100} src={"/img/postgresql.png"} alt="SQL" />
                            <p className="mt-2 text-xl">PostgreSQL</p>
                        </div>
                        <div className="h-full w-full bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                            <Image width={90} height={70} src={"/img/git-logo.png"} alt="SQL" />
                            <p className="mt-2 text-xl">Git</p>
                        </div>
                        <div className="h-full w-full bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                            <Image width={90} height={90} src={"/img/github-logo.png"} alt="SQL" />
                            <p className="mt-2 text-xl">Github</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologiesArea;
