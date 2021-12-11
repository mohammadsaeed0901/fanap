import React , {useState} from "react";
import useStyles from "../../Themes/DefaultTheme";
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreateIcon from '@mui/icons-material/Create';
import StorageIcon from '@mui/icons-material/Storage';

const drawerWidth = 300;

const Menu = () => {
    const classes = useStyles();

  return (
      <Drawer
          sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
              },
          }}
          variant="permanent"
          anchor="right"
      >
          <Toolbar />
          <Divider />
          <List>
              <ListItem button>
                  <ListItemIcon>
                      <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Dashboard'} />
                  </ListItem>
              <ListItem button>
                  <ListItemIcon>
                      <CreateIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Create Server'} />
              </ListItem>
              <ListItem button>
                  <ListItemIcon>
                      <StorageIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Servers'} />
              </ListItem>
          </List>
          <Divider />
          <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                  <ListItem button key={text}>
                      <ListItemIcon>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                  </ListItem>
              ))}
          </List>
      </Drawer>
  );
};

export default Menu;
