import React from 'react';
import './App.css';
import MenuPlansContainer from './containers/MenuPlansContainer.js'
import SearchContainer from './containers/SearchContainer.js'
import About from './components/About.js'
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'


 

 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route path="/search" component={SearchContainer} />
        
        <Route path="/menuplans" component={MenuPlansContainer} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
