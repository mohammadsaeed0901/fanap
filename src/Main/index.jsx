import Menu from "./components/Menu";
import Header from "./components/Header";
import React from "react";
import "./styles.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useStyles from "../Themes/DefaultTheme";

function createData(name, category, compatible, number, version) {
    return { name, category, compatible, number, version };
}

const rows = [
    createData('Apache web server', "web server", 10, 4, 16.0),
    createData('Apache Tomcat', "web server", 8.1, 6, 8.05),
    createData('Nginx', "web server",  8, 12, 14.46),
    createData('Oracle Web Tier', "web server", 10, 3, 21),
    createData('Abyss web server', "web server",  11, 8, 22),
];

const drawerWidth = 300;

const Main = () => {
    const classes = useStyles();

    return(
        <>
            <Header />
            <Menu />
            <Stack direction="row" spacing={"70%"} className={classes.stackStyle}>
                <Button variant="contained">Contained</Button>
                <Typography variant="h5" gutterBottom component="div">
                    h5. Heading
                </Typography>
            </Stack>
            <TableContainer component={Paper}>
                <Table className={classes.tableStyle} aria-label="server table">
                    <TableHead>
                        <TableRow className={classes.rowStyle}>
                            <TableCell>Server Name</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">compatible</TableCell>
                            <TableCell align="right">number</TableCell>
                            <TableCell align="right">version</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.category}</TableCell>
                                <TableCell align="right">{row.compatible}</TableCell>
                                <TableCell align="right">{row.number}</TableCell>
                                <TableCell align="right">{row.version}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Main;
