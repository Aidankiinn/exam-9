import React from 'react';
import {Button, ButtonBase, Grid, makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const ModalInfo = ({contact}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={contact.photo} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">{contact.name}</Typography>
                                <Typography variant="body2" gutterBottom>
                                    {contact.phone}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {contact.email}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary">Edit</Button>
                                <Button variant="contained" color="secondary">Delete</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default ModalInfo;