import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingTop: 24,
        },
        grid: {
            [theme.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    })
);
