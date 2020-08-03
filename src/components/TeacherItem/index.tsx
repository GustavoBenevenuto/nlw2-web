import React from 'react';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/40447101?s=460&u=0e966219760b77dbb32e1f728c4f2e3dc1c41e99&v=4" alt="" />
                <div>
                    <strong>Gustavo Benevenuto</strong>
                    <span>Desenvolvimento Mobile</span>
                </div>

            </header>
            <p>
                Desenvolvedor há mais de 500 anos, tendo sido o pai da computação.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>150,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;