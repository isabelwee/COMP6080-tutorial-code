import React from 'react';
import './App.css';

function App() {
  const [org, setOrg] = React.useState('microsoft');
  const [numRepos, setNumRepos] = React.useState(0);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${org}`)
      .then(d => d.json())
      .then(d => {
        setNumRepos(d.public_repos)
        console.log(d.public_repos)
      });
  }, [org]);

  const handleChange = (e) => {
    setTimeout(() => {
      setOrg(e.target.value);
      
    }, timeout);
  }
  

  return (
    <div style={{ margin: '50px'}}>
      <input disabled="true" type="text" value={numRepos} />
      <button type="button" onClick={() => setNumRepos(numRepos - 1)}>&minus;</button>
      <button type="button" onClick={() => setNumRepos(numRepos + 1)}>&#43;</button>
      <br />
      <input type="text" value={org} onChange={handleChange}/>
    </div>
  );
}

export default App;
