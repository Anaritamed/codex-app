import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonModal, IonTitle, IonToolbar } from '@ionic/react';

type Props = {
  isModalOpen: boolean;
  onSave: (titulo: string, data: string) => void
  onCancel: () => void
}

const NovaTarefaModal = ({ isModalOpen, onSave, onCancel }: Props) => {
  const [titulo, setTitulo] = useState('');
  const [data, setData] = useState('');

  const resetCampos = () => {
    setTitulo('');
    setData('');
  }

  return (
    <IonModal isOpen={isModalOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nova Tarefa</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Título</IonLabel>
          <IonInput
            type="text"
            placeholder="Título"
            value={titulo}
            onIonChange={e => { if (typeof e.target.value == 'string') setTitulo(e.target.value)}}
          />
          <IonLabel position="stacked">Data</IonLabel>
          <IonInput
            type="text"
            placeholder="Dia/mês/ano"
            maxlength={10}
            value={data}
            onIonChange={e => { if (typeof e.target.value == 'string') setData(e.target.value)}}
          />
        </IonItem>
        <IonButton size='small' onClick={() => {onSave(titulo, data), resetCampos()}}>Salvar</IonButton>
        <IonButton size='small' onClick={() => {onCancel(), resetCampos()}}>Cancelar</IonButton>
      </IonContent>
    </IonModal>
  );
}

export default NovaTarefaModal;