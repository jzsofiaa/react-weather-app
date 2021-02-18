import React, { useState, useEffect } from 'react';
import { WEATHER_API_KEY, URL, GEOLOCATION_API_KEY } from './constans/api.js';
import SearchResultWeather from './components/searchResultWeather/SearchResultWeather';
import Loader from './components/loader/Loader';
import { useStyles } from './Style';
import ReactNotifications from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

function App() {
    const classes = useStyles();
    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState({});
    const [animation, setAnimation] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getGeoLocation();
    },[])

    function getGeoLocation() {
        fetch(`http://ipinfo.io?token=${GEOLOCATION_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                getLocation(data.city);
            })
            .catch((err) => {
                console.log(err);
            });
    }
   
    function getLocation(location) {
        if (location === '') {
            getWarningMessage();
            return;
        }
            setAnimation(true);
            console.log('City:', location);
            fetch(`${URL}?city=${location}&key=${WEATHER_API_KEY}`)
                .then(res => res.json())
                .then(data => {
                    setWeather(data);
                    setLocation('');
                    setIsLoading(false);
                })
                .catch ((err) => {
                    console.log(err);
                    getErrorMessage();
                });
    }

    function getWarningMessage() {   
            store.addNotification({
                message: 'Cannot be empty!',
                type: 'warning',
                container: 'center',
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 2500
                }
            })
    }

    function getErrorMessage() {
        store.addNotification({
            message: 'City not found!',
            type: 'danger',
            container: 'center',
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 2500
            }
        })
    }

    function render() {
        return (
            <div className={classes.root}>
                <ReactNotifications />
                <div className={classes.header_container}>
                    <div className={classes.title} style={{ color: '#fff'}}>
                        React <br className={classes.lineBreak}/> Weather App
                    </div>
                    <div className={classes.inputField_container}>
                        <input
                            type='text'
                            placeholder='Enter city name'
                            onChange={e => setLocation(e.target.value)}
                            value={location}
                            onKeyPress={e => {
                                if (e.key === "Enter") {
                                    getLocation(location)}
                                }}
                            className={classes.inputField}
                        />
                    </div>
                </div>
                <div className={classes.mainComponent_container}>
                    {isLoading
                        ? <Loader />
                        : <SearchResultWeather
                            weather={weather}
                            animation={animation}
                            displayAnimation={setAnimation}
                          />
                    }
                </div>
                     
            </div>
        )
    }
    return render();
}

export default App;