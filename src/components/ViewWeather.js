/* 
Stworzyć w apce react komponent ViewWeather, który zawiera informacje o:
Nazwie miasta, dla którego jest wyświetlana pogoda
Położeniu geolokapzacyjnym miasta (latitude, longitude)
Aktualnej temperaturze w danej chwip
Zakresie temperatur z danego dnia
Aktualnej wilgotności oraz ciśnieniu atmosferycznym
Aktualnych opadach oraz wietrze
*/

import React from 'react';

const ViewWeather = props => {
        
    let result;
    const {city, longitude, latitude, temp, temp_max, temp_min, humidity, pressure, 
    clouds, wind, rain, error, value} = props.weather;

        if (!error && value) {
            result = 
        (<div className="weather">
            <p className="city">
                <h3> Miasto: {city} </h3>
                <span className="geo"> Geo:  {longitude}, {latitude}</span>  
            </p>
            <p className="temp">
                <span>Temp: {Math.round(temp)} °C / </span>
                <span>Min: {Math.round(temp_min)} °C / </span>
                <span>Max: {Math.round(temp_max)} °C </span>
            </p>
            <p>Wilgotność: {humidity} %</p>
            <p>Ciśnienie: {pressure} hPa</p>
            <p>Zachmurzenie: {clouds} %</p>
            <p>Wiatr: {wind} m/s</p>
            <p>Opady: {rain}</p>
        </div>)
        }

      else {
           result = ( 
            <div className="error">
            <em>{error}</em>
            </div>
           )
       }
    return (
        <div className="result">
         {error ? `błędne miasto: ${value}` : result}
        </div>
    );
  }

export default ViewWeather;