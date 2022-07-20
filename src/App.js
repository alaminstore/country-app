import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Countries from "./components/Countries";
import Search from "./components/Search";

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter(
      (country) => country.name.common !== name
    );
    setFilteredCountries(filter);
  };

  const fetchData = async (url) => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    setFilteredCountries(data);
    setIsLoading(false);
    setError(null);
    console.log(countries);
  };
  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilteredCountries(newCountries);
  };

  useEffect(() => {
    fetchData(url);
  }, []);
  return (
    <div className="App">
      <h3>Country App</h3>
      <Search onSearch={handleSearch} />
      {isLoading && <h2>Loading...</h2>}
      {error && <h2> {error.message}</h2>}
      {!isLoading && countries && (
        <Countries
          Countries={filteredCountries}
          onRemoveCountry={handleRemoveCountry}
        />
      )}
    </div>
  );
}

export default App;
