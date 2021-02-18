import { createUseStyles } from 'react-jss';
import { theme } from '../../theme/theme.js';

export const useStyles = createUseStyles({
    container: {
        display: 'none'
    },
    slider_container: {
       width: '20rem',
       marginLeft: '0.8rem'
    },
    forecast_container: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    forecast_card: {
        ...theme.flex.column,
        alignItems: 'center',
        height: '11.5rem',
        width: '20rem',
        background: theme.colors.secondaryLight,
        marginBottom: '0.5rem',
        marginLeft: '0.25rem',
        marginRight: '0.25rem'
    },
    day: {
        paddingTop: '1.2rem',
        fontSize: '1.3rem',
        letterSpacing: '0.1rem'
    },
    date: {
        color: theme.colors.dateColor,
        paddingTop: '0.2rem',
        fontSize: '0.9rem'
    },
    forecast_icon: {
        paddingTop: '1rem',
        width: '3rem'
    },
    forecastTempature_container: {
        ...theme.flex.row,
        alignItems: 'center',
        paddingTop: '1rem'
    },
    forecast_temp: {
        fontSize: '0.9rem',
        marginLeft: '0.2rem'
    },
    '@media (max-width: 500px)': {
        container: {
            display: 'block'
        }
    }
});
