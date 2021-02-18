import React from 'react';
import { useStyles } from './Style';
import CircularProgress from '@material-ui/core/CircularProgress';
import { theme } from '../../theme/theme';

function Loader() {
    const classes = useStyles();

    return (
        <div className={classes.loader_container}>
            <div className={classes.loader}>
                <CircularProgress style={{ color: theme.colors.primaryLight}} />
            </div>
        </div>
    )
}

export default Loader