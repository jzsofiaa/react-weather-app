import { createUseStyles } from 'react-jss';
import { theme } from '../../theme/theme.js';

export const useStyles = createUseStyles({
    '@global': {
        body: {
            color: theme.colors.fontColor
        },
        '@keyframes fade': {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 }
        }
    },
    weather_container: {
        marginTop: '1rem',
        width: '26rem'
    },
    animation: {
        animation: 'fade ease 3s'
    },
    location_container: {
        ...theme.flex.flexStart,
        marginTop: '0.5rem',
        fontSize: '2rem',
        letterSpacing: '0.05rem'
    },
    weatherDescription_container: {
        ...theme.flex.flexStart,
        marginTop: '0.5rem',
        fontSize: '1rem',
        letterSpacing: '0.07rem',
        color: '#e7eaec'
    },
    button_container: {
        marginTop: '0.8rem'
    },
    toggle_button: {
        padding: '0.3rem 0rem 0.4rem 0rem',
        width: '7rem',
        background: theme.colors.secondaryLight,
        color: theme.colors.fontColor,
        borderRadius: '0.5rem',
        border: 'none',
        outline: 'none',
        fontFamily: 'Oxygen',
        fontSize: '0.9rem',
        letterSpacing: '0.08rem',
        cursor: 'pointer',
        '&:hover': {
            background: '#596e7e'
        }
    },
    '@media (max-width: 500px)': {
        weather_container: {
            width: '20rem',
            marginTop: '1.5rem',
            marginBottom: '2rem'
        },
        location_container: {
            fontSize: '1.7rem',
            paddingLeft: '1rem'
        },
        weatherDescription_container: {
            fontSize: '0.9rem',
            paddingLeft: '1rem'
        },
        button_container: {
            paddingLeft: '1rem'
        }
    },
    '@media (min-width: 1400px) and (max-width: 1679px)': {
        weather_container: {
            marginTop: '3rem',
            width: '27rem'
        }
    },
    '@media (min-width: 1680px)': {
        weather_container: {
            marginTop: '3rem',
            width: '33rem'
        },
        location_container: {
            fontSize: '2.4rem',
            paddingLeft: '0.3rem'
        },
        weatherDescription_container: {
            fontSize: '1.3rem',
            paddingLeft: '0.3rem'
        },
        button_container: {
            paddingLeft: '0.3rem'
        }
    }
})