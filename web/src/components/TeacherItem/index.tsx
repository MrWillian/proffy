import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHUJ2j_8UAWiA/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=p1om66OZEpUvH1WknfA7qVuULEZRtrdr8BSrIiuvYZY"
          alt="Leonardo Carvalho"
        />

        <div>
          <strong>Leonardo Carvalho</strong>
          <span>História</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de história avançada.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A illum error
        ut non impedit officia odio placeat aperiam sunt, laboriosam quas! Magni
        ipsa voluptatem ad necessitatibus velit vitae corrupti beatae.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
