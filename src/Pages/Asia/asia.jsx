import React, { Component } from "react";
import { Link } from "react-router-dom";
import CountryCard from "../../Components/countryCard/countryCard";

export default class Asia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asiadata: []
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/region/asia")
      .then(response => response.json())
      .then(response => this.setState({ asiadata: response }))
      .catch(erro => {
        alert(erro);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>Asia</h2>
        <div className="region__div">
        <p className="link__p">
            <a className="link__a">
              <Link to="/">Back to homepage</Link>
            </a>
          </p>
        </div>
        <div className="countryList">
          {this.state.asiadata.map(asiad => (
            <div className="countryCard">
              <CountryCard
                name={asiad.name}
                key={asiad.name}
                population={asiad.population.toLocaleString("pt-PT")}
                region={asiad.region}
                capital={asiad.capital}
                flag={asiad.flag}
                currencies={
                  asiad.currencies[0]["symbol"] +
                  "(" +
                  asiad.currencies[0]["name"] +
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
