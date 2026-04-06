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


const Login : React.FC = () => {

    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>

                    <IonButtons slot="start">

                        <IonMenuButton></IonMenuButton>
                    </IonButtons> 

                    <IonTitle>
                        Login

                    </IonTitle>


                  
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen> 

                <h1>Login</h1>
            </IonContent>


        </IonPage>


    );


};

export default Login;

// logic

// render ui