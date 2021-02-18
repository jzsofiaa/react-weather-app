import React from 'react';
import moment from 'moment';
import MobileViewForecast from '../mobileViewForecast/MobileViewForecast';
import { ICON_URL } from '../../constans/api.js';
import { useStyles } from './Style';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Forecast({ weather, unit }) {

    const classes = useStyles();
   
    const properties = {
        autoplay: false
    }

    function renderUnit(temp) {
        const celcius = Math.round(temp);
        const fahrenheit = Math.round(temp * 9 / 5 + 32);

        if (unit.temp_change) {
            return `${celcius}°C`
        }
        else {
            return `${fahrenheit}°F`
        }
    }

    function renderForecastCard(data, i) {
        return (
            <div className={classes.forecast_card}>
                <div className={classes.day}>
                    {moment().add(i, 'day').format('dddd')}
                </div>    
                <div className={classes.date}>
                    {moment().add(i, 'day').format('MMM D')}
                </div>
                <img
                    src={`${ICON_URL}${data.weather.icon}.png`}
                    alt='Weather icon'
                    className={classes.forecast_icon}
                />
                <div className={classes.forecastTempature_container}>
                    <div className={classes.forecast_temp}>
                        {renderUnit(data.min_temp)}
                    </div>
                    <div className={classes.forecast_temp}> / </div>
                    <div className={classes.forecast_temp}>
                        {renderUnit(data.max_temp)}
                    </div>
                </div>
            </div>
        )
    }

    

    function render() {
        return (
            <>
            <div className={classes.slider_container}>
                <Slide easing="ease" {...properties}>
                    <div className="each-slide">
                        <div className={classes.forecast_container}>
                            {weather.data.slice(0,3).map((data, i) => renderForecastCard(data, i+1))}
                        </div>
                    </div>
                    <div className="each-slide">
                        <div className={classes.forecast_container}>
                             {weather.data.slice(4, 7).map((data, i) => renderForecastCard(data, i+4))}
                        </div>
                    </div>
                    <div className="each-slide">
                        <div className={classes.forecast_container}>
                            {weather.data.slice(8, 11).map((data, i) => renderForecastCard(data, i + 7))}
                        </div>
                    </div>
                </Slide>
            </div>
            <div>
                <MobileViewForecast weather={weather} unit={unit}/>
            </div>
            </>
        )
    }
    return render();
}

export default Forecast;