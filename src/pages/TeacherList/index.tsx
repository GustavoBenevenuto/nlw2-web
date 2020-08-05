import React from 'react';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';


const TeacherList = () => {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                <Select 
                        name="subject" 
                        label="Matéria"
                        options={[
                            {value: 'Banco de dados I', label: 'Banco de dados I'},
                            {value: 'Banco de dados II', label: 'Banco de dados II'},
                            {value: 'Desenvolvimento Desktop', label: 'Desenvolvimento Desktop'},
                            {value: 'Desenvolvimento Mobile', label: 'Desenvolvimento Mobile'},
                            {value: 'Desenvolvimento Web', label: 'Desenvolvimento Web'},
                            {value: '', label: ''},
                        ]}
                    />
                    
                    <Select 
                        name="week_day" 
                        label="Dia da semana"
                        options={[
                            {value: '0', label: 'Domingo'},
                            {value: '1', label: 'Segunda-feira'},
                            {value: '2', label: 'Terça-feira'},
                            {value: '3', label: 'Quarta-feira'},
                            {value: '4', label: 'Quinta-feira'},
                            {value: '5', label: 'Sexta-feira'},
                            {value: '6', label: 'Sábado'},
                        ]}
                    />
                    
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;