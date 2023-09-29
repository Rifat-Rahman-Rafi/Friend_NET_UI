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

// import {
//   Container,
  
//   TextField,
  
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

// import FindJobsTable from "./FindJobsTable";
// import { useState } from 'react';


// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));
// const FindJobs = () => {


  
//   const [toys, setToys] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     // Fetch the initial data here when the component mounts
//     fetch("http://localhost:7070/allToy")
//       .then((res) => res.json())
//       .then((data) => setToys(data));
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const searchText = form.search.value;

//     // Fetch data when the search button is clicked
//     fetch(`https://assignment-11-server-n-rifat-rahman-rafi.vercel.app/toySearchBytitle/${searchText}`)
//       .then((res) => res.json())
//       .then((data) => setToys(data));
//   };

//     const [expanded, setExpanded] = React.useState(false);

//     const handleExpandClick = () => {
//       setExpanded(!expanded);
//     };
//     return (
        
//         <div>
//             <Topbar></Topbar>

//             <div>
                
//             <Box sx={{ width: 1 }}>
//       <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
//         <Box gridColumn="span 2">
//           <Sidebar></Sidebar>
//         </Box>
        
//         <Box gridColumn="span 10"
        
        
//       >
       
// <div>

// <h1 style={{marginTop:"80px",textAlign:"center"}}>ALL JOBS</h1>

//     {/* <h1 style={{marginTop:"80px",textAlign:"center"}}>ALL JOBS</h1> */}
// {/* <Card sx={{ maxWidth: "100%",margin:"30px" }} >
            
//             <CardHeader
//               avatar={
//                 <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//                   R
//                 </Avatar>
//               }
//               action={
//                 <IconButton aria-label="settings">
//                   <MoreVertIcon />
//                 </IconButton>
//               }
//               title="Shrimp and Chorizo Paella"
//               subheader="September 14, 2016"
//             />
      
//             <CardContent>
//               <Typography variant="body2" color="text.secondary">
//                 This impressive paella is a perfect party dish and a fun meal to cook
//                 together with your guests. Add 1 cup of frozen peas along with the mussels,
//                 if you like.
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
//                 <Typography paragraph>Method:</Typography>
//                 <Typography paragraph>
//                   Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
//                   aside for 10 minutes.
//                 </Typography>
//                 <Typography paragraph>
//                   Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
//                   medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
//                   occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
//                   large plate and set aside, leaving chicken and chorizo in the pan. Add
//                   pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
//                   stirring often until thickened and fragrant, about 10 minutes. Add
//                   saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//                 </Typography>
//                 <Typography paragraph>
//                   Add rice and stir very gently to distribute. Top with artichokes and
//                   peppers, and cook without stirring, until most of the liquid is absorbed,
//                   15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
//                   mussels, tucking them down into the rice, and cook again without
//                   stirring, until mussels have opened and rice is just tender, 5 to 7
//                   minutes more. (Discard any mussels that don&apos;t open.)
//                 </Typography>
//                 <Typography>
//                   Set aside off of the heat to let rest for 10 minutes, and then serve.
//                 </Typography>
//               </CardContent>
//             </Collapse>
//           </Card> */}

// {/* <TableBody >
//                          {toys.map((toy) => (
//                           <FindJobsTable key={toy._id} toys={toy} />
//                         ))}
//                        </TableBody> */}



// <Container maxWidth="lg">
//       <Paper elevation={3} style={{ padding: "20px" }}>
//         <Typography variant="h4" gutterBottom>
//           All Toys
//         </Typography>
//         <form onSubmit={handleSearch} style={{ display: "flex", alignItems: "center" }}>
//           <TextField name="search" label="Search by name" variant="outlined" fullWidth />
//           <Button variant="contained" color="success" type="submit">
//             <SearchIcon />
//           </Button>
//         </form>
//         <TableContainer component={Paper} style={{ marginTop: "20px" }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Toy Name</TableCell>
//                 <TableCell>Seller</TableCell>
//                 <TableCell>Category</TableCell>
//                 <TableCell align="center">Price</TableCell>
//                 <TableCell>Quantity</TableCell>
//                 <TableCell align="center">Details</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {toys.map((toy) => (
//                 <TableRow key={toy._id}>
//                   <TableCell>{toy.toy_name}</TableCell>
//                   <TableCell>{toy.sellerName}</TableCell>
//                   <TableCell>{toy.category}</TableCell>
//                   <TableCell align="center">${toy.price}</TableCell>
//                   <TableCell>{toy.quantity}</TableCell>
//                   <TableCell align="center">Details</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Paper>
//     </Container>

// </div>
//         </Box>
  
//       </Box>
//     </Box>
//             </div>
    
//         </div>
//     );
// };

// export default FindJobs;





// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

// import FindJobsTable from "./FindJobsTable";

