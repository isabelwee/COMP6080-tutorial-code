import React from 'react';
import './App.css';

function App() {

  const [name, setName] = React.useState([]);
  const [allNames, setAllNames] = React.useState([]);

  const submitInfo = () => {
    setAllNames([ ... allNames, name ]);
  };

  return (
    <div>
      <header className="header">
        <nav id="nav-bar">
          <ul>
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Pricing</li>
            <li className="nav-item">Partners</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <label htmlFor="name">First name: </label>
        <input id="name" type="text" name="first-name" value={name} onChange={e => setName(e.target.value)} /><br />
        <ul>
          {allNames.map((n, idx) => (
            <li key={idx}>{n}</li>
          ))}
        </ul>
        <button id="form-submit" onClick={submitInfo}>Submit</button>
      </main>
      <footer className="footer">
        &copy; Giant Apple 2020
      </footer>
    </div>
  );
}

export default App;
