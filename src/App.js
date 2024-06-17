// App.js

import React from 'react';
import { NewTick } from './NewTick';

function App() {
  return (
    <div className="App">
      <header style={{display:'flex', justifyContent:'center',placeItems:'center',flexDirection:'column'}}>
        <div><h1>Tic Tac Toe Game</h1></div>
        <NewTick/>
      </header>
    </div>
  );
}

export default App;
