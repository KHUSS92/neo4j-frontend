import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAppsByGenre } from '../services/api';

function GenreDetailsPage() {
    const { name } = useParams();
    const [apps, setApps] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAppsByGenre(name)
            .then(data => setApps(data.apps))
            .catch(err => setError('Failed to load apps.'));
    }, [name]);

    return (
        <div>
            <h1>Genre: {name}</h1>
            {error && <p>{error}</p>}
            <ul>
                {apps.map(app => (
                    <li key={app.appId}>{app.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default GenreDetailsPage;
