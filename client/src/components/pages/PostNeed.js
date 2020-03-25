import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto"
  },
  paper: {
    width: 300,
    height: 250,
    overflow: "auto"
  },
  button: {
    margin: theme.spacing(0.5, 0)
  },
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
    width: 200,
  },
}));

function not(a, b) {
  return a.filter(value => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter(value => b.indexOf(value) !== -1);
}

export default function PostNeed() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([
    "Baby Formula",
    "Beans",
    "Bread",
    "Canned Corn",
    "Canned Soup",
    "Chicken",
    "Diapers",
    "Eggs",
    "Fruit",
    "Fresh Vegetables",
    "Hand Sanitizer",
    "Ibuprofen",
    "Pedialyte",
    "Rice",
    "Soap",
    "Toilet Paper",
    "Tylenol",
    "Wet Wipes",
    "Other: Email me for more info"

  ]);
  const [right, setRight] = React.useState([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  // Taking whatever is checked in the top box, and then you click the add button, 
  // it transfers the items to the below box.
  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };


  // To-do list
  // 1. If no user-email, err
  // 2. Submit list click = post user email to DB
  // 3. Submit list click = post listItems[i].key to DB
  const handleSubmit = () => {
    let listItems = customList(right).props.children.props.children[0];

    for (var i = 0; i < listItems.length; i++) {


      // Send this to back-end and make a post route to DB
      console.log(listItems[i].key);

    }

    // console.log(customList(right).props.children.props.children[0]);
  }

  const customList = items => (
    <Paper className={classes.paper}>
      <List dense component="div" role="list">
        {items.map(value => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  return (
    <div className="postNeedContainer">
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>{customList(left)}</Grid>
        <Grid item>
          <Grid container direction="row" alignItems="center">
            <Button
              id="addBtn"
              className="listBtn"
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right"
            >
              Add ✓ Below
            </Button>
            <Button
              className="listBtn"
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left"
            >
              Remove ✓
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList(right)}</Grid>

        <div id="zipcodeInput">
          <CssTextField
            label="Zipcode"
            variant="outlined"
          />
        </div>

        <div id="userEmail">
          <CssTextField
            label="Email"
            variant="outlined"
          />
        </div>

        <Button
          className="listBtn"
          variant="outlined"
          size="small"
          className={classes.button}
          onClick={handleSubmit}
          aria-label="Submit List"
        >
          Submit List
        </Button>
      </Grid>

    </div>
  );
}
