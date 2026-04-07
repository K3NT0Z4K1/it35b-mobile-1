// Declaration imports

import { 
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonSplitPane,
    IonMenu } 
from "@ionic/react";


const Menu : React.FC = () => {

    return (

        <IonPage>
            <IonSplitPane>

                <IonMenu>


                    {/* Header*/}


                    <IonHeader>

                        <IonToolbar>

                            <IonTitle>Menu</IonTitle>
                        </IonToolbar>


                </IonHeader>
                {/* Content*/}



                </IonMenu>
                {/* Routing*/}
                
            </IonSplitPane>

        </IonPage>


    );


};

export default Menu;

// logic

// render ui