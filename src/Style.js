import { createUseStyles } from 'react-jss';
import { theme } from './theme/theme.js';

export const useStyles = createUseStyles({
    '@global': {
        body: {
            background: theme.colors.backgroundColor,
            fontFamily: 'Oxygen'
        }
    },
    header_container: {
        ...theme.flex.column,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Manrope',
        fontSize: '2.6rem',
        letterSpacing: '0.2rem',
        paddingTop: '1rem'
    },
    lineBreak: {
        display: 'none'
    },
    inputField_container: {
        marginTop: '1.5rem'
    },
    inputField: {
        width: '26rem',
        height: '1.5rem',
        border: 'none',
        borderBottom: '1px solid #a0adb4',
        fontFamily: 'Oxygen',
        fontSize: '0.9rem',
        letterSpacing: '0.05rem',
        color: theme.colors.fontColor,
        background: 'transparent',
        outline: 'none',
        paddingBottom: '0.3rem',
        '&::placeholder': {
            color: theme.colors.primaryLight
        }
    },
    error_message: {
        marginTop: '0.8rem',
        fontWeight: '600',
        letterSpacing: '0.05rem',
        color: theme.colors.error
    },
    mainComponent_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    '@media (max-width: 500px)': {
        title: {
            textAlign: 'center',
            fontSize: '2.3rem',
            paddingTop: '0.5rem'
        },
        lineBreak: {
            display: 'block'
        },
        inputField: {
            width: '18rem'
        }
    },
    '@media (min-width: 1400px) and (max-width: 1679px)': {
        title: {
            paddingTop: '5rem',
            fontSize: '2.7rem'
        },
        inputField: {
            width: '27rem'
        }
    },
    '@media (min-width: 1680px)': {
        title: {
            paddingTop: '7rem',
            paddingBottom: '0.3rem',
            fontSize: '3.33rem'
        },
        inputField: {
            width: '32.5rem'
        }
    }
})