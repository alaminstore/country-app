import React, { useState, useEffect } from "react";
import "./App.css";
import Countries from "./components/Countries";

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  const fetchData = async (url) => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    setIsLoading(false);
    setError(null);
    console.log(countries);
  };

  useEffect(() => {
    fetchData(url);
  }, []);
  return (
    <div className="App">
      <h3>Country App</h3>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2> {error.message}</h2>}
      {!isLoading && countries && <Countries Countries={countries} />}
    </div>
  );
}

export default App;
