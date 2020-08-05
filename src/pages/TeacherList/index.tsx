import React, { useState, FormEvent } from 'react';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

interface TeachersData {
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    subject: string;
    name: string;
    whatsapp: string;    
}

const TeacherList = () => {

    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');
    const [teachers, setTeachers] = useState<TeachersData[]>();

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        try {
            const response = await api.get('/classes', {
                params: {
                    subject,
                    week_day,
                    time,
                }
            });
            console.log(response.data);
            setTeachers(response.data);
        } catch (error) {
            alert('Erro ao fazer a busca');
        }
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        options={[
                            { value: 'Banco de dados I', label: 'Banco de dados I' },
                            { value: 'Banco de dados II', label: 'Banco de dados II' },
                            { value: 'Desenvolvimento Desktop', label: 'Desenvolvimento Desktop' },
                            { value: 'Desenvolvimento Mobile', label: 'Desenvolvimento Mobile' },
                            { value: 'Desenvolvimento Web', label: 'Desenvolvimento Web' },
                            { value: '', label: '' },
                        ]}
                    />

                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => setWeek_day(e.target.value)}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />

                    <Input type="time" name="time" label="Hora"
                        value={time}
                        onChange={(e) => { setTime(e.target.value); }}
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {
                    teachers ?
                        teachers.map(item => {
                            return(
                                <TeacherItem key={item.id} teacher={item}/>
                            )
                        })
                    : 
                        <h3>Vazio</h3>
                }
            </main>
        </div>
    );
}

export default TeacherList;