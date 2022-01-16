import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    
    <div className="app">
        
        <Router>
        <Header /> {/* Header Outside of Router so it appears everywhere */}
          <Switch>
            <Route path="/search/:searchTerm">
            <div className="app_page">
                <div className="app_sidebar" > 
                  <Sidebar />
                </div>
                <SearchPage />
            </div> 
            </Route>
            <Route path="/">
            
              <div className="app_page">
              <div className="app_sidebar" > 
                  <Sidebar />
                </div>
                <RecommendedVideos />
              </div> 
            </Route>
          </Switch>
        </Router>
               
    </div>
  );
}

export default App;
