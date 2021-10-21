import './App.css';
import PersonCard from './components/persons.js';

function App() {
  return (
    <div className="App">
      <PersonCard first="Jane" last="Doe" age="45" color="blonde"/>
      <PersonCard first="John" last="Smith" age="90" color="brunette"/>
      <PersonCard first="James" last="Turcotte" age="50" color="black" />
      <PersonCard first="Maria" last="Smith" age="27" color="blonde" />
    </div>
  );
}

export default App;
