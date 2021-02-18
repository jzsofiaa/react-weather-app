import React from 'react';
import moment from 'moment';
import { ICON_URL } from '../../constans/api.js';
import { useStyles } from './Style';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function MobileViewForecast({ weather, unit }) {
    const classes = useStyles();

    const properties = {
        easing: 'ease',
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
            <div className="each-slide">
                <div className={classes.forecast_container}>
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
                </div>
            </div>
        )
    }

    function render() {
        return (
            <div className={classes.container}>
                <div className={classes.slider_container}>
                    <Slide {...properties}>
                        {weather.data.slice(0, 8).map((data, i) => renderForecastCard(data, i + 1))}
                    </Slide>
                </div>
                </div>
        )
    }
    return render();
}

export default MobileViewForecast;