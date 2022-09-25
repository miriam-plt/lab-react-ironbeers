import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Beers from './pages/Beers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import Error from './pages/Error';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/beers" element={<Beers />}></Route>
      <Route path="/beers/new" element={<NewBeer />}></Route>
      <Route path="/beers/random" element={<RandomBeer />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
    </div>
  );
}

export default App;
