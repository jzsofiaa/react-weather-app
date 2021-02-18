import React from 'react';
import { ICON_URL } from '../../constans/api.js';
import { useStyles } from './Style';

function CurrentWeather({ weather, unit }) {
    const classes = useStyles();

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

    function render() {
        return (
            <>          
                <div className={classes.currentWeather_container}>
                    <div className={classes.currentTempature}>
                        {renderUnit(weather.data[0].temp)}
                    </div>
                    <img
                        src={`${ICON_URL}${weather.data[0].weather.icon}.png`}
                        alt='Weather icon'
                        className={classes.currentIcon}
                    />
                    <div className={classes.dailyTempature_container}>
                        <div className={classes.temp}>{renderUnit(weather.data[0].min_temp)}</div>
                        <div className={classes.temp}> / </div>
                        <div className={classes.temp}>{renderUnit(weather.data[0].max_temp)}</div>
                    </div>
                </div>
            </>    
        )
    }
    return render();
}

export default CurrentWeather;