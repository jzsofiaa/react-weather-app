import { createUseStyles } from 'react-jss';
import { theme } from '../../theme/theme.js';

export const useStyles = createUseStyles({
    slider_container: {
        width: '29rem'
    },
    forecast_container: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    forecast_card: {
        ...theme.flex.column,
        alignItems: 'center',
        height: '11rem',
        width: '8.3rem',
        background: theme.colors.secondaryLight,
        marginBottom: '0.5rem',
        marginLeft: '0.45rem',
        marginRight: '0.45rem'
    },
    day: {
        paddingTop: '1.2rem',
        fontSize: '1.1rem',
        letterSpacing: '0.1rem'
    },
    date: {
        color: theme.colors.dateColor,
        paddingTop: '0.2rem',
        fontSize: '0.85rem'
    },
    forecast_icon: {
        paddingTop: '0.8rem',
        width: '3rem'
    },
    forecastTempature_container: {
        ...theme.flex.row,
        alignItems: 'center',
        paddingTop: '0.8rem'

    },
    forecast_temp: {
        fontSize: '0.9rem',
        marginLeft: '0.2rem'
    },
    '@media(max-width: 500px)': {
        slider_container: {
            display: 'none'
        }
    },
    '@media (min-width: 1400px) and (max-width: 1679px)': {
        slider_container: {
            width: '30rem'
        }
    },
    '@media (min-width: 1680px)': {
        slider_container: {
            width: '35.5rem'
        },
        forecast_card: {
            width: '12rem',
            height: '14rem'
        },
        day: {
            paddingTop: '2rem',
            fontSize: '1.3rem'
        },
        date: {
            paddingTop: '0.3rem',
            fontSize: '0.95rem'
        },
        forecast_icon: {
            paddingTop: '1rem',
            width: '3rem'
        },
        forecastTempature_container: {
            paddingTop: '0.8rem'
        },
        forecast_temp: {
            fontSize: '1.1rem'
        },
    }
})