import React, { useState } from 'react';
import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { Usuario } from '../util/Usuario';
import '../style/Perfil.css';

const Perfil: React.FC = () => {
  const [dadosUsuario, setDadosUsuario] = useState<Usuario>({ id: 1, nome: 'Marcos Antônio', genero: 'Masculino', idade: 19, email: 'marcosantonio@gmail.com', telefone: '(83) 99945-7890' });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleUsuarioNome = (nome: string | undefined) => {
    dadosUsuario.nome = nome;
  }

  const handleUsuarioEmail = (email: string | undefined) => {
    dadosUsuario.email = email;
  }

  const handleUsuarioTelefone = (telefone: string | undefined) => {
    dadosUsuario.telefone = telefone;
  }

  const editaPerfil = (dadosUsuario: Usuario) => {
    setDadosUsuario(dadosUsuario);
    setIsEditModalOpen(false);
  }

  const editaPerfilModal = () => {
    return (
      <IonModal isOpen={isEditModalOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Editar Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonItem>
            <IonLabel position="stacked">Nome</IonLabel>
            <IonInput
              type="text"
              value={dadosUsuario.nome}
              onIonChange={e => handleUsuarioNome(e.target.value?.toString())}
            />
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput
              type="text"
              value={dadosUsuario.email}
              onIonChange={e => handleUsuarioEmail(e.target.value?.toString())}
            />
            <IonLabel position="stacked">Telefone</IonLabel>
            <IonInput
              type="text"
              value={dadosUsuario.telefone}
              onIonChange={e => handleUsuarioTelefone(e.target.value?.toString())}
            />
          </IonItem>
          <IonButton size='small' onClick={() => editaPerfil(dadosUsuario)}>Salvar</IonButton>
          <IonButton size='small' onClick={() => setIsEditModalOpen(false)}>Cancelar</IonButton>
        </IonContent>
      </IonModal>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class='perfil'>
        <div>
          <h5>Crie seu Perfil</h5>
          <IonList>
            <IonItem>
              <IonLabel position="stacked">Nome Completo</IonLabel>
              <IonInput type='text' placeholder='Digite seu nome completo'></IonInput>
            </IonItem>
            <IonList>
              <IonItem>
                <IonLabel position="stacked">Gênero</IonLabel>
                <IonSelect aria-label='genero' placeholder='Selecione'>
                  <IonSelectOption value='Feminino'>Feminino</IonSelectOption>
                  <IonSelectOption value='Masculino'>Masculino</IonSelectOption>
                  <IonSelectOption value='Não-binário'>Não-Binário</IonSelectOption>
                  <IonSelectOption value='Outro'>Outro</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Idade</IonLabel>
                <IonInput type='text' maxlength={2} placeholder='Digite sua idade'></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput type='text' placeholder='Digite seu email'></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Telefone</IonLabel> 
                <IonInput type='text' maxlength={15} placeholder='(00) 90000-0000'></IonInput> 
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Senha</IonLabel>
                <IonInput type='password' placeholder='Digite sua senha'></IonInput>
              </IonItem>
              <IonButton className='botao-cadastro' shape='round' size='small'>Cadastre-se</IonButton>
            </IonList>
          </IonList>
        </div>
        <div>
          <IonCard>
            <img alt='Foto do meu perfil' src='https://img.freepik.com/vetores-premium/homem-perfil-caricatura_18591-58482.jpg?w=2000'/>
            <IonCardHeader>
              <IonCardTitle>{dadosUsuario.nome}, {dadosUsuario.idade} anos</IonCardTitle>
              <IonCardSubtitle>Email: {dadosUsuario.email}</IonCardSubtitle>
              <IonCardSubtitle>Telefone: {dadosUsuario.telefone}</IonCardSubtitle>
              <IonCardSubtitle>Gênero: {dadosUsuario.genero}</IonCardSubtitle>
              
              <IonButton className='botao-perfil' shape='round' onClick={() => setIsEditModalOpen(true)}>Editar Perfil</IonButton>
              {editaPerfilModal()}
            </IonCardHeader>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Perfil;
