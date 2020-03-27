import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import Grid from '@material-ui/core/Grid';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core/InputBase';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
import API from '../../utils/API';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';

export default function FindNeeds() {

    // const useStyles = makeStyles(theme => ({
    //     root: {
    //         flexGrow: 1,
    //         margin: 30,
    //     },
    //     card: {
    //         minWidth: 275,
    //         maxWidth: 400,
    //         margin: '15px',
    //     },
    //     input: {
    //         marginLeft: theme.spacing(1),
    //         flex: 1,
    //     },
    //     bullet: {
    //         display: 'inline-block',
    //         margin: '0 2px',
    //         transform: 'scale(0.8)',
    //     },
    //     iconButton: {
    //         padding: 10,
    //     },
    //     title: {
    //         fontSize: 14,
    //         fontFamily: 'Bellota',
    //     },
    //     text: {
    //         fontFamily: 'Bellota',
    //     },
    //     divider: {
    //         height: 28,
    //         margin: 4,
    //     },
    //     pos: {
    //         marginBottom: 12,
    //     },
    // }));

    API.getNeeds()
        .then(res => {
            console.log(res.data);
            for (var i = 0; i < res.data.length; i++) {
                console.log("Hello")
                const test = res.data[i];
                console.log(test)
            }
                         
        })



    return (
        <div>
            <button> HELLO </button>
        </div>
    )
}

