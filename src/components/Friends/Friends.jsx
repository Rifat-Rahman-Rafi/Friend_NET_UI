import React from 'react';
import { useEffect } from "react";
import { getalluserinfo } from "../../actions/userinfo";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Button, Grid, Container } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import './Friends.css'
import Topbar from '../topbar/Topbar';
import Sidebar from '../sidebar/Sidebar';
const Friends = () => {

   

    const dispatch = useDispatch();
  const alluserinfo = useSelector((state) => state?.userinfo?.alluserinfo);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getalluserinfo());
  }, [dispatch]);

  function handle() {
    navigate(`/profile/${alluserinfo?.creator}`);
  }

  console.log(alluserinfo.creator,"HELLOggggg")
  
    return (
        <>
        {/* <div>

            {Array.isArray(alluserinfo?.userInfor) && alluserinfo?.userInfor.map((userinfo) => (
                <li className='rightbarFriend' key={userinfo._id}>
                    <div className="rightbarProfileImageCont">



                        <Link to={"/chat"}>
                            <img src={userinfo?.profileImg} alt="" className="rightbarProfileImage" />
                        </Link>
                        <span className="rightbarOnline"></span>
                    </div>

                    <Link to={'/chat'} className="rightbarUsername">
                        <b>{userinfo?.name}</b>
                    </Link>
                </li>
            ))}
        </div> */}

{/* 
        <Container>

      <Typography variant="h4" align="center" gutterBottom>
        All Mutual Friends
      </Typography>
      <Grid container spacing={2}>
        {Array.isArray(alluserinfo?.userInfor) && alluserinfo?.userInfor.map((userinfo) => (
          <Grid key={userinfo._id} item xs={12} md={4}>
            <Card>
            <Container style={{ height: "350px" }}>
  <CardMedia
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover", 
      marginTop: "20px",
    }}
    image={userinfo?.profileImg}
    title="green iguana"
  />
</Container>

              <CardContent>
                <Typography variant="h5" component="div">
                  {userinfo?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {userinfo?.bio || 'No bio available'}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                //   onClick={() => handleBuyNow(userinfo?.name)}
                >
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      </Container> */}

<Topbar></Topbar>
<div style={{display:"flex",marginTop:"60px"}}>
   <div> <Sidebar></Sidebar></div>
<Container style={{justifyContent:"center"}}>
    <h1 style={{textAlign:"center",marginTop:"30px",marginBottom:"50px"}}>ALL Mutual Friends</h1>
  <div className="card-container">
    {Array.isArray(alluserinfo?.userInfor) &&
      alluserinfo?.userInfor.map((userinfo) => (
        <div className="card" key={userinfo?._id}>
          <img style={{width:"100%",height:"260px"}} src={userinfo?.profileImg} className="card-img-top" alt="Profile" />
          <div className="card-body">
          <p className="card-text">
             Bio : {userinfo?.bio}
            </p>
            <h3 className="card-text">
             Name : {userinfo?.name}
            </h3>
          </div>
          <Button
          style={{marginBottom:"50px"}}
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handle}
                >
                  View Profile
                </Button>
        </div>
      ))}
  </div>
  </Container>
</div>




            </>


    );
};

export default Friends;