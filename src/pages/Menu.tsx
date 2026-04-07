// Declaration imports

import {
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonSplitPane,
    IonMenu, 
    IonRouterOutlet} 
from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import Home from "./Home";


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

                <IonRouterOutlet id="main">

                    <Route exact path="/app/home" component={Home} />
                    <Route exact path="/app">
                    
                        <Redirect to="/app/home" />
                    </Route>  
                </IonRouterOutlet>
                
            </IonSplitPane>

        </IonPage>


    );


};

export default Menu;

// logic

// render ui