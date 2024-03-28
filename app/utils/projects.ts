
export const projects: Project[] = [
    {
        name: "Conversor de Unidades", 
        image: "/img/conversor-pic.png",
        technologies: ['HTML', 'CSS', 'Javascript,'],
        description: "Testando...",
        link: "https://measurement-converter.vercel.app/"
    },
    {
        name: "Gerador de Senhas", 
        image: "/img/password-generator-pic.png",
        technologies: ['HTML', 'CSS', 'Javascript,'],
        description: "Testando...",
        link: "https://password-generator-delta-blush.vercel.app/"
    },
    {
        name: "Calculadora com Flask", 
        image: "/img/calculator-py-pic.png",
        technologies: ['HTML', 'CSS', 'Python', 'Flask'],
        description: "Testando...",
        link: ""
    },
]

export type Project = {
    name: string;
    image: string;
    technologies?: string[];
    description: string;
    link: string
}