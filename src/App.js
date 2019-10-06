import React from 'react';
import './App.css';
import Title from './components/Title';
import ViewWeather from './components/ViewWeather';


class App extends React.Component {
  
  render() {
    return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-xs-7 title">
            <Title />
          </div>
          <div className="col-xs-7 weather">
            <ViewWeather />
          </div>
        </div>
      </div>
    </div>
    );
  }
};

export default App;
