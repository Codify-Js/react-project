import logo from './logo.svg';
import './App.css';
import InputComponent from './components/Header/InputComponent';

function App() {

  const containerClass = "App";

  const handleClick = () => {
    console.log('CLICK')
  }

  const linkStyles = { cursor: 'pointer', color: 'red' }

  const handleChange = (e) => {

    console.log('Change One', e.target.value);
  }

  const handleSecondChange = (e) => {
    console.log('Change', e.target.value);
  }

  return (
    <div className={containerClass}>
      <header className="App-header">
        <div className="Input-container">
          <InputComponent 
            myProp={'Some props'}
            onChange={handleChange}
            hide
          />

          <InputComponent 
            onChange={handleSecondChange}
          />
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={linkStyles} onClick={handleClick}>link</div>
      </header>
    </div>
  );
}

export default App;
