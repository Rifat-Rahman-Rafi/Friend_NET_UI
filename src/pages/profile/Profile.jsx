import React, { useEffect, useState } from "react";
import "./profile.css";
import Feed from "../../components/feed/Feed";
import Topbar from "../../components/topbar/Topbar";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Users } from "../../dummyData";
import { Link, useNavigate, useParams } from "react-router-dom";
import Spinnerr from "../../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getfollowers, getuserinfo, updateuserinfo } from "../../actions/userinfo";
import { getUserpost } from "../../actions/posts";
import Nfeed from "../../components/nfeed/Nfeed";
import Button from "@mui/material/Button";
import FileBase from "react-file-base64";
import { getalluserinfo } from '../../actions/userinfo'
import Modall from "../../components/modal/modal";

function Profile() {




  const dispatch = useDispatch();
  const { userposts,message } = useSelector((state) => state?.posts);
  const { userinfo, userinfomessage } = useSelector((state) => state?.userinfo);
  
  const user = JSON.parse(localStorage.getItem("profile"));
  const { id } = useParams();

  // const {alluserinfo} = useSelector((state) => state.userinfo);

  const [bio, setBio] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  //  console.log("ALLL USER INFO",alluserinfo)


  const userId = user;


  useEffect(() => {
    if (userinfomessage) {
      dispatch(getuserinfo(id));
    }
    dispatch(getUserpost(id));
  }, [dispatch, message, userinfomessage, id]);
  
  const text = userinfo?.data?.userInfor?.name?.charAt(0);

  const handleFollow = () => {
    dispatch(
      getfollowers({
        follower: user?.result?._id,
        followee: id,
        userInfoid: userinfo?.data?.userInfor?._id,
        follower_name: user?.result?.name,
      })
    );
  };

  

  const [postInfo, setPostinfo] = useState({
    // profileImg: "",
     bio: "",
     creator: "",
    coverImg: "",
    name: userId?.result?.name,
  });

  const [isNewCoverSelected, setIsNewCoverSelected] = useState(false);


  const handleCover = async () => {
    if (isNewCoverSelected) {
      // Set the creator field in postInfo
      setPostinfo({ ...postInfo, creator: id });
  
      try {
       //console.log("sgbhhfgdjhagfjhgff")
        await dispatch(updateuserinfo(postInfo));
      } catch (error) {
        console.error('Error updating user info:', error);
      }
    }
 
    setIsNewCoverSelected(false);
  };
  

  const handleCoverPhotoChange = async (base64) => {
    try {
      // Update the cover image in postInfo immediately
      await setPostinfo({ ...postInfo, coverImg: base64 });
      await dispatch(updateuserinfo(postInfo));
      // Use a callback to set isNewCoverSelected after the state update
      setIsNewCoverSelected(true);
    } catch (error) {
      console.error('Error updating cover image:', error);
    }
  };




  // const toggleEdit = () => {
  //    setPostinfo({ ...postInfo, bio: bio });
  //    dispatch(updateuserinfo(postInfo));
  //   setIsEditing(!isEditing);
  // };


  

  let allIds = userinfo?.data?.userInfor?.followeeId ;
  let allIdes2 = userinfo?.data?.userInfor?.followerId;
  
  allIds = (allIds|| [])?.concat(allIdes2 || []);


// Remove duplicates to get unique values
let uniqueIds = Array.from(new Set(allIds));

console.log("UUnn",uniqueIds);

  //console.log(allIds,"IIIISSS",allIdes2)

 
  const alluserinfo = useSelector((state) => state.userinfo?.alluserinfo);

  useEffect(() => {
    dispatch(getalluserinfo());
  }, [dispatch]);


  console.log("userinfo?.data?.userInfor?.followeeId",allIds)
 

  const navigate = useNavigate();

  console.log("USER",alluserinfo?.userInfor?.creator);

  function handle(creator) {
    navigate(`/profile/${creator}`);
  }


  // console.log(userinfo?.data?.userInfor?.creator,"VVALLA")
    if (!userinfo?.data && userinfo?.data?.userInfor?.creator !== id) {
      return (
      <div>
        <Topbar></Topbar>
         <Spinnerr></Spinnerr>
      </div>
      )
    }

    return (


      <>
      {
        (userinfo?.data?.userInfor?.creator !== id) ? 
          <div>
          {/* <Navbar /> */}
          <Spinnerr />
       </div>
        : 
        <>
        
    <div className="profile">

      
   
      <div className="fbIcon">
        <Link  to="/home" style={{textDecoration:'none'}}>
        {/* <img height='60px' src={"../assets/icon.png"} alt="" /> */}

        <img
      height='55px'
      width='80px'
      style={{ borderRadius: '10%',marginLeft:"5px" }} // Add this line for border radius
      // src="https://i.ibb.co/nrFtYWN/2.jpg"
     // src="https://i.ibb.co/dmnmtgc/121.png"
      //src="https://i.ibb.co/wczK67C/2-removebg-preview.png"
      src="https://i.ibb.co/WgSP3TZ/2-removebg-preview.png"
      alt=""
    />
        </Link>
      </div>
      <div className="profileContainer">
        <div className="profileCenter">
          <div className="profileCenterTop">
         

{/* {id === userId.result?._id && (

      //  <button onChange={handleCover}  className="editCoverPhotoBtn">
             
      //         <div>
      //       <label
      //         className="inputLabel"
      //         style={{
      //           cursor: "pointer",
      //           display: "flex",
      //           alignItems: "center",
      //         }}
      //       >
             
      //        <CameraAltIcon />
      //         <b>Edit <span className="editPicText">Cover Photo</span></b>
      //         <div style={{ display: "none" }}>
      //         <FileBase
      //             type="file"
      //             multiple={false}
      //             onDone={({ base64 }) => handleCoverPhotoChange(base64)}
                  
      //           />
               
                
      //         </div>
      //       </label>
      //     </div>

         
      //       </button> 
 
      )} */}
     
          
            <img
              src={
                isNewCoverSelected
                  ? postInfo?.coverImg
                  : userinfo?.data?.userInfor?.coverImg
              }
              alt="coverphoto"
              className="coverPhoto"
              
            />
          </div>
          <div className="profileCenterDown">
            <div className="profileCenterDownCont">
              <div className="profilePhotoCont">
                <img
                  src={userinfo?.data?.userInfor?.profileImg}
                  alt="profiephoto"
                  className="profilePhoto"
                />

              </div>


              <h4 className="profileUsername">
                {userinfo?.data?.userInfor?.name}{" "}
                <p style={{ fontSize: "16px", margin: "0", opacity: "0.5" }}>
                {/* {userinfo?.data?.userInfor?.followeeId.length + userinfo?.data?.userInfor?.followerId.length} friends */}

                {uniqueIds?.length }

                 friends


                </p>
              </h4>
            </div>
            
          </div>
        </div> 

        <div className="profileBottom">
          <div className="profileBottomLeft">
            <div className="profileUserInfo">
              <h3 style={{ }}>Intro</h3>
              <pre>

              <h2>
        {userinfo?.data?.userInfor?.bio
          ? userinfo?.data?.userInfor?.bio
          : "Enter Your Bio"}
      </h2>

              </pre>
              
           
      {/* <button type="button" className="editBioButton"><b>Edit Bio</b></button>

      <Modall></Modall> */}

      {user?.result?._id === id && (
      <Modall ></Modall>
)}
      




      {user?.result?._id !== id && (
        <div>

          <Button variant="contained"   type="button" onClick={handleFollow} style={{margin: "5px" ,color:"white",width: "75%"}}>
            {userinfo?.data?.userInfor?.followeeId?.includes(user?.result?._id)
              ? "Unfollow"
              : "Follow"}
          </Button>

          
        </div>
      )}
            </div>


            <div className="profileMutualFriendCont">
              <h4
                style={{
                  position: "absolute",
                  top: "-30px",
                  left: "5px",
                  margin: "0",
                }}
              >
                Mutual Friends
              </h4>
              {/* {Users.filter(function (user) {
                return user.id > 1 && user.id <= 7;
              }).map(function (user) {
                return (
                  <div key={user.id} className="mutualFriend">
                    <img
                      className="profileMutualFriendImg"
                      src={user.profilePicture}
                      alt=""
                    />
                    <span className="profileMutualFriendName">
                      {user.username}
                    </span>
                  </div>
                )
              })} */}


  {Array.isArray(alluserinfo?.userInfor) && allIds?.length > 0 ? (
    alluserinfo?.userInfor
      .filter((userinfo) => allIds.includes(userinfo.creator))
      .slice(0, 7) // Only show up to 7 friends
      .map((userinfo) => (

        <div key={userinfo._id} className="mutualFriend" style={{gap:"10px",marginLeft:"12px"}}>
        <img
        onClick={() => handle(userinfo?.creator)}

          className="profileMutualFriendImg"
          src={userinfo?.profileImg}
          alt=""
          
        />
        <span onClick={() => handle(userinfo?.creator)} className="profileMutualFriendName">
        
        {userinfo?.name}
        
      
        </span>
      </div>
        // <li className='rightbarFriend' key={userinfo._id}>
        //   <div className="rightbarProfileImageCont">
        //     <Link to={"/chat"}>
        //       <img src={userinfo?.profileImg} alt="" className="rightbarProfileImage" />
        //     </Link>
        //     <span className="rightbarOnline"></span>
        //   </div>
        //   <Link to={'/chat'} className="rightbarUsername">
        //     <b>{userinfo?.name}</b>
        //   </Link>
        // </li>
      ))
  ) : (
    <p>No friends</p>
  )}



            </div>
          </div>
          <div className="profileBottomRight" style={{marginTop:"60px",marginLeft:"20px",marginRight:"20px"}}>


          {userposts?.data?.PostbyUser?.map((userpost) => (
  <Nfeed key={userpost._id} {...userpost} />
))}


        
          </div>
        </div>
      </div>
    </div>
    </>
            }

            </>
  )
}

export default Profile;
