import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: 10,
    },
    card: {
        minWidth: 275,
        maxWidth: 400,
        margin: '15px',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    iconButton: {
        padding: 10,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Bellota',
    },
    text: {
        fontFamily: 'Bellota',
    },
    divider: {
        height: 28,
        margin: 4,
    },
    pos: {
        marginBottom: 12,
    },
}));

export default function FindNeed() {

    const classes = useStyles();

    return (
        <div className="findNeedContainer">
            <p>This will display cards of needs populated by database.</p>

            {/* Search Bar to search by Zipcode. */}
            <Paper id="searchBar" component="form">
                <InputBase
                    className={classes.input}
                    placeholder="Search zipcodes or items"
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>

            <Grid container className={classes.root}>
                {/* Each card will be populated from the seed database or the actual database. */}
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
                        Date Posted
                    </Typography>

                    </CardContent>
                </Card>

                {/* Just placeholding! */}

                <Card className={classes.card}>
                    <CardContent>

                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Zipcode 78756
                    </Typography>

                        <Typography className={classes.text} component="h2">
                            Cheese
                    </Typography>

                        <Typography className={classes.text} component="p">
                            User Email
                        <br />
                        Date Posted
                    </Typography>

                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>

                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Zipcode 78729
                    </Typography>

                        <Typography className={classes.text} component="h2">
                            Oranges
                    </Typography>

                        <Typography className={classes.text} component="p">
                            User Email
                        <br />
                        Date Posted
                    </Typography>

                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardContent>

                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Zipcode 78759
                    </Typography>

                        <Typography className={classes.text} component="h2">
                            Corona
                    </Typography>

                        <Typography className={classes.text} component="p">
                            User Email
                        <br />
                        Date Posted
                    </Typography>

                    </CardContent>
                </Card>

            </Grid>
        </div>
    )
}