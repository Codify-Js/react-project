// import logo from './logo.svg';
import './App.css';
import TodoContainer from './containers/FirstStateFullComponent/TodoContainer';

function App() {
  const containerClass = "App";

  return (
    <div className={containerClass}>
      <header className="App-header">
        <TodoContainer />
      </header>
    </div>
  );
}

export default App;
