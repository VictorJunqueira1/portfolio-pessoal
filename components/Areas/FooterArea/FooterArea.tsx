import React from 'react';

const FooterArea = () => {
  return (
    <footer className="bg-neutral-950 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-lg text-center sm:text-left">
            <p>© 2024 Victor Junqueira. Todos os direitos reservados.</p>
          </div>
          <div className="text-lg">
            <p>Contato: <a href="mailto:victorjunqueira.prog@gmail.com" className="text-white transition duration-500 hover:text-green-500">victorjunqueira.prog@gmail.com</a></p>
          </div>
          <div className="flex justify-center">
            <a href="#" className="text-white transition duration-500 mx-2 hover:text-green-500">Página Inicial</a>
            <a href="https://www.linkedin.com/in/victor-junqueira-789004281/" className="text-white transition duration-500 mx-2 hover:text-green-500">LinkedIn</a>
            <a href="https://github.com/VictorJunqueira1" className="text-white transition duration-500 mx-2 hover:text-green-500">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterArea;
