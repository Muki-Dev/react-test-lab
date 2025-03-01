 import React, { useState } from 'react';
 import Header from './components/Header';
 import Button from './components/Button';
 import './App.css';

 function App() {
  const [count,setCount] = useState(0);

  return(
      <div className='container'>
        <Header title='Bienvenue sur Testify React ' />
        <p>Compteur : { count } </p>
        <Button label='Increment' onClick={() => setCount(count + 1)} />
      </div>
    );
 }

 export default App;