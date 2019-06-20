import React from 'react';
import './App.css';
import NavBar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DataIngestionHome from './components/dataingestionworkbench/dataingestionhome/DataIngestionHome';
import CreateIngestion from './components/dataingestionworkbench/dataingestionform/CreateIngestion';



function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
          <div id="switch-wrapper">
            <Switch>
            <Route
                path="/"
                exact={true}
                render={props => <Dashboard />}
              />
              <Route
                path="/data-ingestion"
                exact={true}
                render={props => <DataIngestionHome />}
              />
                <Route
                path="/data-ingestion-form"
                exact={true}
                render={props => <CreateIngestion/>}
              />
            </Switch>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
