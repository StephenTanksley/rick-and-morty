import React from "react";
import TabNav from "./components/TabNav.js";
import {Route} from 'react-router-dom'
import {WelcomePage} from './components/WelcomePage'
import {CharacterList} from './components/Characters/CharacterList'
import {EpisodeList} from './components/Episodes/EpisodeList'
import {LocationsList} from './components/Locations/LocationsList'

//This is a change to upload the Rick and Morty app.

export default function App() {
  return (
    <main>
      <br />
      <TabNav />
      
{/* <br /> */}
      
      <Route exact 
          path='/' 
          component={WelcomePage} />

      <Route 
          path='/character-list' 
          render={(props) => <CharacterList {...props} />} />

      <Route 
          path='/episode-list' 
          render={(props) => <EpisodeList {...props} />} />

      <Route
          path='/locations-list'
          render={(props) => <LocationsList {...props} />} />
    </main>
  );
}
