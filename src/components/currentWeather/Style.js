import { createUseStyles } from 'react-jss';
import { theme } from '../../theme/theme.js';

export const useStyles = createUseStyles({
    currentWeather_container: {
        ...theme.flex.column,
        alignItems: 'center',
        marginBottom: '2rem'
    },
    currentTempature: {
        fontSize: '4rem',
        fontWeight: 'bold'
    },
    currentIcon: {
        width: '3.5rem'
    },
    dailyTempature_container: {
        ...theme.flex.row,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '0.5rem'
    },
    temp: {
        fontSize: '1.2rem',
        marginLeft: '0.2rem',
    },
    '@media (max-width: 500px)': {
        currentWeather_container: {
            marginTop: '1rem'
        },
        currentTempature: {
            fontSize: '3.5rem'
        }
    },
    '@media (min-width: 1680px)': {
        temp: {
            fontSize: '1.5rem'
        }
    }
})
