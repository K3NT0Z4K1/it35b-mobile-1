import { IonTabBar, IonTabs, IonTitle, IonToolbar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

const Home: React.FC = () => {

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

        IonRouter


      </IonTabs>
    </IonReactRouter>



  );


};

export default Home;