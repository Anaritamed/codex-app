import React, { useState } from 'react';
import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { createOutline, trash } from 'ionicons/icons';
import EditaTarefaModal from '../components/EditaTarefaModal';
import NovaTarefaModal from '../components/NovaTarefaModal';
import { Tarefa } from '../util/Tarefa';
import '../style/Tarefas.css';

// Componente que representa a segunda página "Tarefas"
const Tarefas: React.FC = () => {  
  const [tarefas, setTarefas] = useState<Record<number, Tarefa>>({ 1: { id: 1, titulo: 'Trabalho Codex', data: '28/05/2023', concluida: false}});
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Marca ou desmarca a tarefa como concluída
  const handleTarefaStatus = (id: number, concluida: boolean) => {
    tarefas[id].concluida = concluida;
    setTarefas({ ...tarefas });
  }
  // Altera o título da tarefa
  const handleTarefaTitulo = (id: number, titulo: string | undefined) => {
    tarefas[id].titulo = titulo;
  }
  // Altera a data da tarefa
  const handleTarefaData = (id: number, data: string | undefined) => {
    tarefas[id].data = data;
  }
  // Adiciona uma nova tarefa
  const adicionaTarefa = (titulo: string, data: string) => {
    const tarefa = new Tarefa(2, titulo, data);
    tarefas[tarefa.id] = tarefa;
    setTarefas({ ...tarefas });
    setIsAddModalOpen(false);
  }
  // Edita uma tarefa
  const editaTarefa = (tarefa: Tarefa) => {
    tarefas[tarefa.id] = tarefa;
    setTarefas({ ...tarefas });
    setIsEditModalOpen(false);
  }
  // Deleta uma tarefa
  const deletaTarefa = (id: number) => {
    delete tarefas[id];
    setTarefas({ ...tarefas });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tarefas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h5>Minhas Tarefas</h5>
        <IonList lines='full'>
          {Object.values(tarefas).map(tarefa => (
            <IonItem key={tarefa.id}>
              <IonCheckbox
                color='tertiary'
                checked={tarefa.concluida}
                onIonChange={e => handleTarefaStatus(tarefa.id, e.target.checked)}
              />
              
              <IonLabel>{tarefa.titulo} - {tarefa.data}</IonLabel>
              
              <IonButton onClick={() => setIsEditModalOpen(true)}>
                <IonIcon icon={createOutline} />
              </IonButton>
              
              <EditaTarefaModal
                isModalOpen={isEditModalOpen}
                tarefa={tarefa}
                onChangeTitulo={handleTarefaTitulo}
                onChangeData={handleTarefaData}
                onSave={editaTarefa}
                onCancel={() => setIsEditModalOpen(false)}
              />

              <IonButton onClick={() => deletaTarefa(tarefa.id)}>
                <IonIcon icon={trash} />
              </IonButton>
            </IonItem>
          ))}

          <IonItem>
            <IonButton onClick={() => setIsAddModalOpen(true)}>
              Adicionar Tarefa
            </IonButton>

            <NovaTarefaModal
              isModalOpen={isAddModalOpen}
              onSave={adicionaTarefa}
              onCancel={() => setIsAddModalOpen(false)}
            />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tarefas;
