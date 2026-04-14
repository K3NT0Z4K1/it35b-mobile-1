// Declaration imports

import { 
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar } 
from "@ionic/react";


const Feed : React.FC = () => {

    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>

                    <IonButtons slot="start">

                        <IonMenuButton></IonMenuButton>
                    </IonButtons> 

                    <IonTitle>
                        Template

                    </IonTitle>


                  
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen> 

                <h1>Template</h1>
            </IonContent>


        </IonPage>


    );


};

export default Feed;

// logic

// render ui