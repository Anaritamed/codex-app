import React from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import { Tarefa } from '../util/Tarefa';

type Props = {
  isModalOpen: boolean;
  tarefa: Tarefa;
  onChangeTitulo: (id: number , titulo: string | undefined) => void
  onChangeData: (id: number , data: string | undefined) => void
  onSave: (tarefa: Tarefa) => void
  onCancel: () => void
}

const EditaTarefaModal = ({ isModalOpen, tarefa, onChangeTitulo, onChangeData, onSave, onCancel }: Props) => {
  return (
    <IonModal isOpen={isModalOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Editar Tarefa</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Título</IonLabel>
          <IonInput
            type="text"
            placeholder="Título"
            value={tarefa.titulo}
            onIonChange={e => onChangeTitulo(tarefa.id, e.target.value?.toString())}
          />
          <IonLabel position="stacked">Data</IonLabel>
          <IonInput
            type="text"
            placeholder="Dia/mês/ano"
            maxlength={10}
            value={tarefa.data}
            onIonChange={e => onChangeData(tarefa.id, e.target.value?.toString())}
          />
        </IonItem>
        <IonButton size='small' onClick={() => onSave(tarefa)}>Salvar</IonButton>
        <IonButton size='small' onClick={() => onCancel()}>Cancelar</IonButton>
      </IonContent>
    </IonModal>
  );
}

export default EditaTarefaModal;