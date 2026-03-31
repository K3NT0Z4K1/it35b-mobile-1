import './ExploreContainer.css';
import { IonButton, IonIcon } from '@ionic/react';
import { heart } from 'ionicons/icons';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <>
      <IonButton>Default</IonButton>

      <IonButton shape="round">Round</IonButton>

      <IonButton>
        <IonIcon slot="icon-only" icon={heart} />
      </IonButton>

      <IonButton shape="round">
        <IonIcon slot="icon-only" icon={heart} />
      </IonButton>
    </>
  );
};

export default ExploreContainer;