import React from 'react';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

interface TeacherItemProps {
    teacher: {
        avatar: string;
        bio: string;
        cost: number;
        id: number;
        name: string;
        subject: string;
        whatsapp: string;
    }
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ teacher }: TeacherItemProps) => {
    
    async function createNewConnection(){
        await api.post('/connections', {
            user_id: teacher.id
        })
    }
    
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt="" />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>

            </header>
            <p>
                {teacher.bio}
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>{teacher.cost.toFixed(2)}</strong>
                </p>
                <a 
                    onClick={createNewConnection}
                    target="blanck" 
                    href={`https://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsAppIcon} alt="" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem;