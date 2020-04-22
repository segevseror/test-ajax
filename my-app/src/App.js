import React from 'react';
import logo from './logo.svg';
import './App.css';
import SetSession from  './components/SetSession';
import GetSession from  './components/GetSession';


function App() {
  return (
    <div className="App">
      <SetSession/>
      <GetSession/>
    </div>
  );
}

export default App;
