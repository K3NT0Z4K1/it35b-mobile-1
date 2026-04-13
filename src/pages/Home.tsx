import { IonRouterOutlet, IonTabBar, IonTabs, IonTitle, IonToolbar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router";
import Feed from "./home-tabs/Feed";

const Home: React.FC = () => {


  const tabs = [


    {name: 'Feed', tab: 'feed', url: '/app/home/feed, icon:bookOutline'},
    {name: 'Favorites', tab: 'favorites', url: '/app/home/favorites, icon:star'},
    {name: 'Search', tab: 'serach', url: '/app/home/search, icon:search'},
  ]

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



        </IonTabBar>

        <IonRouterOutlet>

          <Route exact path = "app/home/feed" component= {Feed} />
          <Route exact path = "app/home" />


        </IonRouterOutlet>


      </IonTabs>
    </IonReactRouter>



  );


};

export default Home;