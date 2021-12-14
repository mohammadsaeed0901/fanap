import React, {ChangeEvent, useState, useRef, useEffect} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import useStyles from "../Styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";


const ServerTable = (props:any) => {
  const classes = useStyles();
  const [name , setName] = useState("");
  const val = useRef<HTMLHeadingElement>(null);

    const changeHandler = (e:any) => {
        setName(e.target.value);
    };

    let filteredRows = props.originalRows.filter((row:any) => {
        return row.name.toLowerCase().includes(name.toLowerCase());
    });

  return (
      <>
        <Stack direction="row" className={classes.stackStyle}>
          <Button variant="contained" className={classes.buttonStyle}>Create New Server</Button>
          <Typography variant="h6" gutterBottom component="div">
            List Of Servers
          </Typography>
        </Stack>
        <TableContainer component={Paper} className={classes.tableStyle}>
          <Stack direction="row"className={classes.optionStyle}>
            <TextField id="outlined-basic" label="Server Name" variant="outlined" ref={val} onChange={changeHandler}/>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={props.serverFilter}
                className={classes.acompleteStyle}
                renderInput={(params) => (
                    <TextField {...params} label="Server Filter" />
                )}
            />
          </Stack>
          <Table aria-label="server table">
            <TableHead>
              <TableRow>
                <TableCell>Server Name</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Compatible</TableCell>
                <TableCell align="right">Number</TableCell>
                <TableCell align="right">Version</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row:any) => (
                  <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
        <Stack spacing={1} className={classes.paginationStyle}>
          <Pagination count={3} color="primary" shape="rounded" size="small"
                      renderItem={(item) => (
                          <PaginationItem components={{ previous: ArrowForwardIosIcon , next: ArrowBackIosNewIcon}}
                                          {...item}
                          />
                      )}/>
        </Stack>
      </>
  );
};

export default ServerTable;
