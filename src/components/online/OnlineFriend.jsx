import React from 'react'
import './onlineFriend.css'
import { useEffect } from "react";
import { getalluserinfo } from "../../actions/userinfo";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function OnlineFriend() {
  const dispatch = useDispatch();
  const alluserinfo = useSelector((state) => state?.userinfo?.alluserinfo);

  useEffect(() => {
    dispatch(getalluserinfo());
  }, [dispatch]);

  const { userinfo, userinfomessage } = useSelector((state) => state?.userinfo);

  const user = JSON.parse(localStorage.getItem("profile"));
  let allIds = userinfo?.data?.userInfor?.followeeId ;
  let allIdes2 = userinfo?.data?.userInfor?.followerId;
  
  allIds = allIds?.concat(allIdes2);

  allIds= allIds?.concat(user?.result?._id);
  
  const myID=user?.result?._id;
  return (


  // <div>
    
  //     {Array.isArray(alluserinfo?.userInfor) && alluserinfo?.userInfor.map((userinfo) => (

        
  //       <li className='rightbarFriend' key={userinfo?._id}>
  //         <div className="rightbarProfileImageCont">
            

            
  //           <Link to={"/chat"}>
  //             <img src={userinfo?.profileImg} alt="" className="rightbarProfileImage" />
  //           </Link>
  //           <span className="rightbarOnline"></span>
  //         </div>
        
  //         <Link to={'/chat'} className="rightbarUsername">
  //           <b >{userinfo?.name}</b>
  //         </Link>
  //       </li>
  //     ))}
  //   </div>
  

<div>
  {/* {Array.isArray(alluserinfo?.userInfor) &&
    alluserinfo?.userInfor.map((userinfo) =>
      userinfo?.creator !== myID ? (
        <li className="rightbarFriend" key={userinfo?._id}>
          <div className="rightbarProfileImageCont">
            <Link to="/chat">
              <img src={userinfo?.profileImg} alt="" className="rightbarProfileImage" />
            </Link>
            {/* <span className="rightbarOnline"></span> */}
          {/* </div>
          <Link to="/chat" className="rightbarUsername">
            <b>{userinfo?.name}</b>
          </Link>
        </li>
      ) : null
    )
  } */} 


{Array.isArray(alluserinfo?.userInfor) && allIds?.length > 0 ? (
    alluserinfo?.userInfor
    .filter((userinfo) => allIds.includes(userinfo?.creator) && userinfo?.creator !== myID)
    .map((userinfo) => (
<div  key={userinfo?._id}>
          {/* <img style={{width:"100%",height:"260px"}} src={userinfo?.profileImg} className="card-img-top" alt="Profile" />
          <div className="card-body">
          <p className="card-text">
             Bio : {userinfo?.bio}
            </p>
            <h3 className="card-text">
             Name : {userinfo?.name}
            </h3>
          </div> */}
          {/* <Button
          style={{marginBottom:"50px"}}
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => handleViewProfile(userinfo?.creator)}
                >
                  View Profile
                </Button> */}


<li className="rightbarFriend" key={userinfo?._id}>
          <div className="rightbarProfileImageCont">
            <Link to="/chat">
              <img src={userinfo?.profileImg} alt="" className="rightbarProfileImage" />
            </Link>
            {/* <span className="rightbarOnline"></span> */}
           </div>
          <Link to="/chat" className="rightbarUsername">
            <b>{userinfo?.name}</b>
          </Link>
        </li>
        </div>
        
      ))
  ) : (
    <p>No friends</p>
  )}

</div>



  
  )
}
