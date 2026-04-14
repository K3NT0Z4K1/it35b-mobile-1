import { IonIcon, IonItem, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import Feed from "./home-tabs/Feed";
import { ReactNode } from "react";
import Favorites from "./home-tabs/Favorites"; 
import Search from "./home-tabs/Search";
import { Icon } from "ionicons/dist/types/components/icon/icon";
import { bookOutline, search, star } from "ionicons/icons";
const Home: React.FC = () => {


  const tabs = [


    {name: 'Feed', tab: 'feed', url: '/app/home/feed', icon:bookOutline},
    {name: 'Favorites', tab: 'favorites', url: '/app/home/favorites', icon:star},
    {name: 'Search', tab: 'serach', url: '/app/home/search', icon:search},
  ]

  function item(value: { name: string; tab: string; url: string; icon: string; }, index: number, array: { name: string; tab: string; url: string; icon: string; }[]): ReactNode {
    throw new Error("Function not implemented.");
  }

  return(

    <IonReactRouter>

      <IonTabs>

        <IonTabBar slot="bottom">

          <IonToolbar>

            <IonTitle>

              Tabs


            </IonTitle>


          </IonToolbar>
          {/**/}
          {tabs.map((item, index) => (

             <IonTabButton key={index} {...item} href={item.url}>

          <IonIcon icon={item.icon}></IonIcon>
          <IonLabel>{item.name}</IonLabel>
          
          </IonTabButton>
        ))}







          



        </IonTabBar>

        <IonRouterOutlet>

          <Route exact path = "app/home/feed" component= {Feed} />
          <Route exact path = "app/home">

          <Redirect to="/app/home/feed"></Redirect>
          
          </Route> 
          <Route exact path = "app/home/favorites" component= {Feed} />
          <Route exact path = "app/home/search"></Route>


        </IonRouterOutlet>


      </IonTabs>
    </IonReactRouter>



  );


};

export default Home;