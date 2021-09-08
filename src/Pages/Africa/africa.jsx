import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CountryCard from '../../Components/countryCard/countryCard';

export default class Africa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            africadata: []
        };
    }

    componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/region/africa")
    .then(response => response.json())
    .then(response => this.setState({ africadata: response }))
    .catch(error => {
        alert(error);
    });
    }

render() {
    return (
        <div className='container'>
            <h2>Africa</h2>
            <div className='region__div'>
                <p className='link__p'>
                    <a className='link__a'>
                        <Link to='/'>Back to homepage</Link>
                    </a>
                </p>
            </div>
            <div className='countryList'>
            {this.state.africadata.map(africac => (
                <div className='countryCard'>
                    <CountryCard
                        name={africac.name}
                        key={africac.name}
                        population={africac.population.toLocaleString("pt-PT")}
                        region={africac.region}
                        capital={africac.capital}
                        flag={africac.flag}
                        currencies={
                            africac.currencies[0]['symbol'] +
                            "(" +
                            africac.currencies[0]['name'] +
                            ")"
                        }
                    />
                </div>
            ))}
            </div>
        </div>
    );
}
}