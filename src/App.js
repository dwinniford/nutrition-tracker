import React from 'react';
import './App.css';
import MealPlansContainer from './containers/MealPlansContainer.js'
import SearchContainer from './containers/SearchContainer.js'
import About from './components/About.js'
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
// import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'


 

 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar>
          
        </NavBar>
        <Route path="/search" component={SearchContainer} />
        
        <Route path="/mealplans" component={MealPlansContainer} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
