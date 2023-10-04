import React, { useContext, useState } from 'react';
import {
  TableRow,
  TableCell,
  IconButton,
  Typography,
  Card,
  CardHeader,
  Avatar,
  Button,
  TextField,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';
import { red } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const MyJobTable = ({ toys, handleDeleteToy }) => {
    const user = JSON.parse(localStorage.getItem("profile"));

    //  console.log("NNTTTTT",toys)
    const { _id, sellerName, jobTitle, companyName, email,  salary,  employType,deadline } = toys;
    const [openDialog, setOpenDialog] = useState(false);
    const [priceInput, setPriceInput] = useState(salary);
    const [employTypeInput, setEmployTypeInput] = useState(employType);
    const [jobTitleInput, setJobTitleInput] = useState(jobTitle);
    const [deadlineInput, setDeadlineInput] = useState(deadline);
    const [loading, setLoading] = useState(false);
  
    const handleOpenDialog = () => {
      setPriceInput(salary);
      setEmployTypeInput(employType);
      setJobTitleInput(jobTitle);
      setDeadlineInput(deadline);
      setOpenDialog(true);
    };
  
    const handleCloseDialog = () => {
      setOpenDialog(false);
    };
  
    const handleUpdateToys = () => {
      setLoading(true);
  
      const updateToysInfo = {
        salary: priceInput,
        employType: employTypeInput,
        jobTitle: jobTitleInput,
        deadline:deadlineInput
      };
  
      fetch(`http://localhost:7070/allToy/details/${_id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updateToysInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("UPDATED",data);
          setLoading(false);
          setOpenDialog(false);
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: 'Successfully Updated Toy Information',
              icon: 'success',
              confirmButtonText: 'Cool',
            });
          }
        });
    };
    return (
        <TableRow >
      {/* <TableCell>
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          {toy_name.charAt(0)}
        </Avatar>
      </TableCell> */}
      <TableCell  align="center">
        <Typography variant="body1" fontWeight="bold">
          {jobTitle}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography align="center" variant="body1" fontWeight="bold">
          {sellerName}
        </Typography>
        <Typography align="center" variant="body2" color="textSecondary">
          {email}
        </Typography>
      </TableCell>
      <TableCell align="center">{companyName}</TableCell>
      <TableCell align="center">${salary}</TableCell>
      <TableCell align="center">{employType}</TableCell>
      {/* <TableCell>{quantity}</TableCell>
      <TableCell>{description}</TableCell> */}
      <TableCell align="center">
        <IconButton  color="primary" aria-label="edit" onClick={handleOpenDialog}>
          <EditIcon />
        </IconButton>
        <Dialog  open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
          <DialogTitle>Update Job Information</DialogTitle>
          <DialogContent >
          <TextField
              label="Job Title"
              fullWidth
              multiline
              variant="outlined"
              value={jobTitleInput}
              onChange={(e) => setJobTitleInput(e.target.value)}
              style={{margin:"10px"}}
            />

<TextField
              label="EmployType"
              fullWidth
              variant="outlined"
              value={employTypeInput}
              onChange={(e) => setEmployTypeInput(e.target.value)}
              style={{margin:"10px"}}
            />

            <TextField
              label="Salary"
              fullWidth
              variant="outlined"
              value={priceInput}
              onChange={(e) => setPriceInput(e.target.value)}
              style={{margin:"10px"}}
              
            />
            
            <TextField
              label="Deadline"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              value={deadlineInput}
              onChange={(e) => setDeadlineInput(e.target.value)}
              style={{margin:"10px"}}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleUpdateToys} color="primary" disabled={loading}>
              Update
              {loading && <CircularProgress size={20} sx={{ marginLeft: 1 }} />}
            </Button>
          </DialogActions>
        </Dialog>
      </TableCell>
      <TableCell align="center">
        <IconButton color="error" aria-label="delete" onClick={() => handleDeleteToy(_id)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
   
    );
};

export default MyJobTable;