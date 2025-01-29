import React from 'react';
import '../styles/AppList.css';

function AppList({ apps }) {
    return (
        <ul className="app-list">
            {apps.map(app => (
                <li key={app.appId}>{app.name}</li>
            ))}
        </ul>
    );
}

export default AppList;
