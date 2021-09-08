import React, { Component } from "react";
import { Link } from "react-router-dom";
import CountryCard from "../../Components/countryCard/countryCard";

export default class America extends Component {
  constructor(props) {
    super(props);
    this.state = {
      americadata: []
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/region/americas")
      .then(response => response.json())
      .then(response => this.setState({ americadata: response }))
      .catch(error => {
        alert(error);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>America</h2>
        <div className="region__div">
        <p className="link__p">
            <a className="link__a">
              <Link to="/">Back to homepage</Link>
            </a>
          </p>
        </div>
        <div className="countryList">
          {this.state.americadata.map(americac => (
            <div className="countryCard">
              <CountryCard
                name={americac.name}
                key={americac.name}
                population={americac.population.toLocaleString("pt-PT")}
                region={americac.region}
                capital={americac.capital}
                flag={americac.flag}
                currencies={
                  americac.currencies[0]["symbol"] +
                  "(" +
                  americac.currencies[0]["name"] +
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