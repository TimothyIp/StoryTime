import React from 'react';
import './App.css';
import { CARD_VALUES } from './constants/constants';
class App extends React.Component {
    constructor() {
        super();
    }
    handleClick = event => {
        console.log(event);
    };

    render() {
        return (
            <>
                <h1>Welcome to Story Time</h1>
                <p>
                    We are going to help your team make good estimations about features and efforts
                </p>
                {CARD_VALUES.map((value, i) => (
                    <div>{value}</div>
                ))}
            </>
        );
    }
}

export default App;
