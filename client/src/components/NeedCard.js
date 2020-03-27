import React, { Component } from 'react';

class FindNeed extends Component {
    // state = {  }
    render() { 
        return ( 
            // useEffect(() => {
//     get_needs();
// }, []);
// const [needState, setNeedState] = useState([]);
// const [needs, setNeeds] = useState([]);

// const get_needs = () => {
//     API.getNeeds()
//         .then(res => {
//             setNeeds(res.data);
//         })
//         .catch(err => console.log(err));
// };

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

// export default function FindNeed() {

//     const classes = useStyles();

//     // For the switch toggle on the cards
//     const [state, setState] = React.useState({
//         checkedA: true,
//         checkedB: true,
//         checkedC: true,
//       });

//       const handleChange = event => {
//         setState({ ...state, [event.target.name]: event.target.checked });
//       };

//     return (
//         <div className="findNeedContainer">
//             <h3>If request is filled, the card will be Transparent. Switches toggled Red are still in Need.</h3>
//             {/* Search Bar to search by Zipcode. */}
//             <Paper id="searchBar" component="form">
//                 <InputBase
//                     className={classes.input}
//                     placeholder="Search zipcodes or items"
//                 />
//                 <IconButton type="submit" className={classes.iconButton} aria-label="search">
//                     <SearchIcon />
//                 </IconButton>
//             </Paper>

//             <Grid container className={classes.root}>
//                 {/* Each card will be populated from the seed database or the actual database. */}

//                 {/* Just placeholding! */}

//                 <Card className={classes.card}>
//                     <CardContent>
//                     <FormControlLabel
//         control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
//         label="Status"/>
//                         <Typography className={classes.title} color="textSecondary" gutterBottom>
//                             Zipcode 78756
//                     </Typography>
                    

//                         <Typography className={classes.text} component="h2">
//                             Cheese
//                     </Typography>

//                         <Typography className={classes.text} component="p">
//                             User Email
//                         <br />
//                         Date Posted: A week ago
//                     </Typography>

//                     </CardContent>
//                 </Card>

//                 <Card className={classes.card}>
//                     <CardContent>
//                     <FormControlLabel
//         control={<Switch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
//         label="Status"/>
//                         <Typography className={classes.title} color="textSecondary" gutterBottom>
//                             Zipcode 78729
//                     </Typography>

//                         <Typography className={classes.text} component="h2">
//                             Bread, Toilet Paper, Ibuprofen
//                     </Typography>

//                         <Typography className={classes.text} component="p">
//                             email@email.com
//                         <br />
//                         Date Posted: Todayyyyyy
//                     </Typography>

//                     </CardContent>
//                 </Card>

//                 <Card className={classes.card}>
//                     <CardContent>
//                     <FormControlLabel
//         control={<Switch checked={state.checkedC} onChange={handleChange} name="checkedC" />}
//         label="Status"/>
//                         <Typography className={classes.title} color="textSecondary" gutterBottom>
//                             Zipcode 78660
//                     </Typography>

//                         <Typography className={classes.text} component="h2">
//                             Canned Corn, Baby Formula, Diapers, Wet Wipes
//                     </Typography>

//                         <Typography className={classes.text} component="p">
//                             email@example.com
//                         <br />
//                         Date Posted: Heaven help me
//                     </Typography>

//                     </CardContent>
//                 </Card>

                {/* <div>
                    {needs.map(need => {
                        return (
                            <Card className={classes.card}>
                                <CardContent>
<FormControlLabel
        control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Status"/>
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
                </div> */}


        //     </Grid>
        // </div>
    )
}

         );
    }
}
 
export default FindNeed;