import React from 'react';
import { useEffect } from "react";
import { getalluserinfo } from "../../actions/userinfo";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Button, Grid, Container } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const Friends = () => {

   

    const dispatch = useDispatch();
  const alluserinfo = useSelector((state) => state?.userinfo?.alluserinfo);

  useEffect(() => {
    dispatch(getalluserinfo());
  }, [dispatch]);
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

      <Typography variant="h4" align="center" gutterBottom>
        All Mutual Friends
      </Typography>
      <Grid container spacing={2}>
        {Array.isArray(alluserinfo?.userInfor) && alluserinfo?.userInfor.map((userinfo) => (
          <Grid key={userinfo._id} item xs={12} md={3}>
            <Card >
            <CardMedia
        sx={{ height: 340 }}
        image={userinfo?.profileImg}
       
      />
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

            
            </>


    );
};

export default Friends;