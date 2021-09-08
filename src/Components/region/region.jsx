import React, { useEffect } from "react";
import CountryCard from "../countryCard/countryCard";
import { useState } from "react";
import Search from "../search/search";

const Region = () => {
  const [dataApiPaises, setDataApiPaises] = useState([]);
  const [regions, setRegions] = useState('');
  const [search, setSearch] = useState('');
  
  const name = (params) => {
    console.log(params);
    setSearch(params)
  }

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(response => setDataApiPaises(response))
      .catch(error => {
        alert(error);
      });
  },[])

    return (
      <div className="main">
        <div className="container">
          <div>
            <h2>All Countries</h2>
          </div>
        </div>

        
    <button class="btn-regions" onClick={() => setRegions('Africa')}>  Africa
    </button>

    
    <button class="btn-regions" onClick={() => setRegions('Americas')}>  America
    </button>

    
    <button class="btn-regions" onClick={() => setRegions('Asia')}>  Asia
    </button>

    
    <button class="btn-regions" onClick={() => setRegions ('Europe')}>  Europe
    </button>

    
    <button class="btn-regions" onClick={() => setRegions ('Oceania')}> Oceania
    </button>

    <Search
    name={name}
    />

        <div className="countryList">
          {dataApiPaises.filter((el) => {return el.region === regions || regions === ''})
          .filter((el) => {return el.name.toUpperCase().startsWith(search.toUpperCase())})
          .map(country => (
            <div className="countryCard">
              <CountryCard
                name={country.name}
                key={country.name}
                population={country.population.toLocaleString("pt-PT")}
                region={country.region}
                capital={country.capital}
                flag={country.flag}
                currencies={
                  country.currencies[0]['symbol'] +
                  "(" +
                  country.currencies[0]['name'] +
                  ")"
                }
              />
            </div>
          ))}
        </div>
      </div>
    );
}

export default Region;