import './App.css';
import React, { useState } from 'react';

function App(props) {
  const [email, setEmail] = useState('');
  function handleEmail() {
    // salvar no storage

  }

  return (
    <div className="App">
      <h1>GamerShop Mega Promoção</h1>
      <h2>Cadastre seu e-mail para receber as promoções</h2>
      <input className="emailInput" placeholder="Digite seu e-mail" value={email} onChange={e => setEmail(e.target.value)}/>
      <button type="button" onClick={handleEmail}>Cadastrar</button>
    </div>
  )
}

export default App;
