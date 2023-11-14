import React from 'react';
import { useEffect } from "react";
import { getalluserinfo, getfollowers, getuserinfo } from "../../actions/userinfo";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
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

  const { userinfo, userinfomessage } = useSelector((state) => state?.userinfo);


  const user = JSON.parse(localStorage.getItem("profile"));

  const handleViewProfile = (creatorId) => {
    
    navigate(`/profile/${creatorId}`); 
  };

  
  const { id } = useParams();

  let allIds = userinfo?.data?.userInfor?.followeeId ;
  let allIdes2 = userinfo?.data?.userInfor?.followerId;
  
  allIds = allIds?.concat(allIdes2);

  allIds= allIds?.concat(user?.result?._id);

  const myID=user?.result?._id;


  //console.log("user?.result?._id",user?.result?._id)



  const handleFollow = (creatorId) => {
    navigate(`/profile/${creatorId}`); 
    dispatch(
      getfollowers({
        follower: user?.result?._id,
        followee: id,
        userInfoid: userinfo?.data?.userInfor?._id,
        follower_name: user?.result?.name,
      })
    );
  };

  console.log("SHSJS",allIds?.length,alluserinfo?.userInfor?.length)

  
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


<Topbar></Topbar>
<div style={{display:"flex",marginTop:"60px"}}>
   <div style={{width:"15%"}}> <Sidebar></Sidebar></div>
<Container style={{justifyContent:"center"}}>
{
    allIds?.length!="1"?
    <h1 style={{textAlign:"center",marginTop:"30px",marginBottom:"50px"}}>ALL Mutual Friends</h1>:<></>
 }
   
  <div className="card-container">

  {Array.isArray(alluserinfo?.userInfor) && allIds?.length > 0 ? (
    alluserinfo?.userInfor
    .filter((userinfo) => allIds.includes(userinfo?.creator) && userinfo?.creator !== myID)
    .map((userinfo) => (
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
                  onClick={() => handleViewProfile(userinfo?.creator)}
                >
                  View Profile
                </Button>
        </div>
        
      ))
  ) : (
    <p>No friends</p>
  )}



    {/* {Array.isArray(alluserinfo?.userInfor) &&
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
                  onClick={() => handleViewProfile(userinfo?.creator)}
                >
                  View Profile
                </Button>
        </div>
      ))} */}
  </div>

 {
    allIds?.length<=alluserinfo?.userInfor?.length?
    <h1 style={{textAlign:"center",marginTop:"30px",marginBottom:"50px"}}>Follow Users</h1>:<></>
 }

  <div className="card-container">


  {Array.isArray(alluserinfo?.userInfor) && allIds?.length > 0 ? (
  alluserinfo?.userInfor
    .filter((userinfo) =>!allIds.includes(userinfo?.creator))
    .map((userinfo) => (
      <div className="card" key={userinfo?._id}>
        <img style={{ width: "100%", height: "260px" }} src={userinfo?.profileImg} className="card-img-top" alt="Profile" />
        <div className="card-body">
          <p className="card-text">Bio: {userinfo?.bio}</p>
          <h3 className="card-text">Name: {userinfo?.name}</h3>
        </div>
        <Button variant="contained"  type="button"  onClick={() => handleViewProfile(userinfo?.creator)} style={{margin: "5px" ,color:"white",width: "100%"}}>
            {userinfo?.data?.userInfor?.followeeId?.includes(user?.result?._id)
              ? "Unfollow"
              : "VIEW PROFILE"}
          </Button>


        
      </div>
    ))
) : (
  <p>No friends</p>
)}


</div>




  </Container>
</div>









            </>


    );
};

export default Friends;