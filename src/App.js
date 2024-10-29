import logo from './logo.svg';
import './App.css';
import MyCSVImporter from './components/csvimporter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyCSVImporter />
      </header>
    </div>
  );
}

export default App;
