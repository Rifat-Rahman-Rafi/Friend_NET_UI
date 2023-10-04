
// import { useContext } from "react";
// import { Link } from "react-router-dom";


// const FindJobsTable = ({ toys }) => {
//     // const { user } = useContext(AuthContext);

//     return (
//         <>
//             <tr>
//                 <td className="p-2 whitespace-nowrap">
//                     <div className="md:flex items-center">
//                         <img src={toys?.img} className="w-40 rounded-md mr-4" alt="" />
//                         <div className="text-left font-bold">{toys?.toyName}</div>

//                     </div>
//                 </td>
//                 <td className="p-2 whitespace-nowrap">
//                     <div className="font-medium text-gray-800">{toys?.sellerName}</div>
//                 </td>
//                 <td className="p-2 whitespace-nowrap">
//                     <div className="text-left font-medium text-gray-700">{toys?.category}</div>
//                 </td>
//                 <td className="p-2 whitespace-nowrap">
//                     <div className="text-sm text-center">${toys?.price}</div>
//                 </td>
//                 <td className="p-2 whitespace-nowrap">
//                     <div className="text-left text-sm text-green-500">{toys?.quantity}
//                     </div>
//                 </td>
//                 <td className="p-2 whitespace-nowrap text-center">
//                     {/* {user ? */}
//                         <Link style={{background:"#36D399",color:"white"}} to={`/toydetails/${toys?._id}`} className="btn ">Details</Link> : <Link style={{background:"#36D399",color:"white"}}  to={`/login`} className="btn ">Details</Link>
//                     {/* } */}
//                 </td>
//             </tr>
//         </>
//     );
// };

// export default FindJobsTable;




// import React, { useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Topbar from '../topbar/Topbar';
// import Sidebar from '../sidebar/Sidebar';
// import { Box } from '@mui/material';
// import { styled } from '@mui/material/styles';

// import CardHeader from '@mui/material/CardHeader';

// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';

// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { TableRow, TableCell, Link } from "@mui/material";





// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
//   })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   }));

  
// const FindJobsTable = ({ toys }) => {

    

//     const [expanded, setExpanded] = React.useState(false);

//     const handleExpandClick = () => {
//       setExpanded(!expanded);
//     };

//   return (
     
    
//     <div style={{ display: "flex", justifyContent: "center" }}>

// <tr>
//                 <td className="p-2 whitespace-nowrap">
//                      <div className="md:flex items-center">
//                          <img src={toys?.img} className="w-40 rounded-md mr-4" alt="" />
//                          <div className="text-left font-bold">{toys?.toy_name}</div>

//                      </div>
//                  </td>
//                  <td className="p-2 whitespace-nowrap">
//                      <div className="font-medium text-gray-800">{toys?.sellerName}</div>
//                  </td>
//                  <td className="p-2 whitespace-nowrap">
//                     <div className="text-left font-medium text-gray-700">{toys?.category}</div>
//                  </td>                 <td className="p-2 whitespace-nowrap">
//                      <div className="text-sm text-center">${toys?.price}</div>
//                  </td>
//                  <td className="p-2 whitespace-nowrap">
//                      <div className="text-left text-sm text-green-500">{toys?.quantity}
//                      </div>
//                  </td>
//                  <td className="p-2 whitespace-nowrap text-center">
//                      {/* {user ?
// //                         <Link style={{background:"#36D399",color:"white"}} to={`/toydetails/${toys?._id}`} className="btn ">Details</Link> : <Link style={{background:"#36D399",color:"white"}}  to={`/login`} className="btn ">Details</Link>
// //                     } */}
//                  </td>
//              </tr>

//     {/* <h1 style={{marginTop:"80px",textAlign:"center"}}>ALL JOBS</h1> */}
// {/* <Card sx={{ width: "1200px",margin:"30px" }} >
            
