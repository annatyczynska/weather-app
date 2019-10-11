/* Stworzyć w apce reacta komponent SearchCity, który zawiera:
input tekstowy do wpisania nazwy miasta
Button do obsługi zapytania axiosa z wpisaną przez użytkownika nazwą miasta
*/

import React from 'react';

class SearchCity extends React.Component {
   
    render() {
        return (
            <div className="container">
                <form className="form-inline" onSubmit={this.props.getWeather} >
                    <input className="form-control mb-2 mr-sm-2" type="text" name="city" placeholder="Miasto..."/>
                    <button className="btn btn-info">sprawdź pogodę</button>
                </form>
            </div>
        );
    }
};

export default SearchCity;