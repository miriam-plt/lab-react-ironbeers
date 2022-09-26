import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewBeer() {
    const [ name, setName ] = useState('');
    const [ tagline, setTagline ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ firstBrewed, setFirstBrewed ] = useState('');
    const [ brewersTips, setBrewersTips ] = useState('');
    const [ attenuation, setAttenuation ] = useState(0);
    const [ contributedBy, setContributedBy ] = useState('');

    const navigate = useNavigate();
    const API_URL = process.env.REACT_APP_BASE_URL;

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBeer = { name: name, tagline: tagline, description: description, first_brewed: firstBrewed, brewers_tips: brewersTips, attenuation_level: attenuation, contributed_by: contributedBy }
        // axios POST request with the form data
        axios.post(`${API_URL}/new`, newBeer)
             .then(response => navigate('/beers'))
             .catch(err => console.log(err));
    }

    return(
        <div>
            <h1>Add a new beer</h1>
                <form onSubmit={handleSubmit} >
                    <label>Name</label>
                    <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />

                    <label>Tagline</label>
                    <input
                    type="text"
                    name="tagline"
                    onChange={(e) => setTagline(e.target.value)}
                    value={tagline}
                    />

                    <label>Description</label>
                    <input
                    type="text"
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    />

                    <label>First Brewed</label>
                    <input
                    type="text"
                    name="first_brewed"
                    onChange={(e) => setFirstBrewed(e.target.value)}
                    value={firstBrewed}
                    />

                    <label>Brewers Tips</label>
                    <input
                    type="text"
                    name="brewers_tips"
                    onChange={(e) => setBrewersTips(e.target.value)}
                    value={brewersTips}
                    />
            
                    <label>Attenuation Level</label>
                    <input
                    type="number"
                    name="attenuation_level"
                    onChange={(e) => setAttenuation(e.target.value)}
                    value={attenuation}
                    />

                    <label>Contributed by</label>
                    <input
                    type="text"
                    name="contributed_by"
                    onChange={(e) => setContributedBy(e.target.value)}
                    value={contributedBy}
                    />
                    
                    <button type="submit">Create Beer</button>
                </form>
        </div>
    )
}

export default NewBeer;