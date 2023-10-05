import React from 'react';
import Topbar from '../topbar/Topbar';
import Img from'../../assets/pageNotFound.jpg'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
    const navigate = useNavigate();
    function handleBack() {
      navigate(`/home`);
    }
    return (
        <div>
        {/* <Topbar></Topbar> */}
    <div style={{display:"flex",justifyContent:"center"}}>
       <img src={Img} alt="images-1" border="0" style={{width:"50%",height:"500px"}}/>
     
     
    </div>
    <div style={{display:"flex",justifyContent:"center"}}>
    <Button
            variant="contained"
            type="button"
             onClick={handleBack}
            style={{ margin: '20px', color: 'white', width: '20%' }}
          >
            Go Home
          </Button>
    </div>
    </div>
    );
};

export default NotFound;