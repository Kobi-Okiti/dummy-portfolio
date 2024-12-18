import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a simple React portfolio site created with TypeScript and deployed on Netlify.</p>
        <a
          className="App-link"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          View my GitHub
        </a>
      </header>
    </div>
  );
};

export default App;
