import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import API from "../../utils/API";


class FindNeed extends Component {
    // state = {  }

    render() {
        return (


            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <FormControlLabel
                            control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                            label="Status" />
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Zipcode {props.zipcode}
                        </Typography>

                        <Typography className={classes.text} component="h2">
                            {props.list}
                        </Typography>

                        <Typography className={classes.text} component="p">
                            Email {props.email}
                            <br />
                            Date Posted: {props.date}
                        </Typography>

                    </CardContent>
                </Card>
                    )
                })}
            </div>




        )
    }
}

export default FindNeed;