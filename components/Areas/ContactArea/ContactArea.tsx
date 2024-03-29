import React, { useState } from 'react';

const ContactArea: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [lastname, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [messageType, setMessageType] = useState<'error' | 'success'>('success');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !lastname || !email || !password) {
            setMessage('Por favor, preencha todos os campos.');
            setMessageType('error');
            return;
        }

        // Aqui você adicionaria a lógica de envio do formulário (e.g., requisição HTTP)

        setMessage('Formulário enviado com sucesso!');
        setMessageType('success');
        setName('');
        setLastName('');
        setEmail('');
        setPassword('');
    };

    return (
        <section id="contato" className="w-full bg-neutral-900 py-8 sm:py-12">
            <div className="mx-auto max-w-4xl px-4 text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold mb-8">Contato</h1>
                <p className="mt-6 text-lg sm:text-xl text-center">Bem-vindo à seção de contato! <span className="block sm:inline mt-2 sm:mt-0">Se gostou do meu trabalho, é só me chamar!</span></p>
                <div className="mt-10">
                    {message && <p className={`text-center ${messageType === 'error' ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
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
                            Senha:
                            <input type="password" placeholder="Insira sua senha" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 mt-2 bg-transparent border-b border-gray-400 hover:border-green-500 text-white focus:border-green-500 focus:outline-none transition-colors" />
                        </label>
                        <button type="submit" className="mt-6 w-36 h-12 bg-green-500 hover:bg-green-600 transition-colors text-lg font-semibold rounded-md shadow-md">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactArea;