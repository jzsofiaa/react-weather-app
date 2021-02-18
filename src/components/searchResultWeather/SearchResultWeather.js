import React, { useState } from 'react';
import CurrentWeather from '../currentWeather/CurrentWeather';
import Forecast from '../forecast/Forecast';
import { useStyles } from './Style';
import moment from 'moment';

function SearchResultWeather({ weather, animation, displayAnimation }) {
    const classes = useStyles();
    const [unit, setUnit] = useState({
        temp_change: true
    });
    const [buttonText, setButtonText] = useState('Fahrenheit');

    function toggleUnit() {
        setUnit({
            temp_change: !unit.temp_change
        })
        changeButtonText();
    }

    function changeButtonText() {
        if (buttonText === "Fahrenheit") {
            setButtonText("Celcius");
        } else {
            setButtonText("Fahrenheit");
        }
    }
    
    function render() {
        if (!weather || !weather.data){
            return null;
        }

        return (
            <div className={classes.weather_container}>
                <div
                    className={animation ? classes.animation : ''}
                    onAnimationEnd={() => displayAnimation(false)}
                >
                    <div className={classes.location_container}>
                        {weather.city_name}
                    </div>
                    <div className={classes.weatherDescription_container}>
                        {moment().format("dddd MMMM D")}, {weather.data[0].weather.description}
                    </div>
                    <div className={classes.button_container}>
                        <button onClick={toggleUnit} className={classes.toggle_button}>
                            {buttonText}
                        </button>
                    </div>
                    <CurrentWeather weather={weather} unit={unit} />
                    <Forecast weather={weather} unit={unit} /> 
                </div>     
            </div>
        )
    }
    return render();
}

export default SearchResultWeather;