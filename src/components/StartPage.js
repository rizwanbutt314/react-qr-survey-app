import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './StartPage.css';

const startPage = (props) => (
    <div className="centerContent">
        <Link to="/qr"><Button size='massive' primary>Start</Button></Link>
    </div>
);

export default startPage;