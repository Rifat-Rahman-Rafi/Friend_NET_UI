
// import PermMediaIcon from "@mui/icons-material/PermMedia";
// import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import SellIcon from '@mui/icons-material/Sell';
// import CloseIcon from "@mui/icons-material/Close";
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import './hiddenCreatePost.css';
// import React,{useState,useRef} from 'react'
// import Home from "../home/Home";
// import { useDispatch, useSelector } from "react-redux";
// import { createpost, getposts, getUserpost } from "../../actions/posts";
// export default function CreatePost() {

//   const ref = useRef(null);
//   const [showCreatePost, setShowCreatePost] = useState(false);
//   const changeState = () => {
//     ref.current?.focus();
//     setShowCreatePost(!showCreatePost);
//   }


//   const { userinfo,SetUserinfo} = useSelector((state) => state.userinfo);
//   const dispatch = useDispatch();

//   const user = JSON.parse(localStorage.getItem("profile"));

//   const handlePostClick = () => {
//     const postText = ref.current.value;
//     dispatch(
//       createpost({
//         message: postText,
//         selectedFile: null, // You can add support for files if needed
//         name: user.result.name,
//         creator: user.result._id,
//         profileImg:  userinfo?.data?.userInfor?.profileImg
//       })
//     );

//     // Clear the input field after posting
//     ref.current.value = "";

//     // Close the create post form
//     setShowCreatePost(false);
//   };

//   return (<>

// <Home showCreatePost={showCreatePost} changeState={changeState}/>

//     <div className={showCreatePost ? "showCreatePost" : "hideCreatePost"}>
//     <div className="createPostWrapper">
//       <div className="createPostTop">
//         <h3 className="createPostTitle">Create post</h3>
//         <div className="createPostCloseIconCont">
//           <CloseIcon
//             style={{ fontSize: "26px", opacity: "0.8", cursor: "pointer" }}
//             onClick={changeState}
//           />
//         </div>
//       </div>
//       <hr className="createPostHr" />
//       <div className="createPostCenter">
//         <div className="createPostProfileCont">
//           <img
//             className="createPostProfileImage"
//             src={userinfo?.data?.userInfor?.profileImg}
//             alt=""
//           />
//           <span className="createPostUsername">
//             <b>{user?.result?.name}</b>
//           </span>
//         </div>
//         <div className="createPostInputCont">
//           <input
//             ref={ref}
//             type="text"
//             placeholder={`What's on your mind, ${user?.result?.name?.split(" ")[0]}?`}
//             className="createPostInput"
//           />
//         </div>
//       </div>
//       <div className="createPostOptionsCont">
//         <div className="createPostOption">
//           <span className="createPostOptionTitle"><b>Add <span>to your post</span></b></span>
//           <div className="createPostOptionIcons">
//             <span className="circleCont">
//             <PermMediaIcon
//               style={{ fontSize: "26px"}}
//               htmlColor="green"
//               className="createPostIcon"
//             />
//             </span>
//             <span className="circleCont">
//             <SellIcon
//               style={{ fontSize: "25px" }}
//               htmlColor="blue"
//               className="createPostIcon"
//             /></span>
//              <span className="circleCont">
//                      <EmojiEmotionsIcon
//               style={{ fontSize: "26px" }}
//               htmlColor="orange"
//               className="createPostIcon"
//             /></span>
//              <span className="circleCont">
//             <LocationOnIcon
//               style={{ fontSize: "26px" }}
//               htmlColor="red"
//               className="createPostIcon"
//             /></span>
//              <span className="circleCont">
//             <MoreHorizIcon
//               style={{ fontSize: "26px",opacity:'0.5' }}
//               className="createPostIcon"
//             />
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="createPostButtonCont">
//       <button onClick={handlePostClick} type="button" className="createPostButton"><b>Post</b></button>
//       </div>
//     </div>
//   </div>
//   </>
//   )
// }


import PermMediaIcon from "@mui/icons-material/PermMedia";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SellIcon from '@mui/icons-material/Sell';
import CloseIcon from "@mui/icons-material/Close";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './hiddenCreatePost.css';
import React,{useState,useRef} from 'react'
import Home from "../home/Home";
import FileBase from "react-file-base64";
import {AiFillCamera} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { createpost, getposts, getUserpost } from "../../actions/posts";
import { Alert, Avatar } from "@mui/material";
import Swal from 'sweetalert2';

