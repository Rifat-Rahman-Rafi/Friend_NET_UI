import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import CardHeader from '@mui/material/CardHeader';

import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TableRow, TableCell, Link } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import Topbar from '../topbar/Topbar'
import Sidebar from '../sidebar/Sidebar';

import { Link as MuiLink } from '@mui/material';
import JobDetail from '../JobDetail/JobDetail';
import Home from '../../pages/home/Home';






const JobDetails = () => {

    
    const { id } = useParams();
    const [jobDetails, setJobDetails] = useState({});
    
    useEffect(() => {
      // Fetch job details based on the id parameter from the URL
      fetch(`http://localhost:7070/allToy/details/${id}`)
        .then((response) => response.json())
        .then((data) => setJobDetails(data))
        .catch((error) => console.error(error));
    }, [id]);


    const text = jobDetails?.companyName?.charAt(0);

    const navigate = useNavigate();

    

  function handleBack() {
    navigate(`/findjobs`);
  }
    return (







<div>

    
  



<Topbar></Topbar>

<div style={{marginTop:"50px"}}>
    
<Box sx={{ width: 1 }}>

<Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
<Box gridColumn="span 2">

<Sidebar></Sidebar>
</Box>

<Box gridColumn="span 10"


>

<div>
      <Card sx={{ width: '1200px', margin: '30px' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {text}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={jobDetails?.jobTitle}
          subheader="September 14, 2016"
        />

        <CardContent>
          <Typography variant="body2">
            About US : {jobDetails?.aboutus}
          </Typography>
        </CardContent>

        <CardContent>
          <Typography paragraph>Meet the hiring team:</Typography>

          <Typography paragraph>Human Resources: {jobDetails?.sellerName}</Typography>
          <Typography paragraph>Email: {jobDetails?.email}</Typography>
          <Typography paragraph>About the job:</Typography>

          <Typography paragraph>
            Job Title: {jobDetails?.jobTitle}
          </Typography>
          <Typography paragraph>
            Company Name: {jobDetails?.companyName}
          </Typography>
          <Typography paragraph>
            Employ Type: {jobDetails?.employType}
          </Typography>
          <Typography paragraph>
            Position Overview: {jobDetails?.positionoverview}
          </Typography>
          <Typography paragraph>
            Key Responsibilities: {jobDetails?.responsibilities}
          </Typography>
          <Typography paragraph>
            Qualifications: {jobDetails?.qualifications}
          </Typography>
          <Typography paragraph>
            What We Offer: {jobDetails?.weoffer}
          </Typography>
          <Typography paragraph>Deadline: {jobDetails?.deadline}</Typography>
          <Typography paragraph>
            Job Location: {jobDetails?.location}
          </Typography>
          <Typography paragraph>Salary: {jobDetails?.salary}</Typography>
          <Typography paragraph>
            How To Apply: {jobDetails?.apply}
          </Typography>
        </CardContent>

        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            type="button"
            onClick={handleBack}
            style={{ margin: '20px', color: 'white', width: '50%' }}
          >
            Previous
          </Button>
        </Box>
      </Card>
    </div>
</Box>

</Box>
</Box>
</div>

</div>
        
    );
};

export default JobDetails;