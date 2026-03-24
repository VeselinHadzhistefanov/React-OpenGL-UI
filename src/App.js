import logo from './logo.svg';
import './App.css';
import { WeddingBandSettingStyle } from './WeddingBandFeatures';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <span style={{color:"lightblue"}}>Edit <code>src/App.js</code> and save to reload.</span>
          <br></br>
          This section is intended to represent the actual structure of the web page <br></br>
          and stands for it's contents.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
        <MyYesButton></MyYesButton>
        <br></br>
        <WeddingBandSettingStyle></WeddingBandSettingStyle> 
      </header>
    </div>
  );
}

function MyYesButton() {
  return (
    <button>I'm a accepting this wedding band as a symbol of eternal love and devotion from my partner and I vow to be infinitelly loyal and in love with my partner no matter what. I am my partner's love and my partner is my lover and protector for eternity.</button>
  );
}

export {App, MyYesButton};