export default function CreatePost() {


  const [showAlert, setShowAlert] = useState(false);

  const [postData, setPostData] = useState({ message: "", selectedFile: "" });

  const ref = useRef(null);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const changeState = () => {
    ref.current?.focus();
    setShowCreatePost(!showCreatePost);
  }

  const { userinfo, SetUserinfo } = useSelector((state) => state.userinfo);
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));
  
  const handlePostClick = () => {
    const postText = ref?.current?.value;
    const selectedFile = postData?.selectedFile; // Set this value based on file selection logic
    

    if (!postText?.trim() && !selectedFile) {
      // Use SweetAlert2 for the alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter text or select an image before posting.',
      });
      return; // Exit the function if no text or file is provided
    }

    dispatch(
      createpost({
        postDetails: postText,
        selectedFile:selectedFile,
        name: user?.result?.name,
        creator: user?.result?._id,
        profileImg: userinfo?.data?.userInfor?.profileImg
      })
    );

    // Clear the input field after posting
    ref.current.value = "";
    setPostData({ message: "", selectedFile: "" });

    // Close the create post form
    setShowCreatePost(false);


  };


  const text = user?.result?.name.charAt(0);


  return (
    <>
      <Home showCreatePost={showCreatePost} changeState={changeState} />

      <div className={showCreatePost ? "showCreatePost" : "hideCreatePost"}>
        <div className="createPostWrapper">
          <div className="createPostTop">
            <h3 className="createPostTitle">Create post</h3>
            <div className="createPostCloseIconCont">
              <CloseIcon
                style={{ fontSize: "26px", opacity: "0.8", cursor: "pointer" }}
                onClick={changeState}
              />
            </div>
          </div>
          <hr className="createPostHr" />
          <div className="createPostCenter">
            <div className="createPostProfileCont">
          

{userinfo?.data?.userInfor?.profileImg ? (
            <img  className='postProfileImage' src={userinfo?.data?.userInfor?.profileImg} alt="" />
          ) : (

            <Avatar sx={{ bgcolor: 'black', width: 52, height: 52 }}>{text}</Avatar>
            

          )}


              <span className="createPostUsername">
                <b>{user?.result?.name}</b>
              </span>
            </div>
            <div className="createPostInputCont">
              <input
                ref={ref}
                type="text"
                placeholder={`What's on your mind, ${user?.result?.name?.split(" ")[0]}?`}
                className="createPostInput"
               
              />
            </div>
          </div>
          <div className="createPostOptionsCont">
            <div className="createPostOption">
              <span className="createPostOptionTitle"><b>Add <span>to your post</span></b></span>
              <div className="createPostOptionIcons">


              <label className="inputLabel" style={{cursor: "pointer", display: "flex", alignItems:"center"}}>
              <span className="circleCont">
                  <PermMediaIcon
                    style={{ fontSize: "26px" }}
                    htmlColor="green"
                    className="createPostIcon"
                  />


                </span>
            {/* <span>Select Photo</span> */}
         <div style={{display: "none"}}>
         <FileBase 
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
         </div>
          </label>


 




                {/* <span className="circleCont">
                  <PermMediaIcon
                    style={{ fontSize: "26px" }}
                    htmlColor="green"
                    className="createPostIcon"
                  />


                </span> */}



                <span className="circleCont">
                  <SellIcon
                    style={{ fontSize: "25px" }}
                    htmlColor="blue"
                    className="createPostIcon"
                  />
                </span>
                <span className="circleCont">
                  <EmojiEmotionsIcon
                    style={{ fontSize: "26px" }}
                    htmlColor="orange"
                    className="createPostIcon"
                  />
                </span>
                <span className="circleCont">
                  <LocationOnIcon
                    style={{ fontSize: "26px" }}
                    htmlColor="red"
                    className="createPostIcon"
                  />
                </span>
                <span className="circleCont">
                  <MoreHorizIcon
                    style={{ fontSize: "26px", opacity: '0.5' }}
                    className="createPostIcon"
                  />
                </span>
              </div>
            </div>
          </div>
          
          <div className="createPostButtonCont">

            
            <button onClick={handlePostClick} type="button" className="createPostButton"><b>Post</b></button>

          </div>
        </div>
      </div>
    </>
  )
}
