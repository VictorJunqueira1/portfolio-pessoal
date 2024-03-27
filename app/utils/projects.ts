export const projects: Project[] = [
    {
        name: "Conversor de Unidades", 
        image: "/img/conversor-pic.png",
        technologies: ['HTML', 'CSS', 'Javascript,'],
        description: "Testando..."
    },
    {
        name: "Gerador de Senhas", 
        image: "/img/password-generator-pic.png",
        technologies: ['HTML', 'CSS', 'Javascript,'],
        description: "Testando..."
    },
    {
        name: "Calculadora com Flask", 
        image: "/img/calculator-py-pic.png",
        technologies: ['HTML', 'CSS', 'Python', 'Flask'],
        description: "Testando..."
    },
]

export type Project = {
    name: string;
    image?: string;
    technologies?: string[];
    description?: string
}