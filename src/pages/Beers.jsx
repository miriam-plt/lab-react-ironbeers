import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

function Beers() {
  const [beers, setBeers] = useState([]);
  const API_URL = process.env.REACT_APP_BASE_URL;
  
  useEffect(() => {
    axios.get(`${API_URL}/`)
         .then(response => setBeers(response.data))
         .catch(err => console.log(err))
  }, []);

  if(beers.length === 0){
    return <>
            <h1>List of beers</h1>
            <p>Loading...</p>
            </>
    
  }
  
    return(
        <div>
            <h1>List of beers</h1>
            {beers.map((beer) => (
                <div key={beer._id} className='card'>
                    <img src={beer.image_url} alt='beer' width='100px' />
                    <h3>{beer.name}</h3>
                    <h5>{beer.tagline}</h5>
                    <p>Created by: {beer.contributed_by}</p>
                </div>
            ))}
        </div>
    )
}

export default Beers;