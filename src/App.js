import './App.css';
import Basic from './components/Basic';
import Cancer from './components/FHIR/Cancer';
import General from './components/FHIR/General';
import Zika from './components/FHIR/Zika';

function App() {
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <Basic />
      <Zika />
      <Cancer />
      <General/>
    </div>
  );
}

export default App;
