import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navBar">
      <AppBar className="appBar" position="static">
        <Toolbar>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon className="hamburger" >
            </MenuIcon>
          </Button>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/" >
              <MenuItem onClick={handleClose}>Home</MenuItem>
            </Link>
            <Link to="/post_need" >
              <MenuItem onClick={handleClose}>Post Need</MenuItem>
            </Link>
            <Link to="/find_need" >
              <MenuItem onClick={handleClose}>Find Need</MenuItem>
            </Link>
          </Menu>
          <div className="centerLogo">
            <Link to="/"><Typography variant="h6" className="logo">
              NeedATX
            </Typography></Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
