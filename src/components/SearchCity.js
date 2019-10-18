/* Stworzyć w apce reacta komponent SearchCity, który zawiera:
input tekstowy do wpisania nazwy miasta
Button do obsługi zapytania axiosa z wpisaną przez użytkownika nazwą miasta
*/

import React from 'react';

const SearchCity = (props) => {

        return (
            <div className="row">
                <form className="form-inline" 
                 onSubmit={props.getWeather}>
                    <div className="input-field col s6">
                        <input 
                        onChange={props.getCity}
                        type="text" 
                        value={props.value} 
                        name="city" placeholder="Miasto..."/>
                        <label class="active"></label>
                    </div>
                    <button className="btn btn-info"
                    >sprawdź pogodę</button>
                </form>
            </div>
        );
    }

export default SearchCity;