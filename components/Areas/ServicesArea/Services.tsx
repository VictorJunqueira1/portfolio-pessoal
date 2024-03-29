import React from 'react';
// Certifique-se de importar os ícones necessários da biblioteca de ícones que você está usando, por exemplo, react-icons
import { Globe, Smartphone, Database, Headphones, File, Coins } from 'lucide-react';

const Services: React.FC = () => {
    return (
        <section className="w-full bg-neutral-950 h-max">
            <div className="mx-auto max-w-7xl flex flex-row py-12 text-white">
                <div className="w-full h-full">
                    <h1 className="text-3xl font-semibold">Meus Serviços</h1>
                    <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
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
    );
}

export default Services;