//             <CardHeader
//               avatar={
//                 <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//                   {toys.companyName}
//                 </Avatar>
//               }
//               action={
//                 <IconButton aria-label="settings">
//                   <MoreVertIcon />
//                 </IconButton>
//               }
//               title={toys.jobTitle}
//               subheader="September 14, 2016"
//             />
      
//             <CardContent>
//               <Typography variant="body2" color="text.secondary">
//                About US : {toys.aboutus}
//               </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//               <IconButton aria-label="add to favorites">
//                 <FavoriteIcon />
//               </IconButton>
//               <IconButton aria-label="share">
//                 <ShareIcon />
//               </IconButton>
//               <ExpandMore
//                 expand={expanded}
//                 onClick={handleExpandClick}
//                 aria-expanded={expanded}
//                 aria-label="show more"
//               >
//                 <ExpandMoreIcon />
//               </ExpandMore>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//               <CardContent>
//                 <Typography paragraph>Meet the hiring team :</Typography>

//                 <Typography paragraph>Human Resources : {toys.sellerName}</Typography>
//                 <Typography paragraph>Email : {toys.email}</Typography>
//                 <Typography paragraph>About the job : </Typography>
                
//                 <Typography paragraph>
                
//                  Job Title : {toys.jobTitle}
//                 </Typography>
//                 <Typography paragraph>Company Name : {toys.companyName} </Typography>
//                 <Typography paragraph>Employ Type : {toys.employType} </Typography>
//                 <Typography paragraph>
//                 Position Over View : {toys.positionoverview}
//                 </Typography>
//                 <Typography paragraph>
//                   Key Responsibilities : {toys.responsibilities}
//                 </Typography >
//                 <Typography paragraph>
//                 Qualifications : {toys.qualifications}
//                 </Typography>
//                 <Typography paragraph>
//                 What We Offer : {toys.weoffer}
//                 </Typography>
//                 <Typography paragraph>
//                 Deadline : {toys.deadline}
//                 </Typography>
//                 <Typography paragraph>
//                 Job Location : {toys.location}
//                 </Typography> 
//                 <Typography paragraph>
//                 Salary : {toys.salary}
//                 </Typography>
//                 <Typography paragraph>
//                 How To Apply : {toys.apply}
//                 </Typography>
//               </CardContent>
//             </Collapse>
//           </Card> */}
// </div>
//   );
// };

// export default FindJobsTable;





















import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { TableRow, TableCell, Button, Typography } from "@mui/material";

const FindJobsTable = ({ toys }) => {

    console.log("tots",toys);
    const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <TableRow>
      <TableCell>
        <div style={{ display: "flex", alignItems: "center" }}>


               <Typography variant="body1" style={{ fontWeight: "bold",textAlign: "center" }}>
               {toys.jobTitle}
          </Typography>
           
          {/* <img src={toys?.img} alt="" style={{ width: "40px", borderRadius: "4px", marginRight: "4px" }} /> */}
          
        </div>
      </TableCell>
      <TableCell>
        <Typography variant="subtitle1" style={{ fontWeight: "medium", color: "#333",textAlign: "center" }}>
          {toys?.sellerName}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="subtitle1" style={{ fontWeight: "medium", color: "#777",textAlign: "center" }}>
        {toys.companyName}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="body2" style={{ textAlign: "center" }}>
          ${toys.salary}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="subtitle2" style={{ color: "green",textAlign: "center" }}>
          {toys?.employType}
        </Typography>
      </TableCell>
      <TableCell align="center">
        {user ? (
          <Link to={`/jobDetail/${toys?._id}`}>
            <Button variant="contained" style={{  color: "white" }}>
              Details
            </Button>
          </Link>
        ) : (
          <Link to={`/login`}>
            <Button variant="contained" style={{  color: "white" }}>
              Details
            </Button>
          </Link>
        )}
      </TableCell>
    </TableRow>
  );
};

export default FindJobsTable;
