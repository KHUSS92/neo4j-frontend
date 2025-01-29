import React, { useEffect, useState } from 'react';
import { fetchGenres } from '../services/api';
import AppList  from '../components/AppList';

function HomePage() {
    const [genres, setGenres] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchGenres()
            .then(data => setGenres(data))
            .catch(err => setError('Failed to load genres.'));
    }, []);

    return (
        <div>
            <h1>Genres</h1>
            {error && <p>{error}</p>}
            {genres.map(genre => (
                <div key={genre.genre}>
                    <h2>{genre.genre}</h2>
                    <AppList apps={genre.apps} />
                </div>
            ))}
        </div>
    );
}

export default HomePage;
