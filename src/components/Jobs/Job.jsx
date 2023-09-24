
import { useContext } from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Button, useMediaQuery } from '@mui/material';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import Topbar from "../topbar/Topbar";

const Job = () => {


    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
      };
    
      const grey = {
        50: '#f6f8fa',
        100: '#eaeef2',
        200: '#d0d7de',
        300: '#afb8c1',
        400: '#8c959f',
        500: '#6e7781',
        600: '#57606a',
        700: '#424a53',
        800: '#32383f',
        900: '#24292f',
      };
    
      const StyledTextarea = styled(TextareaAutosize)(
        ({ theme }) => `
        width: 320px;
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 12px;
        border-radius: 12px 12px 0 12px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    
        &:hover {
          border-color: ${blue[400]};
        }
    
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
        }
    
         //firefox
        &:focus-visible {
          outline: 0;
        }
      `,
      );


   
    const user = JSON.parse(localStorage.getItem("profile"));



    console.log("user  JOBBB",user.result.name);

   

   const handleSubmit = (event) => {
    event.preventDefault();

    // Access the form data
    const formData = new FormData(event.target);

    // Construct the data object
    const addToys = {
      jobTitle: formData.get("jobTitle"),
      companyName: formData.get("companyName"),
      sellerName: user?.result?.name || "",
      email: user?.result?.email || "",
      location: formData.get("location"),
      employType: formData.get("employType"),
      aboutus: formData.get("aboutus"),
      positionoverview: formData.get("positionoverview"),
      responsibilities: formData.get("responsibilities"),
      qualifications: formData.get("qualifications"),
      weoffer: formData.get("weoffer"),
      deadline: formData.get("deadline"),
      apply: formData.get("apply"),
      salary: formData.get("salary"),
     
    };

        fetch('http://localhost:7070/postallToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log("IIINNNN",data);
                // Swal.fire({
                //     title: 'Successfully Add Toys',
                //     text: 'Do you want to continue',
                //     icon: 'success',
                //     confirmButtonText: 'Cool'
                // })
            })

    }
    return (
        // <div>
        //     <div className="text-center my-8">
        //         <h1 className="text-4xl  text-[#004e96] font-bold">Add Toys</h1>
        //         <p className="py-4">Get peak performance out of your favorite models - Spektrum Smart Technology is <br /> about offering a higher connection to your hobby.</p>
        //     </div>
        //     <div className="w-9/12 mx-auto border-dashed border-2 border-[#004e96] p-10 my-10">
        //         <h1 className="text-center text-3xl my-6 font-semibold text-[#004e96]">Toy Information</h1>
        //         <form onSubmit={handleAddToy}>
        //             <div className="grid grid-cols-1 lg:grid-cols-1 mb-10">
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Photo Url</span>
        //                     </label>
        //                     <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required/>
        //                 </div>

        //             </div>
        //             <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Name</span>
        //                     </label>
        //                     <input type="text" name="name" placeholder="name" className="input input-bordered" required/>
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Seller name</span>
        //                     </label>
        //                     <input type="text" defaultValue={user.result.name} name="sellerName" placeholder="seller name" className="input input-bordered" />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Seller Email</span>
        //                     </label>
        //                     <input type="text" defaultValue={user.result.email} name="sellerEmail" placeholder="seller Email" className="input input-bordered" />
        //                 </div>
        //             </div>
        //             <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Sub-category</span>
        //                     </label>
        //                     <input type="text" name="category" placeholder="sub-category" className="input input-bordered" />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Price</span>
        //                     </label>
        //                     <input type="text" name="price" placeholder="price" className="input input-bordered" required/>
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Rating</span>
        //                     </label>
        //                     <input type="text" name="rating" placeholder="rating" className="input input-bordered" />
        //                 </div>

        //             </div>
        //             <div className="grid grid-cols-1 lg:grid-cols-2 mb-10 gap-10">
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Available quantity</span>
        //                     </label>
        //                     <input type="text" name="quantity" placeholder="available quantity" className="input input-bordered" />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Detail description</span>
        //                     </label>
        //                     <input type="text" name="description" placeholder="detail description" className="input input-bordered" />
        //                 </div>

        //             </div>
        //             <div className="mb-10">
        //                 <input className="btn btn-block bg-[#004e96]" type="submit" value="Add A Toy" />

        //             </div>
        //         </form>
        //     </div>
        // </div>


 <div>

  <Topbar></Topbar>
         <div style={{ display: 'flex', justifyContent: 'center',marginTop:"50px" }}>

<Card sx={{ display: 'flex' }} style={{ marginTop: "50px",marginBottom:"50px",width:"70%" }}>
  
<div>
<h1 style={{textAlign:"center",marginTop:"50px",marginBottom:"50px"}}>Post a job</h1> 
<form onSubmit={handleSubmit} style={{justifyContent:"center"}}>
<Box
  sx={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:"space-around",
    '& .MuiTextField-root': { m: 5, width: 'calc(30% - 16px)' },
  }}
