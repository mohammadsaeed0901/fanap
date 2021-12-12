import Menu from "./components/Menu";
import Header from "./components/Header";
import React from "react";
import "./styles.scss";
import ServerTable from "../pages/Servers";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useStyles from "../Themes/DefaultTheme";


// const drawerWidth = 300;

const Main = () => {
    const classes = useStyles();

    const serverFilters = ['Web servers' , 'File servers' , 'Application servers', 'Database servers' , 'Virtual servers' , 'Proxy servers' , 'Print servers'];

    return(
        <>
            <Header />
            <Menu servers={serverFilters}/>
            <Box className={classes.boxStyle}>
                <Stack direction="row" spacing={"75%"} className={classes.stackStyle}>
                    <Button variant="contained" className={classes.buttonStyle}>Create New Server</Button>
                    <Typography variant="h6" gutterBottom component="div">
                        List Of Servers
                    </Typography>
                </Stack>
                <ServerTable/>
            </Box>
        </>
    );
};

export default Main;
