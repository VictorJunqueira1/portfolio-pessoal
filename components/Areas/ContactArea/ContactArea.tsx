import React from 'react';

interface ContactAreaProps {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    lastname: string;
    setLastName: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    message: string; 
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    error: string;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ContactArea: React.FC<ContactAreaProps> = ({
    name,
    setName,
    lastname,
    setLastName,
    email,
    setEmail,
    message, 
    setMessage, 
    error,
    handleSubmit
}) => {
    return (
        <section id="contato" className="w-full bg-neutral-900 py-8 sm:py-12">
            <div className="mx-auto max-w-4xl px-4 text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold mb-8">Contato</h1>
                <p className="mt-6 text-lg sm:text-xl text-center">Bem-vindo à seção de contato! <span className="block sm:inline mt-2 sm:mt-0">Se gostou do meu trabalho, é só me chamar!</span></p>
                <div className="mt-10">
                    {error && <p className="text-center text-red-500">{error}</p>}
                    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
                        <label className="w-full mb-6">
                            Nome:
                            <input type="text" placeholder="Insira seu nome" value={name} onChange={e => setName(e.target.value)} className="w-full p-2 mt-2 bg-transparent border-b border-gray-400 hover:border-green-500 text-white focus:border-green-500 focus:outline-none transition-colors" />
                        </label>
                        <label className="w-full mb-6">
                            Sobrenome:
                            <input type="text" placeholder="Insira seu sobrenome" value={lastname} onChange={e => setLastName(e.target.value)} className="w-full p-2 mt-2 bg-transparent border-b border-gray-400 hover:border-green-500 text-white focus:border-green-500 focus:outline-none transition-colors" />
                        </label>
                        <label className="w-full mb-6">
                            Email:
                            <input type="email" placeholder="Insira seu email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 mt-2 bg-transparent border-b border-gray-400 hover:border-green-500 text-white focus:border-green-500 focus:outline-none transition-colors" />
                        </label>
                        <label className="w-full mb-6">
                            Mensagem:
                            <textarea
                                placeholder="Deixe sua mensagem"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                className="w-full p-2 mt-2 bg-transparent border-2 border-gray-500 hover:border-green-500 text-white focus:border-green-500 focus:outline-none transition-colors"
                                rows={7}
                            ></textarea>
                        </label>
                        <button type="submit" className="mt-6 w-36 h-12 bg-green-500 hover:bg-green-600 transition-colors text-lg font-semibold rounded-md shadow-md">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactArea;
