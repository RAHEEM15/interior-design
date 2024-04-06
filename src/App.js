import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import Conact from './Component/Conact';
import About from './Component/About';
import Service from './Component/Service';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          // className="App-link"
          // href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        >
         
          <Home/>
          <About/>
          <Service/>
          <Conact/>

          {/* Learn React */}
        </a>
      </header>
    </div>
  );
}

export default App;
