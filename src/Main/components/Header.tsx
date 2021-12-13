import React from "react";
import useStyles from "../styles";
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 300;


const Header = () => {
  const classes = useStyles();

  return (
      <AppBar position="static" className={classes.headerbar} style={{ width: "100%", marginRight: `${drawerWidth}px` }}>
        <Toolbar>
          <Avatar alt="Travis Howard" src="https://picsum.photos/id/1005/100" className={classes.iconbtn}/>
          <Typography variant="h6" className={classes.title}>
            User
          </Typography>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
