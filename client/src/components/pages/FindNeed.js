import React, { Component, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NeedCard from '../NeedCard';
import API from '../../utils/API';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

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
    }
}));

export default class FindNeed extends Component {

    constructor(props){
        super(props);
        this.state={
            needs: [],
            searchField: ""
        }
        this.classes = {}
    }

    componentDidMount(){
        API.getNeeds()
            .then(response=> {

            })
    };
    
    // TODO: write a function that will perform API call and populates list in state with results

    doAPICall() {
        API.getNeeds()
            .then(res => {
                this.setState({
                    needs: res.data
                })
                console.log(this.state.needs)
            })
            .catch(err => console.log(err));
    }

    // Search the needs state for specific string/zipcode
    // function findSingleNeed(search) {

    //     API.findNeeds(search)
    //     .then(res=>{
    //         setNeeds(res.data);
    //     }).catch(err=> console.log(err));
    // }

    searchZipcode = (event) => {
        event.preventDefault();
        this.setState({ needs: [] })
        console.log(this.state.needs);
        API.searchNeed(event.target.value)
            .then(response => {
                this.setState({ needs: response.data });
            })
    }


    handleSearch = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
    return (
        <div className="findNeedContainer">
            <h3>If request is filled, the card will be Transparent. Switches toggled Red are still in Need.</h3>
            {/* Search Bar to search by Zipcode. */}
            <Paper id="searchBar" component="form">
                <InputBase
                    className={this.classes.input}
                    placeholder="Search by zipcode"
                />
                <IconButton onClick={this.searchZipcode} className={this.classes.iconButton} aria-label="search">
                    <SearchIcon /> {/* TODO: ON Enter or click, call doAPICall with the search string  */}
                </IconButton>
            </Paper>

            <Grid container className={this.classes.root}>
                {/* use that list from the state to make a bunch of NeedCards */}
                {this.state.needs.map((n) => <NeedCard need={n} />)}
            </Grid>
        </div>
    )
}}