import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

const TeacherForm = () => {

    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        const schedule = [...scheduleItems];
        schedule.push({
            week_day: 0,
            from: '8:00',
            to: '4:00'
        })

        setScheduleItems(schedule);
    }

    async function handleCreateClasses(e: FormEvent) {
        e.preventDefault();

        try {
            const response = await api.post('/classes',{
                name,
                avatar,
                whatsapp,
                bio,
                subject,
                cost: Number(cost),
                schedule: scheduleItems,
            });
            
            console.log(response.data);
            
            alert('Salvo com sucesso');
            history.push('/');
        } catch (error) {
            alert('Error ao cadastrar');
        }
    }

    function setScheduleItemValue(position:number, field:string, value:string){
        const newScheduleItems = scheduleItems.map((item,index) => {
            if(index === position){
                return {...item, [field]: value};
            }
            return item;
        });
        setScheduleItems(newScheduleItems);
    }

    return (
        <div id="page-teacher-form">
            <PageHeader title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição."
            />

            <main>
                <form onSubmit={handleCreateClasses}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input name="name" label="Nome completo" value={name}
                            onChange={(event) => setName(event.target.value)} />

                        <Input name="avatar" label="Avatar" value={avatar}
                            onChange={(event) => setAvatar(event.target.value)} />

                        <Input name="whatsapp" label="Whatsapp" value={whatsapp}
                            onChange={(event) => setWhatsapp(event.target.value)} />

                        <Textarea name="bio" label="Biografia" value={bio}
                            onChange={(event) => setBio(event.target.value)} />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
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

                        <Input name="cost" label="Custo por hora" value={cost}
                            onChange={(event) => setCost(event.target.value)} />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
                        </legend>

                        {
                            scheduleItems.map((item, index) => {
                                return (
                                    <div key={index} className="schedule-item">
                                        <Select
                                            name="week_day"
                                            label="Dia da semana"
                                            value={item.week_day}
                                            onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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

                                        <Input name="from" label="Das" type="time" 
                                        value={item.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}/>

                                        <Input name="to" label="Até" type="time" 
                                        value={item.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}/>
                                    </div>
                                )
                            })
                        }
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso" />
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;