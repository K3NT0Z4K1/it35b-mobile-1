// Declaration imports

import { 
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar,
IonButton, 
useIonRouter} 
from "@ionic/react";


const Login : React.FC = () => {
    const navigation = useIonRouter();

    const doLogin = () => {
        navigation.push('/app', 'forward', 'replace');
    };

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

                <IonButton expand="full" onClick={() => doLogin()}>
                    Login
                </IonButton>

               
            </IonContent>


        </IonPage>


    );


};

export default Login;

// logic

// render ui