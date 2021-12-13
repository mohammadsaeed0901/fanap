import "./styles";
import Menu from "./components/Menu";
import Header from "./components/Header";
import React, {Children} from "react";
import ServerTable from "../pages/Servers";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useStyles from "./styles";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Container, CssBaseline} from "@mui/material";

// const drawerWidth = 300;

interface IProps {
    children: any;
    history: any;
    footer?: boolean;
    header?: boolean;
    sidebar?: boolean;
}

const Index = (props: IProps & RouteComponentProps) => {
    const classes = useStyles();

    const serverFilters = ['Web servers' , 'File servers' , 'Application servers', 'Database servers' , 'Virtual servers' , 'Proxy servers' , 'Print servers'];

    return(
        <>
            <div className={classes.root}>
                <CssBaseline/>
                <Menu servers={serverFilters}/>
                <Box>
                    <Header />
                    <Box className={classes.boxStyle}>
                        <Container className={classes.containerStyle}>
                            <>{props.children}</>
                        </Container>
                        <Stack direction="row" className={classes.stackStyle}>
                            <Button variant="contained" className={classes.buttonStyle}>Create New Server</Button>
                            <Typography variant="h6" gutterBottom component="div">
                                List Of Servers
                            </Typography>
                        </Stack>
                        <ServerTable/>
                    </Box>
                </Box>
            </div>
        </>
    );
};

export default withRouter(Index);
