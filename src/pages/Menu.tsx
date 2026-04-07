// Declaration imports

import {
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonSplitPane,
    IonMenu, 
    IonRouterOutlet,
    IonContent,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonButton} 
from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { homeOutline, information, logOutOutline } from "ionicons/icons";


const Menu : React.FC = () => {

    const path =[
        {name: 'Home', url: '/app/home', icon:homeOutline},
        {name: 'About', url: '/app/about', icon:information },

    ]

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
                <IonContent>

                    {path.map((item, index) => (
                        <IonMenuToggle key={index}>

                            <IonItem routerLink={item.url} routerDirection="forward">

                                <IonIcon icon={item.icon} slot="start"></IonIcon>
                                {item.name}
                            </IonItem>

                        </IonMenuToggle>


                    ))}

                    <IonButton routerLink= "/" routerDirection="back" expand="full">

                        <IonIcon icon={logOutOutline}  slot="start"></IonIcon>
                        
                    </IonButton>
                    
                </IonContent>




                </IonMenu>
                {/* Routing*/}

                <IonRouterOutlet id="main">

                    <Route exact path="/app/home" component={Home} />
                    <Route exact path="/app">
                    
                        <Redirect to="/app/home" />

            
                    </Route>  

                    <Route exact path="/app/about" component={About} />
                </IonRouterOutlet>
                
            </IonSplitPane>

        </IonPage>


    );


};

export default Menu;

// logic

// render ui