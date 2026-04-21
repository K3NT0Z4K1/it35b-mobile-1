import { IonButton, 
    IonButtons, 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle, 
    IonCol, 
    IonContent, 
    IonGrid, 
    IonHeader, 
    IonIcon, 
    IonLabel, 
    IonList, 
    IonMenuButton, 
    IonPage, 
    IonRow, 
    IonSearchbar, 
    IonTitle, 
    IonToolbar  } from "@ionic/react";
import { thumbsUpOutline, chatboxOutline, shareOutline } from 'ionicons/icons';
import { useEffect, useState } from "react";


const Feed: React.FC = () => {
    const games = [
        {name: 'Pokemon Yellow'},
        {name: 'Megaman X'},
        {name: 'The Legend of Zelda'},
        {name: 'Pac-Man'},
        {name: 'Super Mario World'}
      ];
    
      const[searchText, setSearchText] = useState("");
      const[filtered, setFilteredGames] = useState(games);

      useEffect(() => {
        const debounce = setTimeout(() => {
            const filtered = games.filter(game =>
                game.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredGames(filtered);
        },400);
        return () => clearTimeout(debounce);
    }, [searchText]);

    return(
        
        <IonPage>
     <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton></IonMenuButton>
                                </IonButtons>
                                <IonTitle>Feed</IonTitle>
                        </IonToolbar>
                    </IonHeader>
        
        <IonContent className="ios-padding">gi
            <IonSearchbar placeholder="Search games" 
            value={searchText}
            debounce={0}
            onIonInput={(e)=> setSearchText(e.detail.value!)}>
            </IonSearchbar>
           
            <IonList>
                {filtered.map((item,index) => (
                <IonCard key={index}>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>{item.name}</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>

      <IonGrid>
            <IonRow>
                <IonCol>
                    <IonButton fill="clear" expand="full">
                    <IonIcon icon={thumbsUpOutline}></IonIcon>
                    <IonLabel style={{marginlEft: '5px'}}>Like</IonLabel>
                </IonButton>
                </IonCol>

                 <IonCol>
                <IonButton fill="clear" expand="full">
                    <IonIcon icon={chatboxOutline}></IonIcon>
                    <IonLabel style={{marginleft: '5px'}}>Comment</IonLabel>
                </IonButton>
                </IonCol>

                    <IonCol>
                 <IonButton fill="clear" expand="full">
                    <IonIcon icon={shareOutline}></IonIcon>
                    <IonLabel style={{marginleft: '5px'}}>Share</IonLabel>
                </IonButton>
                </IonCol>
              
                </IonRow>
            </IonGrid>
            </IonCard>
                ))}
            </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Feed;