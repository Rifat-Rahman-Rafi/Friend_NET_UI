import React, { useEffect, useState } from "react";
import "./profile.css";
import Feed from "../../components/feed/Feed";
import Topbar from "../../components/topbar/Topbar";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Users } from "../../dummyData";
import { Link, useParams } from "react-router-dom";
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
  const { userposts,message } = useSelector((state) => state.posts);
  const { userinfo, userinfomessage } = useSelector((state) => state.userinfo);
  console.log(userinfomessage, userinfo)
  const user = JSON.parse(localStorage.getItem("profile"));
  const { id } = useParams();

  const {alluserinfo} = useSelector((state) => state.userinfo);

  const [bio, setBio] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  console.log("ALLL USER INFO",alluserinfo)


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




	// const [users, setUsers] = useState([])

  // useEffect(() => {
	// 	const fetchUsers = async () => {
	// 		const res = await fetch(`http://localhost:8000/api/users/${user?.id}`, {
	// 			method: 'GET',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			}
	// 		});
	// 		const resData = await res.json()
	// 		setUsers(resData)
	// 	}
	// 	fetchUsers()
	// }, [])

  // const nid='650c541befd94c45777c2e98';
  // useEffect(() => {
	// 	const fetchUsers = async () => {
	// 		const res = await fetch(`http://localhost:8000/api/users/${nid}`, {
	// 			method: 'GET',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			}
	// 		});
	// 		const resData = await res.json()

  //     console.log("NEW MESSAMNHEG",resData)
	// 		setUsers(resData)
	// 	}
	// 	fetchUsers()
	// }, [])
  

  const allIds = userinfo?.data?.userInfor.followerId;
  
  const [users, setUsers] = useState([]);


  useEffect(() => {
    if (allIds && allIds.length > 0) {
      // Convert the array of IDs to a comma-separated string
      const userIdsString = allIds.join(',');

      //console.log("userIdsString",userIdsString)

      // Make a GET request to fetch user data
      fetch(`/getUsersByIds?userIds=${userIdsString}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data.users) {
            setUsers(data.users);
          } else {
            console.error('No users data found in the response:', data);
          }
        })
        .catch((error) => {
          console.error('Fetch error:', error);
        });
    }
  }, [allIds]);

 
  



console.log("UUUSUSUSSHHH",users)








  















  console.log("userinfo?.data?.userInfor?.followerId",allIds
  )


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
        <img height='60px' src={"../assets/icon.png"} alt="" />
        </Link>
      </div>
      <div className="profileContainer">
        <div className="profileCenter">
          <div className="profileCenterTop">
         

{id === userId.result?._id && (

       <button onChange={handleCover}  className="editCoverPhotoBtn">
             
              <div>
            <label
              className="inputLabel"
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
             
             <CameraAltIcon />
              <b>Edit <span className="editPicText">Cover Photo</span></b>
              <div style={{ display: "none" }}>
              <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => handleCoverPhotoChange(base64)}
                  
                />
               
                
              </div>
            </label>
          </div>

         
            </button> 
 
      )}
     
          
            <img
              src={
                isNewCoverSelected
                  ? postInfo.coverImg
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
                {userinfo?.data?.userInfor?.followeeId.length + userinfo?.data?.userInfor?.followerId.length} friends

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
              {Users.filter(function (user) {
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
              })}
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
