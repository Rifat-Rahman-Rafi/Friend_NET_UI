
import React, { useState, useEffect } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  IconButton,
  Card,
  CardHeader,
  Avatar,
  CircularProgress,
  Grid,
} from '@mui/material';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';

import { red } from '@mui/material/colors';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MyJobTable from './MyJobTable';
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/Sidebar';

const MyJob = () => {

    const user = JSON.parse(localStorage.getItem("profile"));
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const userEmail = user?.result?.email || ''; // Use the user's email if available
  fetch(`http://localhost:7070/mytoys?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, []);


//   console.log("MY TOYS",toys);
//   toys.forEach((toy) => {
//     console.log(toy.email);
//   });
  

  const handleDeleteToy = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:7070/allToy/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
              const restToys = toys.filter((toy) => toy._id !== _id);
              setToys(restToys);
            }
          });
      }
    });
  };

  const sortByAscending = () => {
    setLoading(true);
    fetch(`http://localhost:7070/mytoys/ascending?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  };

  const sortByDescending = () => {
    setLoading(true);
    fetch(`http://localhost:7070/mytoys/descending?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  };








    return (

   
        <div className="lg:mx-12 my-10">
            
            <Topbar></Topbar>
    <Grid container style={{marginTop:"60px"}}>
  <Grid xs={2}>
    <Sidebar></Sidebar>
  </Grid>
  <Grid xs={10}>
  <div className="text-center" >
        <Typography variant="h4" sx={{ color: '#1976d2', fontWeight: 'bold',textAlign:"center",marginTop:"50px",marginBottom:"50px" }}>
          My Posted Jobs
        </Typography>
      </div>
      <div className="overflow-x-auto w-full text-right ">
        <div className="mb-4 my-10">
        
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* <TableCell></TableCell> */}
                <TableCell align="center">Job Title</TableCell>
                <TableCell align="center">Human Resources</TableCell>
                <TableCell align="center">Company Name</TableCell>
                {/* <TableCell>Email</TableCell> */}
                <TableCell align="center">Salary</TableCell>
                <TableCell align="center">Employ Type</TableCell>
            
                <TableCell align="center">Update button</TableCell>
                <TableCell align="center">Delete button</TableCell>
              </TableRow> 
            </TableHead>
            <TableBody style={{height: "30vh"}}>
  {loading ? (
    <TableRow>
      <TableCell align="center" colSpan={7}> {/* Use colSpan to span all columns */}
        <CircularProgress color="primary" />
      </TableCell>
    </TableRow>
  ) :toys.length === 0 ? (
    <TableRow>
      <TableCell align="center" colSpan={7}>
      You haven't posted any jobs yet.
      </TableCell>
    </TableRow>
  ) : 
   (
    toys.map((toys, index) => (
      <MyJobTable
        key={toys._id}
        toys={toys}
        index={index + 1}
        handleDeleteToy={handleDeleteToy}
      />
    ))
  )}
</TableBody>
          </Table>
        </TableContainer>
      </div>
  </Grid>
  </Grid>
      
    </div>
    );
};

export default MyJob;




