import React from 'react';
import ContactLinks from '../components/ContactLinks';

export default function About() {
  return (
    <div id="about" className="section">
      <div className="about-container">
        <h2 className="font-600">About me</h2>
        <article className="about-text">
          <p>
            Foi durante a minha graduação em Oceanologia que descobri minha paixão pela programação.
            Inicialmente, num contexto de ciência de dados, comecei a pegar gosto por programar.
            Coincidentemente, quando percebi que era com programação que queria trabalhar, acabei
            conhecendo a Trybe, escola que te ensina a estudar e trabalhar com desenvolvimento de
            software. Logo na primeira semana do curso, em maio de 2020, já tinha certeza que havia
            feito a escolha certa e desde então tenho estudado software, quase que diariamente, em
            busca de me desenvolver como um bom profissional que seja capaz de colaborar na
            resolução de problemas e participar de projetos que tenham impacto.
          </p>
          <p>
            Atualmente, estou desenvolvendo um sistema web para gerenciamento de dados ecológicos
            como TCC. Estou em busca de experiência profissional e espero poder colaborar com meu
            background e minha visão de mundo.
          </p>
        </article>
        <ContactLinks />
      </div>
    </div>
  );
}
