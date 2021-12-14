import "./styles";
import Menu from "./components/Menu";
import Header from "./components/Header";
import React, {Children} from "react";
import Servers from "../pages/Servers";

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
                    </Box>
                </Box>
            </div>
        </>
    );
};

export default withRouter(Index);
