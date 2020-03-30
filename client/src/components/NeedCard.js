import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import API from "../../utils/API";


class FindNeed extends Component {

    render() {
        return (
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


                        <div>
                            {needInfo.map(need => {
                                return (
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <FormControlLabel
                                                control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                                                label="Status" />
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                Zipcode {need.zipcode}
                                            </Typography>
                                            <Typography className={classes.text} component="h2">
                                                {need.list}
                                            </Typography>
                                            <Typography className={classes.text} component="p">
                                                Email {need.email}
                                                <br />
                                                Date Posted: {need.day}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    }
                }))
    }
}
