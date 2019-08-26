import React, { Component } from 'react';
import './App.scss';
import Genralstats from './Genralstats'
import Employestats from './Employstats'

export default class App extends Component {
    render() {
        return (
            <div className='app'>
                <div className="page-content">
                   <Genralstats />
                   <div className='Line'></div>
                    <Employestats />
                </div>
            </div>
        );
    }
}

