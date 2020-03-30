import React, { Component, useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles, withStyles } from '@material-ui/core/styles';

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
        }
        ));

class NeedCard extends Component {

    render() {
        
        const needProps = this.props.need;
        const classes = {}
        return (

            <div>
                <Card className={classes.root}>
                    <CardContent>
                        {/* Need a checkbox to show completion status */}
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Zipcode: {needProps.zipcode}
                        </Typography>
                        <Typography className={classes.text} component="h2">
                            {needProps.list}
                        </Typography>
                        <Typography className={classes.text} component="p">
                            Email: {needProps.email}
                            <br />
                            Date Posted: {needProps.day}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(useStyles, {withTheme: true}) (NeedCard);