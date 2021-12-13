import React from "react";
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



const ServerTable = (props:any) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableStyle}>
      <Stack direction="row" spacing={3} className={classes.optionStyle}>
        <TextField id="outlined-basic" label="Server Name" variant="outlined" />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={props.serverFilter}
          sx={{ width: 250, display: "inline-block" }}
          renderInput={(params) => (
            <TextField {...params} label="Server Filter" />
          )}
        />
      </Stack>
      <Table aria-label="server table">
        <TableHead>
          <TableRow className={classes.headStyle}>
            <TableCell>Server Name</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Compatible</TableCell>
            <TableCell align="right">Number</TableCell>
            <TableCell align="right">Version</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row:any) => (
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
  );
};

export default ServerTable;
