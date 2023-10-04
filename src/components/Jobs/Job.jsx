import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import Topbar from "../topbar/Topbar";
import Swal from 'sweetalert2';


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

   

   const handleSubmit = async (event) => {
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
                Swal.fire({
                    title: 'Successfully Add Jobs',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                event.target.reset();
            })

    }
    return (
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