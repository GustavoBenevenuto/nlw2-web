import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

const TeacherForm = () => {
    return (
        <div id="page-teacher-form"> 
           <PageHeader title="Que incrível que você quer dar aulas."
            description="O primeiro passo é preencher esse formulário de inscrição."
           />

           <main>
               <fieldset>
                   <legend>Seus dados</legend>
                    <Input name="name" label="Nome completo"/>

                    <Input name="avatar" label="Avatar"/>
                    
                    <Input name="whatsapp" label="Whatsapp"/>

                    <Textarea name="bio" label="Biografia"/>
               </fieldset>

               <fieldset>
                   <legend>Sobre a aula</legend>
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

                    <Input name="cost" label="Custo por hora"/>
               </fieldset>

               <fieldset>
                   <legend>Horários disponíveis</legend>
                   
               </fieldset>

               <footer>
                   <p>
                        <img src={warningIcon} alt="Aviso"/>
                        Importante! <br/>
                        Preencha todos os dados
                   </p>
                   <button type="button">Salvar cadastro</button>
               </footer>
           </main>
        </div>
    );
}

export default TeacherForm;