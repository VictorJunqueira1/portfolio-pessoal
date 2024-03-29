import React from 'react';

const FooterArea = () => {
  return (
    <nav>
      <footer className="bg-neutral-950 text-white py-6 flex-wrap">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="text-lg">
              <p>© 2024 Victor Junqueira. Todos os direitos reservados.</p>
            </div>
            <div className="text-lg">
              <p>Contato: <a href="mailto:victorjunqueira.prog@gmail.com" className="text-white transition duration-500 hover:text-green-500">victorjunqueira.prog@gmail.com</a></p>
            </div>
            <div>
              <a href="#" className="text-white transition duration-500 mx-2 hover:text-green-500">Página Inicial</a>
              <a href="https://www.linkedin.com/in/victor-junqueira-789004281/" className="text-white transition duration-500 mx-2 hover:text-green-500">LinkedIn</a>
              <a href="https://github.com/VictorJunqueira1" className="text-white transition duration-500 mx-2 hover:text-green-500">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </nav>
  );
};

export default FooterArea;
