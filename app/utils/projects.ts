
export const projects: Project[] = [
    {
        name: "Conversor de Unidades", 
        imageFront: "/img/conversor-front.png",
        imageDrawer: "/img/conversor-pic.png",
        technologies: ['HTML', 'CSS', 'Javascript'],
        description: "Um conversor de unidades é uma ferramenta que permite a conversão entre diferentes unidades de medida dentro de uma mesma categoria.",
        link: "https://measurement-converter.vercel.app/",
        id: 0
    },
    {
        name: "Gerador de Senhas", 
        imageFront: "/img/password-front.png",
        imageDrawer: "/img/password-generator-pic.png",
        technologies: ['HTML', 'CSS', 'Javascript'],
        description: "Um gerador de senhas forte e automático é uma ferramenta digital projetada para criar senhas complexas e seguras que são difíceis de adivinhar ou quebrar por atacantes.",
        link: "https://password-generator-delta-blush.vercel.app/",
        id: 1
    },
    {
        name: "Calculadora Simples", 
        imageFront: "/img/calculator-front.png",
        imageDrawer: "/img/calculator-drawer.png",
        technologies: ['HTML', 'CSS', 'Python', 'Flask'],
        description: "Uma calculadora simples é um dispositivo eletrônico ou aplicativo de software projetado para realizar operações matemáticas básicas, como adição, subtração, multiplicação e divisão.",
        link: "",
        id: 2
    },
]

export type Project = {
    name: string;
    imageFront: string;
    imageDrawer: string;
    technologies: string[];
    description?: string;
    link: string;
    id: number
}