// const FindJobs = () => {
//   const [toys, setToys] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     // Fetch the initial data here when the component mounts
//     fetch("https://assignment-11-server-n-rifat-rahman-rafi.vercel.app/allToy")
//       .then((res) => res.json())
//       .then((data) => setToys(data));
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const searchText = form.search.value;

//     // Fetch data when the search button is clicked
//     fetch(`https://assignment-11-server-n-rifat-rahman-rafi.vercel.app/toySearchBytitle/${searchText}`)
//       .then((res) => res.json())
//       .then((data) => setToys(data));
//   };

//   return (
//     <div>
//       <Container>
//         <section className="antialiased bg-gray-100 text-gray-600 py-10 mb-10 px-4">
//           <div className="flex flex-col justify-center">
//             <Paper elevation={3}>
//               <header className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
//                 <Typography variant="h6" className="font-semibold text-gray-800 w-1/2">
//                   All Toys
//                 </Typography>
//                 <form onSubmit={handleSearch} className="input-group flex justify-end">
//                   <TextField
//                     name="search"
//                     placeholder="Search by name"
//                     variant="outlined"
//                     size="small"
//                     value={searchText}
//                     onChange={(e) => setSearchText(e.target.value)}
//                     InputProps={{
//                       endAdornment: (
//                         <Button type="submit" variant="contained" style={{ background: "#36D399" }}>
//                           <SearchIcon style={{ color: "white" }} />
//                         </Button>
//                       ),
//                     }}
//                   />
//                 </form>
//               </header>
//               <div className="p-3">
//                 <div className="overflow-x-auto">
//                   <TableContainer component={Paper}>
//                     <Table>
//                       <TableHead>
//                         <TableRow>
//                           <TableCell>
//                             <div className="font-semibold text-left">Toy Name</div>
//                           </TableCell>
//                           <TableCell>
//                             <div className="font-semibold text-left">Seller</div>
//                           </TableCell>
//                           <TableCell>
//                             <div className="font-semibold text-left">Category</div>
//                           </TableCell>
//                           <TableCell align="center">
//                             <div className="font-semibold text-center">Price</div>
//                           </TableCell>
//                           <TableCell>
//                             <div className="font-semibold text-left">Quantity</div>
//                           </TableCell>
//                           <TableCell align="center">
//                             <div className="font-semibold text-center">Details</div>
//                           </TableCell>
//                         </TableRow>
//                       </TableHead>
//                       <TableBody>
//                         {toys.map((toy) => (
//                           <FindJobsTable key={toy._id} toys={toy} />
//                         ))}
//                       </TableBody>
//                     </Table>
//                   </TableContainer>
//                 </div>
//               </div>
//             </Paper>
//           </div>
//         </section>
//       </Container>
//     </div>
//   );
// };

// export default FindJobs;








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
    // Fetch the initial data here when the component mounts
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

    <div>
        
    <Box sx={{ width: 1 }}>
<Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
<Box gridColumn="span 2">
  <Sidebar></Sidebar>
</Box>

<Box gridColumn="span 10"


>

<div style={{marginTop:"80px"}}>

{/* <h1 style={{marginTop:"80px",textAlign:"center"}}>ALL JOBS</h1> */}

{/* <h1 style={{marginTop:"80px",textAlign:"center"}}>ALL JOBS</h1> */}
{/* <Card sx={{ maxWidth: "100%",margin:"30px" }} >
    
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />

    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Method:</Typography>
        <Typography paragraph>
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
          aside for 10 minutes.
        </Typography>
        <Typography paragraph>
          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
          medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
          occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
          large plate and set aside, leaving chicken and chorizo in the pan. Add
          pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
          stirring often until thickened and fragrant, about 10 minutes. Add
          saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
        </Typography>
        <Typography paragraph>
          Add rice and stir very gently to distribute. Top with artichokes and
          peppers, and cook without stirring, until most of the liquid is absorbed,
          15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
          mussels, tucking them down into the rice, and cook again without
          stirring, until mussels have opened and rice is just tender, 5 to 7
          minutes more. (Discard any mussels that don&apos;t open.)
        </Typography>
        <Typography>
          Set aside off of the heat to let rest for 10 minutes, and then serve.
        </Typography>
      </CardContent>
    </Collapse>
  </Card> */}

{/* <TableBody >
                 {toys.map((toy) => (
                  <FindJobsTable key={toy._id} toys={toy} />
                ))}
               </TableBody> */}



<Container maxWidth="lg">
      <Paper elevation={3} style={{ padding: "20px" }}>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <Typography variant="h4" gutterBottom>
          All Jobs
        </Typography>
        <form onSubmit={handleSearch} style={{ display: "flex", alignItems: "center" }}>
          <TextField name="search" label="Search by name" variant="outlined" fullWidth />
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
