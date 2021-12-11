import React from "react";
import "../styles.scss";
import useStyles from "../../Themes/DefaultTheme";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 300;

const Header = () => {
  const classes = useStyles();

  return (
      <AppBar position="static" className={classes.headerbar} sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}>
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
