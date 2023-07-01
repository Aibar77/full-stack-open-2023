/* eslint-disable react/prop-types */
// import WeatherData from "./WeatherData";
const CountryData = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>Capital: {country.capital} </div>
      <div>Area : {country.area} km2</div>
      <h3>Languages: </h3>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.name.common} />
      {/* <WeatherData city={country.capital} /> */}
    </div>
  );
};
export default CountryData;
