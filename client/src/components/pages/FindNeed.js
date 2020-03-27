import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
// import NeedCard from '../NeedCard';
import API from "../../utils/API";


export default function FindNeeds() {

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
            margin: 30,
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
    const classes = useStyles();

    // For the switch toggle on the cards
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });

    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };



    API.getNeeds()
        .then(res => {
            console.log(res.data);
            for (var i = 0; i < res.data.length; i++) {
                console.log("Hello")
                const test = res.data[i];
                // console.log(test)
                const needInfo = {
                    id: test._id,
                    list: test.list,
                    email: test.email,
                    date: test.day,
                    zipcode: test.zipcode
                }
                console.log(needInfo);
                return (

                    <div>

                        <Card className={classes.card}>
                            <CardContent>
                                <FormControlLabel
                                    control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                                    label="Status" />
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Zipcode {needInfo.zipcode}
                                </Typography>

                                <Typography className={classes.text} component="h2">
                                    {needInfo.list}
                                </Typography>

                                <Typography className={classes.text} component="p">
                                    Email {needInfo.email}
                                    <br />
                                    Date Posted: {needInfo.date}
                                </Typography>

                            </CardContent>
                        </Card>

                    </div>
                )
            }
        }
)}