>
  <TextField
  type="text"
    required
   
    label="Job Title"
    name="jobTitle"
    variant="standard"
  />
  <TextField
    required
   
    label="Company Name"
    name="companyName"
    variant="standard"
  />
  <TextField
    required
   
    label="Human Resources:"
    defaultValue={user?.result?.name || ""}
    name="sellerName"
    variant="standard"
  />
  <TextField
    required
   
    label="Email:"
    defaultValue={user?.result?.email || ""}
    name="sellerEmail"
    variant="standard"
  />
  <TextField
    required
    
    label="Location:"
    name="location"
    variant="standard"
  />
  <TextField
    required
    label="Employment Type:"
    name="employType"
    variant="standard"
    placeholder="Full-time/Part-time/Contract"
  />


</Box>


<div
style={{
display: 'flex',
flexWrap: 'wrap',
justifyContent: 'space-around',
}}
>
<StyledTextarea
required
id="standard-required-1"
name="aboutus"
variant="standard"
aria-label="minimum height"
minRows={3}
placeholder="About Us"
style={{
width: '60%', // Full width on mobile
marginBottom: '20px', // Space between fields on mobile
}}
/>
<StyledTextarea
required
id="standard-required-2"
name="positionoverview"
variant="standard"
aria-label="minimum height"
minRows={3}
placeholder="Position Overview"
style={{
width: '60%', // Full width on mobile
marginBottom: '20px', // Space between fields on mobile
}}
/>

<StyledTextarea
required
id="standard-required-2"
name="responsibilities"
variant="standard"
aria-label="minimum height"
minRows={3}
placeholder="Key Responsibilities"
style={{
width: '60%', // Full width on mobile
marginBottom: '20px', // Space between fields on mobile
}}
/>

<StyledTextarea
required
id="standard-required-2"
name="qualifications"
variant="standard"
aria-label="minimum height"
minRows={3}
placeholder="Qualifications"
style={{
width: '60%', // Full width on mobile
marginBottom: '20px', // Space between fields on mobile
}}
/>

<StyledTextarea
required
id="standard-required-2"
name="weoffer"
variant="standard"
aria-label="minimum height"
minRows={3}
placeholder="What We Offer"
style={{
width: '60%', // Full width on mobile
marginBottom: '20px', // Space between fields on mobile
}}
/>

<StyledTextarea
required
id="standard-required-2"
name="apply"
variant="standard"
aria-label="minimum height"
minRows={3}
placeholder="How to Apply"
style={{
width: '60%', // Full width on mobile
}}
/>
</div>

<Box
sx={{
display: 'flex',
flexWrap: 'wrap',
justifyContent: 'space-around',
'& .MuiTextField-root': { m: 5, width: '60%' },
}}
>
<TextField
label="Application Deadline"
required
id="standard-required"
name="deadline"
color="warning"
/>

<TextField
label="Salary Range"
required
id="standard-required"
name="salary"
style={{ marginTop: '20px' }} // Space between fields on mobile
/>
</Box>







<div style={{ display: 'flex', justifyContent: 'center' }}>
<Button type="submit" variant="contained"style={{marginBottom:"35px"}}>
Submit
</Button>
</div>



{/* <button >Submit</button> */}





</form>
</div>
</Card>

</div>
 </div>
    );
};

export default Job;