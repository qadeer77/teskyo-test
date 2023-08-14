import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRepos } from './actions';
import './App.css';

// App.js
// ... (imports)

function App() {
  const [username, setUsername] = useState('');
  const { repos, loading } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleGetRepos = () => {
    if (username.trim() !== '') {
      dispatch(fetchRepos(username));
    }
  };

  return (
    <div className="App">
      <h1>Github Repositories</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleGetRepos}>Get Repos</button>

      {loading ? (
        <div className="text-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          {repos.map((repo) => (
            <div key={repo.id}>
              <h3>{repo.name}</h3>
              <p>Owner: {repo.owner.login}</p>
              <p>Stars: {repo.stargazers_count}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default App;
