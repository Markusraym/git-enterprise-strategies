// Change the import to match the variable name 'logo' and file used by newtext
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World! This is our team project.</p>
        <p>My name is Mark Ploski and this is my project contribution</p>
      </header>
    </div>
  );
}

export default App;
