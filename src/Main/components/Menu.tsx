import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CreateIcon from "@mui/icons-material/Create";
import StorageIcon from "@mui/icons-material/Storage";
import useStyles from "../styles";

const drawerWidth = 300;

const Menu = (props:any) => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      className={classes.drawerStyle}
      variant="permanent"
      anchor="right"
    >
      <Toolbar />
      <List className={classes.listStyle}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <Link to="/dashboard" style={{textDecoration: "none" , color: "currentcolor"}}>
            <ListItemText primary={"Dashboard"} />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
          <Link to="/create-server" style={{textDecoration: "none" , color: "currentcolor"}}>
            <ListItemText primary={"Create Server"} />
          </Link>
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <StorageIcon />
          </ListItemIcon>
          <Link to="/servers" style={{textDecoration: "none" , color: "currentcolor"}}>
            <ListItemText primary={"Servers"} />
          </Link>
          {open ? <ExpandLess className={classes.expandStyle}/> : <ExpandMore className={classes.expandStyle}/>}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem sx={{ pl: 4, display: "block" }}>
              {props.servers.map((server:string) => {
                return <ListItem button>{server}</ListItem>;
              })}
            </ListItem>
          </List>
        </Collapse>
      </List>
      <Divider />
    </Drawer>
  );
};

export default Menu;
