//import { IonToolbar } from "@ionic/react"

import { IonPage, IonSplitPane, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuToggle, IonItem, IonIcon, IonButton, IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router";
import { homeOutline, informationCircleOutline, logOutOutline } from "ionicons/icons";
import Home from "./Home";
import About from "./About";



const Menu:React.FC = () => {

    const path = [
        {name:'Home', url:'/app/home',icon:homeOutline},
        {name:'About',url:'/app/about',icon:informationCircleOutline}
    ]
    return(
        <IonPage>
            <IonSplitPane contentId="main">
               <IonMenu contentId="main">
                  {/* Header */}
                  <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                  </IonHeader>
                  {/* Content */}
                  <IonContent>
                    {path.map((item, index) =>(
                        <IonMenuToggle key={index}>
                            <IonItem routerLink={item.url} routerDirection="forward">
                                <IonIcon icon={item.icon} slot="start"></IonIcon>
                                {item.name}
                            </IonItem>
                        </IonMenuToggle>
                    ))}

                    <IonButton routerLink="/" routerDirection="back" expand="full">
                      <IonIcon icon={logOutOutline} slot="start"></IonIcon>
                      Logout
                    </IonButton>
                  </IonContent>
               </IonMenu>
               {/* Routing */}
               <IonRouterOutlet id="main">
                    <Route exact path="/app/home" component={Home} />
                    <Route exact path="/app" >
                        <Redirect to="/app/home"/>
                    </Route>
                     <Route exact path="/app/about" component={About} />
               </IonRouterOutlet>
            </IonSplitPane>
            
        </IonPage>
           
    );
}

export default Menu;