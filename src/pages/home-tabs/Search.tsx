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
import { useEffect, useState } from "react";


const Search : React.FC = () => {


     const games = [

        {name: 'Pokemon Yellow'},
        {name: 'Mega Man X'},
        {name: 'The Legend of Zelda'},
        {name: 'Pac-Man'},
        {name: 'Super Mario World'}
]

        const [searchText,setSearchText] = useState("");
        const [filtered,setFilteredGames] = useState(games);


        useEffect(() => {

            const debounce = setTimeout (() =>{
                const filtered = games.filter(game => 
                        game.name.toLowerCase().includes(searchText.toLowerCase())


                );

                setFilteredGames(filtered);
            },400);

            return()=> clearTimeout(debounce);
 },[searchText]);

    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>

                    <IonButtons slot="start">

                        <IonMenuButton></IonMenuButton>
                    </IonButtons> 

                    <IonTitle>
                        Template

                    </IonTitle>


                  
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen> 

                <h1>Template</h1>
            </IonContent>


        </IonPage>


    );


};

export default Search;

// logic

// render ui