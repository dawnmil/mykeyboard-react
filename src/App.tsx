import React from 'react';
import './App.css';
import Keyboard from './keyboard/Keyboard';
import LetterDisplay from './display/LetterDisplay';

function App() {
  return (
    <div className="App">
      <LetterDisplay />
      <Keyboard />
    </div>
  );
}

export default App;
