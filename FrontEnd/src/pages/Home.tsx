import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Diário</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          No Diário, você pode organizar sua rotina e torna-se mais organizado(a). Crie seu perfil e explore as funcionalidades do nosso app.
          </IonCardContent>
        </IonCard>

        <IonItem button detail={false} routerLink='/perfil'>
          <IonLabel>
            <h3>Cadastre-se</h3>
            <p>Crie um novo perfil pessoal e registre suas tarefas.</p>
          </IonLabel>
        </IonItem>

        <IonItem button detail={false} routerLink='/perfil'>
          <IonLabel>
            <h3>Meu Perfil</h3>
            <p>Visualize seu perfil ao final da página.</p>
          </IonLabel>
        </IonItem>

        <IonItem button detail={false} routerLink='/tarefas'>
          <IonLabel>
            <h3>Organize-se</h3>
            <p>Crie, exclua e edite suas tarefas de forma prática e fácil.</p>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
