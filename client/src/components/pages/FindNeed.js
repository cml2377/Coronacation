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

    
    const get_needs = () => {
        API.getNeeds()
            .then(res => {
                const needs = res.data
                console.log(needs);
            })
    }
    
    
    return (
        <div>
            <button
                onClick={() => get_needs()}> HELLO </button>
        </div>
    )
    




}