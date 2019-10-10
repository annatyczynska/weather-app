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
import axios from 'axios';
import SearchCity from './SearchCity';


class ViewWeather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: false,
            country: false,
            latitude: '',
            longitude: '',
            temp: '',
            rain: '',
            pressure: '',
            temp_max: '',
            temp_min: '',
            humidity: '',
            wind: '',
            id: '',
            clouds: '',
            error: '',
            loading: false
        }
    }

    getWeather = async (e) => {
        e.preventDefault();
       // const { city, country, apiID, units } = this.props;
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const apiID = '05508bb378ad891b493b0c886cca7a57'
        try {
            if (country === true && city === true)  {
             const response = await
        axios.get('http://api.openweathermap.org/data/2.5/weather', {
            params: {
                q:`${city},${country}`,
                appid: `${apiID}`,
                units: 'metric',
                lang: 'pl'
            }
            
        })
        console.log(response);
           this.setState({
                city: response.data.name,
                country: response.data.sys.country,
                latitude: response.data.coord.lat,
                longitude: response.data.coord.lon,
                temp: response.data.main.temp,
                temp_max: response.data.main.temp_max,
                temp_min: response.data.main.temp_min,
                rain: response.data.weather[0].main,
                humidity: response.data.main.humidity,
                pressure: response.data.main.pressure,
                wind: response.data.wind.speed,
                id: response.data.weather[0].id,
                clouds: response.data.clouds.all,
                error: '',
                loading: true
            })
        }
        else {
                this.setState({
                city: undefined,
                country: undefined,
                latitude: undefined,
                longitude: undefined,
                temp: undefined,
                temp_max: undefined,
                temp_min: undefined,
                rain: undefined,
                humidity: undefined,
                pressure: undefined,
                wind: undefined,
                id: undefined,
                clouds: undefined,
                error: 'Podaj prawidłowe miasto i kraj, np: - Miasto: Poznan, Kraj: PL -',
                loading: false
        })
    }
} catch (error) {
        console.log(error);
    }
}

    render() {
        let result;
        //let load = (<h4>Loading</h4>)
        //let icon;
        if (this.state.error !== undefined && this.state.country && this.state.city) {
            result = 
            (<div className="weather">
                <p className="city">
                    <span> {this.state.city}, {this.state.country} </span>
                    <span className="geo"> Geo:  {this.state.longitude}, {this.state.latitude}</span>  
                </p>
                <p className="temp">
                    <span>Temp: {Math.round(this.state.temp)} °C </span>
                    <span>Min: {Math.round(this.state.temp_min)} °C </span>
                    <span>Max: {Math.round(this.state.temp_max)} °C </span>
                </p>
                <p>Wilgotność: {this.state.humidity} %</p>
                <p>Ciśnienie: {this.state.pressure} hPa</p>
                <p>Zachmurzenie: {this.state.clouds} %</p>
                <p>Wiatr: {this.state.wind} m/s</p>
                <p>Opady: {this.state.rain}</p>
            </div>)
           // (!({this.state.id >699 && this.state.id < 800}) && !({this.state.id > 899 & this.state.id < 1000}))
        }
        else {
            result = <div className="error">
                <em>{this.state.error}</em>
            </div>
        }

        return (
            <div className="result">
            <SearchCity getWeather={this.getWeather} />
            {result}
            </div>
        );
    }
}

export default ViewWeather;