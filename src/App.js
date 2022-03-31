import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>

      <Header></Header>
      <Pricing></Pricing>
   <h1 className="text-6xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
