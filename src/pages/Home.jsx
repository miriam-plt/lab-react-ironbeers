import { Link } from 'react-router-dom';
import beersPic from '../assets/beers.png';
import randomBeerPic from '../assets/random-beer.png';
import newBeerPic from '../assets/new-beer.png';


function Home() {
    return(
        <div> 
            <h1>Home</h1>
            <img src={beersPic} alt="beers"></img>
            <br></br><Link to="/beers">All beers</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
            <img src={randomBeerPic} alt="random-beer"></img>
            <br></br><Link to="/beers/random">Random Beer</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
            <img src={newBeerPic} alt="new-beer"></img>
            <br></br><Link to="/beers/new">New Beer</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
        </div>
    )
}

export default Home;