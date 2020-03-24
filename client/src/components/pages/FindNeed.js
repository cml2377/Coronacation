import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        margin: 10,
    },
    card: {
        minWidth: 275,
        maxWidth: 400,
        margin: '15px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        fontFamily: 'Bellota',
    },
    text: {
        fontFamily: 'Bellota',
    },
    pos: {
        marginBottom: 12,
    },
});

export default function FindNeed() {

    const classes = useStyles();

    return (
        <div className="findNeedContainer">
            <p>This will display cards of needs populated by database.</p>
            <Grid container className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>

                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Zipcode 78759
                    </Typography>

                        <Typography className={classes.text} component="h2">
                            Toilet Paper
                    </Typography>

                        <Typography className={classes.text} component="p">
                            User Email
                        <br />
                        Link to User Profile?
                    </Typography>

                    </CardContent>
                </Card>

                {/* Just placeholding! */}

                <Card className={classes.card}>
                    <CardContent>

                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Zipcode 78759
                    </Typography>

                        <Typography className={classes.text} component="h2">
                            Toilet Paper
                    </Typography>

                        <Typography className={classes.text} component="p">
                            User Email
                        <br />
                        Link to User Profile?
                    </Typography>

                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>

                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Zipcode 78759
                    </Typography>

                        <Typography className={classes.text} component="h2">
                            Toilet Paper
                    </Typography>

                        <Typography className={classes.text} component="p">
                            User Email
                        <br />
                        Link to User Profile?
                    </Typography>

                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>

                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Zipcode 78759
                    </Typography>

                        <Typography className={classes.text} component="h2">
                            Toilet Paper
                    </Typography>

                        <Typography className={classes.text} component="p">
                            User Email
                        <br />
                        Link to User Profile?
                    </Typography>

                    </CardContent>
                </Card>

            </Grid>
        </div>
    )
}