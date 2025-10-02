import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Game from './pages/Game';

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState('home');
  return (
    <div>
      <nav>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('login')}>Login</button>
        <button onClick={() => setPage('register')}>Register</button>
        <button onClick={() => setPage('game')}>Game</button>
      </nav>
      {page === 'home' && <Home />}
      {page === 'login' && <Login onLogin={u => { setUser(u); setPage('game'); }} />}
      {page === 'register' && <Register onRegister={u => { setUser(u); setPage('game'); }} />}
      {page === 'game' && user && <Game user={user} />}
    </div>
  );
}
export default App;