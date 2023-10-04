

import React, { useEffect, useState } from "react";
import { Container, Typography, Paper, TextField, Button, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/Sidebar';
import { Box } from '@mui/material';
import FindJobsTable from "./FindJobsTable";

const FindJobs = () => {
  
  const [toys, setToys] = useState([]);

  

    useEffect(() => {
    fetch("http://localhost:7070/allToy")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchText = form.search.value;

    console.log(searchText);
    fetch(`http://localhost:7070/toySearchBytitle/${searchText}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (


    <div>
    <Topbar></Topbar>

    <div style={{marginTop:"60px"}}>
        
    <Box sx={{ width: 1 }}>
<Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
<Box gridColumn="span 2">
  <Sidebar></Sidebar>
</Box>

<Box gridColumn="span 10"


>

<div style={{marginTop:"60px"}}>



<Container maxWidth="lg">
      <Paper elevation={3} style={{ padding: "20px" }}>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <Typography variant="h4" gutterBottom>
          All Jobs
        </Typography>
        <form onSubmit={handleSearch} style={{ display: "flex", alignItems: "center" }}>
          <TextField name="search" label="Search by Jobs Title" variant="outlined" fullWidth />
          <Button variant="contained"  type="submit" style={{height:"55px"}}>
            
            <SearchIcon />
          </Button>
        </form>
      </div>
        <TableContainer component={Paper} style={{ marginTop: "20px" }}>
          <Table>
            <TableHead>
              <TableRow >
                <TableCell >Job Title</TableCell>
                <TableCell align="center">Human Resources</TableCell>
                <TableCell align="center">Company Name</TableCell>
                <TableCell align="center">Salary</TableCell>
                <TableCell align="center">Employ Type</TableCell>
                <TableCell align="center">Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {toys.map((toy) => (
                <FindJobsTable key={toy._id} toys={toy} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>

</div>
</Box>

</Box>
</Box>
    </div>

</div>
   
  );
};

export default FindJobs;
