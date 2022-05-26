import './styles/App.css';
import Header from './components/Header'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Content from './components/Content'

function App() {
  const [email, setEmail] = useState('');

  useEffect(() => {
      (
          async () => {
              const response = await fetch('http://localhost:5001/api/account/user', {
                  headers: {'Content-Type': 'application/json'},
                  credentials: 'include'
              });

              const content = await response.json();

              setEmail(content.email);
          }
      )();
  });


  return (
    <Router>
      <div className="App">
        <div className="app__header">
          <Header email={email} setEmail={setEmail} />
        </div>
        <main className="app_body">
          <Content email={email} setEmail={setEmail} />        
        </main>
      </div>
    </Router>
  );
}

export default App;
