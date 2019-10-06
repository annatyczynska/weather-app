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
            <div>
                <h1 className="title">Aplikacja pogodowa</h1>
                <div className='date'> 
                    <div>
                    <span className="today">{today}, </span>
                    <span className="time">{time}</span>
                    <p>{day}</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default Title;