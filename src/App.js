import React from "react"
import './App.css';
import Header from "./Header"
import TinderCards from "./TinderCards"
import SwipeButtons from "./SwipeButtons"
import Chats from "./Chats"
import ChatScreen from "./ChatScreen"
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom"




const App=()=> {
  return (<>
    <div className="App">

      <Router>
        <Switch>

          <Route path="/chats/:person"  >
            <Header backButton="/chats" />
            <ChatScreen/>
          </Route>


          <Route path="/chats"  >
            <Header backButton="/" />
            <Chats/>
          </Route>


          <Route path="/">

                <Header />
             <TinderCards />
                <SwipeButtons />

          </Route>


        </Switch>
      </Router>
    </div>


  </>
  )


}

export default App;


{/* // header 
    // tinder card
    // buttonn below tinder card  */}

    // <Redirect to="/"/>