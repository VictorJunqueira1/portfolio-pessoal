import React from 'react';
import { Globe, Smartphone, Database, Headphones, File, Coins } from 'lucide-react';

const Services: React.FC = () => {
    return (
        <section className="w-full bg-neutral-950 h-auto py-8 sm:py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">Meus Serviços</h1>
                <div className="grid grid-cols-1 gap-6 my-4 sm:grid-cols-2 lg:grid-cols-3">
                    <ServiceCard icon={<Globe className="text-green-500 w-12 h-12" />} title="Desenvolvimento Web" description="Plataformas on-line, lojas virtuais e blogs." />
                    <ServiceCard icon={<Smartphone className="text-green-500 w-12 h-12" />} title="Desenvolvimento Mobile" description="Aplicativos educacionais, plataformas de gerenciamento de conteúdo e entretenimento." />
                    <ServiceCard icon={<Database className="text-green-500 w-12 h-12" />} title="Banco de Dados" description="Gerenciar e construir esquemas de bancos de dados relacionais e não relacionais." />
                    <ServiceCard icon={<Headphones className="text-green-500 w-12 h-12" />} title="Suporte" description="Atendimento ao cliente dedicado e especializado." />
                    <ServiceCard icon={<File className="text-green-500 w-12 h-12" />} title="Documentação e Artigos" description="Desenvolvimento de artigos de pesquisas e editais." />
                    <ServiceCard icon={<Coins className="text-green-500 w-12 h-12" />} title="Vendas" description="Alavanque sua unidade de negócio com técnicas de vendas." />
                </div>
            </div>
        </section>
    );
};

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-neutral-900 p-6 sm:p-8 rounded-md shadow-sm shadow-neutral-700">
        <div className="flex mb-4">{icon}</div>
        <h1 className="text-xl sm:text-2xl font-semibold my-2">{title}</h1>
        <p>{description}</p>
    </div>
);

export default Services;
