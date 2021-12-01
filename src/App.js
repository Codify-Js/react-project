
import './App.css';
// import TodoContainer from './containers/FirstStateFullComponent/TodoContainer';
import StudentsContainer from './containers/FirstStateFullComponent/StudentsContainer';

function App() {
  const containerClass = "App";

  return (
    <div className={containerClass}>
      <header className="App-header">
        <StudentsContainer parentProps={false} />
      </header>
    </div>
  )
}

export default App;
