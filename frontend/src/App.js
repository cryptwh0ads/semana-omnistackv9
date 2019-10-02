import React, { useState } from "react";
import api from './services/api';
import "./App.css";

import logo from "./assets/logo.svg";

function App() {
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log('Hello World!');
    // console.log(email);

    const response = await api.post('/sessions', { email });

    // console.log(response)

    const { _id } = response.data;

    // console.log(_id);
    localStorage.setItem('user', _id);
  }


  return (
    <div className="container">
      <img src={logo} alt="logo" />

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre{" "}
          <strong>talentos</strong> para sua empresa.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input
            type="email"
            id="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <button type="submit" className="btn">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
