import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Tabb} from './Tab'

function App() {
  const data = [
    {button:"One",
     title:"one!"
    },
    {button:"Two",
    title:"two!"
   },
  ]
  return (
    <div className="App">
       <Tabb data={data}/>
    </div>
  );
}

export default App;
