import React from 'react';
import './App.css';
import TodoContainer from './containers/FirstStateFullComponent/TodoContainer';

function App() {
  const containerClass = "App";

  return (
    <div className={containerClass}>
      <header className="App-header">
        
      </header>
      <TodoContainer />
    </div>
  );
}

export default App;
