import React from 'react';
import './App.css';
import axios from 'axios';
import SearchCity from './components/SearchCity';
import Title from './components/Title';
import ViewWeather from './components/ViewWeather';


class App extends React.Component {
  
  state = {
    value: '',
    city: '',
    latitude: '',
    longitude: '',
    temp: '',
    temp_max: '',
    temp_min: '',
    rain: '',
    humidity: '',
    pressure: '',
    wind: '',
    id: '',
    clouds: '',
    error: '',
    loading: ''
  }

  getCity = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  getWeather = async (e) => {
      e.preventDefault()
      
      const value = this.state.value
            //const city = e.target.elements.city.value;
            try {
                if (value)  {
                 const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                  params: {
                    q:`${value}`,
                    appid: '05508bb378ad891b493b0c886cca7a57',
                    units: 'metric',
                    lang: 'pl'
                }
            })
                  console.log(response);
                      this.setState({
                        city: response.data.name,
                        latitude: response.data.coord.lat,
                        longitude: response.data.coord.lon,
                        temp: response.data.main.temp,
                        temp_max: response.data.main.temp_max,
                        temp_min: response.data.main.temp_min,
                        rain: response.data.weather[0].main,
                        humidity: response.data.main.humidity,
                        pressure: response.data.main.pressure,
                        wind: response.data.wind.speed,
                        id: response.data.weather[0].id,
                        clouds: response.data.clouds.all,
                        error: false,
                        loading: true 
                    })
              }
          
            else {
                    this.setState({
                    city: undefined,
                    latitude: undefined,
                    longitude: undefined,
                    temp: undefined,
                    temp_max: undefined,
                    temp_min: undefined,
                    rain: undefined,
                    humidity: undefined,
                    pressure: undefined,
                    wind: undefined,
                    id: undefined,
                    clouds: undefined,
                    error: true,
                    loading: false
            })
          }
          }
          catch (error) {
            console.log(error)
            this.setState({
              error: true,
              city: this.state.value
            })
          }
  }
  
  render() {
    return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-xs-7 title">
            <Title />
          </div>
          <div className="col-xs-4 weather">
            <SearchCity 
            value = {this.state.value} 
            getWeather = {this.getWeather}
            getCity = {this.getCity}  
            />
            <ViewWeather 
              weather = {this.state}
            />
          </div>
        </div>
      </div>
    </div>
    );
  }
};


export default App;
