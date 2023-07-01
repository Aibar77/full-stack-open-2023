import { useState, useEffect } from "react";
import axios from "axios";
import CountriesData from "./components/CountriesData";
import CountryData from "./components/CountryData";
const BASE_URL = "https://studies.cs.helsinki.fi/restcountries/api/all";

const Countries = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setCountries(res.data);
    });
  }, []);
  const handleQueryChange = (e) => {
    const search = e.target.value;
    setQuery(search);
    setCountriesToShow(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <h1>Countries App</h1>
      <div className="input">
        find countries{" "}
        <input type="text" value={query} onChange={handleQueryChange} />
      </div>
      <div className="output">
        {countriesToShow.length === 1 ? (
          <CountryData country={countriesToShow[0]} />
        ) : null}
        {countriesToShow.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : (
          <CountriesData
            countriesToShow={countriesToShow}
            setCountriesToShow={setCountriesToShow}
          />
        )}
      </div>
    </div>
  );
};

export default Countries;
