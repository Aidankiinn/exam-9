import React from 'react';
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import "./ContactItem.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '20px'
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    img: {
        width: '70px',
        height: "auto",
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const ContactItem = ({image, name, cardInfo}) => {
    const classes = useStyles();

    return (
        <div className={classes.root} onClick={cardInfo}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <img className={classes.img} alt="complex" src={image}/>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs>
                            <Typography variant="subtitle1">{name}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default ContactItem;