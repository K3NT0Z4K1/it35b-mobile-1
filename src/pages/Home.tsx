import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { bookOutline, star, search } from "ionicons/icons"
import { Redirect, Route } from "react-router"
import Favorites from "./home-tabs/Favorites"
import Feed from "./home-tabs/Feed"
import Search from "./home-tabs/Search"

const Home: React.FC = () => {
const tabs = [

  {name: "Feed", tab: 'feed', url: '/app/home/feed', icon:bookOutline},
  {name: "Favorites", tab: 'Favorites', url: '/app/home/favorites', icon:star},
  {name: "Search", tab: 'Search', url: '/app/home/search', icon:search},

]


   return (
    <IonReactRouter>
      <IonTabs>
        <IonTabBar slot= "bottom">
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>

          {tabs.map((item,index) => (
            <IonTabButton key={index} tab={item.tab} href={item.url} >
              <IonIcon icon={item.icon} />
              <IonLabel>{item.name}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>

<IonRouterOutlet>
    <Route exact path="/app/home/feed" component={Feed} />
    <Route exact path="/app/home">
        <Redirect to="/app/home/feed" />
    </Route>
        <Route exact path="/app/home/feed" component={Feed} />
        <Route exact path="/app/home/favorites" component={Favorites} />
        <Route exact path="/app/home/search" component={Search} />

</IonRouterOutlet>
      </IonTabs>
    </IonReactRouter>
   );
};

export default Home;