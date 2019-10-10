import React from 'react';
import '../App.css';
import {format} from 'date-fns';
import {pl} from 'date-fns/locale';

class Title extends React.Component {
    render() {
        const today = format(new Date(), "EEEE, dd MMMM yyyy", {locale: pl});
        const time = format(new Date(), "p", {locale: pl});
        const day = format(new Date(), "DDD 'dzień w roku'", {locale: pl});
        return (
            <div className="title">
                <h1 className="title-container">Aplikacja pogodowa</h1>
                <div className="date"> 
                    <h4 className="title-container__subtitle">{today} </h4>
                    <h4 className="time">{time}</h4>
                    <h4>{day}</h4>
                </div>
            </div>
        );
    }
};

export default Title;