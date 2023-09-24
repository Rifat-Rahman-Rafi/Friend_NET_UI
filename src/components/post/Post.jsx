// import React,{useEffect, useState} from 'react'
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './post.css'
import { Users } from "../../dummyData";
// import axios from 'axios';
// import {format} from "timeago.js"
import { commentforpost, deletecomment, likepost } from '../../actions/posts';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import {Button} from "react-bootstrap"
import {   InputBase } from '@mui/material';
import {  Send } from '@mui/icons-material';
export default function Post({post}) {

  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();
  const dispatch = useDispatch();


const [isLiked, setIsLiked] = useState(post.likes?.includes(user?.result?._id));
  const [likes, setLikes] = useState(post.likes?.length || 0);


  function handle() {
    navigate(`/profile/${post.creator}`);
  }


  const likeHandler = async () => {
    try {
      if (isLiked) {
        setLikes(likes - 1);
      } else {
        setLikes(likes + 1);
      }

      setIsLiked(!isLiked);

      await dispatch(likepost({ id: post._id, userId: user?.result?._id, setMessage: post.setMessage, name: post.name, creator: post.creator }));
    } catch (error) {
      console.error(error);
    }
  };

//   

//   const dateStr = formattedDate;
//   const currentDate = new Date();
//   const targetDate = new Date(dateStr);
  
//   const timeDifferenceMs = currentDate - targetDate;

//   const daysDifference = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24));

//    console.log(`${daysDifference} days ago`);

//    const hoursDifference = Math.floor(timeDifferenceMs / (1000 * 60 * 60));
// const minutesDifference = Math.floor(timeDifferenceMs / (1000 * 60));
// const secondsDifference = Math.floor(timeDifferenceMs / 1000);

// let timeAgo = '';

// if (daysDifference > 0) {
//   timeAgo = `${daysDifference} day${daysDifference === 1 ? '' : 's'} ago`;
// } else if (hoursDifference > 0) {
//   timeAgo = `${hoursDifference} hour${hoursDifference === 1 ? '' : 's'} ago`;
// } else const ate =  new Date(post.createdAt)

//   const postDate = new Date(post.createdAt);
// postDate.setHours(postDate.getHours() +12);

//   const formattedDate = format(new Date(postDate), 'yyyy-MM-dd HH:mm:ss');if (minutesDifference > 0) {
//   timeAgo = `${minutesDifference} minute${minutesDifference === 1 ? '' : 's'} ago`;
// } else {
//   timeAgo = `${secondsDifference} second${secondsDifference === 1 ? '' : 's'} ago`;
// }

// Get the current UTC time
// const currentUtcTime = new Date();

// Calculate the time in Bangladesh by adding the UTC offset
// const utcOffset = 12 * 60 * 60 * 1000; // 6 hours in milliseconds
// const currentBangladeshTime = new Date(currentUtcTime.getTime() + utcOffset);

// Format the current Bangladesh time as a string (you can adjust the format as needed)
// const formattedTime = currentBangladeshTime.toLocaleTimeString('en-US', {
//   hour12: true,
//   hour: 'numeric',
//   minute: 'numeric',
//   second: 'numeric',
// });

// console.log('Current time in Bangladesh:', formattedTime);


//  console.log(formattedTime);

// console.log("POST.CREA NEWWW",post.createdAt);

     


  

  //console.log(post);

  // useEffect(()=>{
  //   const fetchUser = async()=>{
  //     const res = await axios.get(`users/${post.userId}`)
  //     setUser(res.data)
  //   }
  //   fetchUser();
  // },[post.userId]);


  const text = post.name?.charAt(0);

  const newarr = post.comments?.map((val, i) => val.split(":"))

  const [show, setShow] = useState(false);
  const commenthandle = () => {
    setShow((e) => !e);
  };

  
  const [comment, setComment] = useState("");
  const commentFunc = () => {
    dispatch(commentforpost({ comment, name: user?.result?.name, id: post._id, setMessage: post.setMessage }));
    setComment("")
  };

  const test = JSON.parse(localStorage.getItem("profile"));
  const _id = test.result._id;


  console.log("TEST",test);


  const commentDelete = () => {
    dispatch(deletecomment(_id)); // Pass the _id here
    window.alert('Item successfully deleted');
  }
  






  function formatRelativeTime(timestamp) {
    const currentTimestamp = new Date().getTime();
    const timestampDate = new Date(timestamp);
  
    const timeDifference =  currentTimestamp - timestampDate.getTime();
    const secondsDifference = Math.floor(timeDifference / 1000);

    
    
    console.log("secondsDifference",secondsDifference ,timeDifference)
  
    if (secondsDifference < 60 ) {
      if (secondsDifference <= 1) {
        return "just now";
      } else {
        return `${secondsDifference} seconds ago`;
      }
    } else {
      const minutesDifference = Math.floor(secondsDifference / 60);
  
      if (minutesDifference < 60) {
        return minutesDifference === 1 ? "1 minute ago" : `${minutesDifference} minutes ago`;
      } else {
        const hoursDifference = Math.floor(minutesDifference / 60);
  
        if (hoursDifference < 24) {
          return hoursDifference === 1 ? "1 hour ago" : `${hoursDifference} hours ago`;
        } else {
          const daysDifference = Math.floor(hoursDifference / 24);
  
          if (daysDifference < 7) {
            return daysDifference === 1 ? "1 day ago" : `${daysDifference} days ago`;
          } else {
            const weeksDifference = Math.floor(daysDifference / 7);
  
            if (weeksDifference < 4) {
              return weeksDifference === 1 ? "1 week ago" : `${weeksDifference} weeks ago`;
            } else {
              const monthsDifference = Math.floor(daysDifference / 30);
  
              if (monthsDifference < 12) {
                return monthsDifference === 1 ? "1 month ago" : `${monthsDifference} months ago`;
              } else {
                const yearsDifference = Math.floor(daysDifference / 365);
                return yearsDifference === 1 ? "1 year ago" : `${yearsDifference} years ago`;
              }
            }
          }
        }
      }
    }
  }
  
  const timestamp = post.createdAt; // Replace with your timestamp
  const relativeTime = formatRelativeTime(new Date(timestamp));
  
  console.log(relativeTime); // Output will be a relative time string
   // Output will be a relative time string
  

 
  return (
   <div className="post">
    {/* <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImage' src={user.profilePicture || PF+"/person/noAvatar.png"} alt="" />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>

          <div className="postTopRight">
               <MoreVertIcon style={{ cursor:'pointer'}}/>
          </div>
          </div>

      <div className="postCenter">
        <span className="postText">{post.desc}</span>
        <img className='postImage' src={PF+"/post/"+post.img} alt="" />
      </div>
      <div className="postBottom">
          <div className="postBottomLeft">
            <div style={{display:'flex'}}>
            <div className="likeIconCont">
            <img className='likeIcon' onClick={likeHandler} src={PF+"like.png"} alt="" />
            </div>
            <div className="likeIconCont">
            <img className='likeIcon' onClick={likeHandler}src={PF+"heart.png"} alt="" />
              </div>
            </div>
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
           <span className="postCommentText">{post.comment} comments</span>
          </div>
          </div>
        </div> */}
    <div className="postWrapper">
    <div className="postTop">
      <div className="postTopLeft">

      {post.profileImg ? (
            <img onClick={handle} className='postProfileImage' src={post.profileImg} alt="" />
          ) : (

            <Avatar sx={{ bgcolor: 'black', width: 52, height: 52 }}>{text}</Avatar>
            // <div  className="dummy">{text}</div>

            
          )}
        <span onClick={handle} className="postUsername">{post.name}</span>

        <span  className="postDate">{relativeTime}</span>
      </div>
      

      <div className="postTopRight">
      
           <MoreVertIcon style={{ cursor:'pointer'}}/>
      </div>
      </div>

  <div className="postCenter">
  {post.postDetails &&(
           <span className="postText">{post.postDetails}</span>
    )}


    {post.selectedFile &&(
       <img className='postImage' src={post.selectedFile} alt="" />
    )}
   
  </div>
  <div className="postBottom">
  <div className="postBottomLeft">
        <div style={{ display: 'flex' }}>
          <div className="likeIconCont">
            <img className='likeIcon' onClick={likeHandler} src="../assets/like.png" alt="Like" />
          </div>
          <div className="likeIconCont">
            <img className='likeIcon' onClick={likeHandler} src="../assets/heart.png" alt="Heart" />
          </div>
        </div>

        {isLiked ? (
          <span>{likes === 1 ? "You" : ` You and ${likes - 1} other`}</span>
        ) : (
          <span>{likes} likes</span>
        )}
      </div>
      <div className="postBottomRight">
      {newarr.length > 0 ? (
    <span className="postCommentText" onClick={commenthandle}>
      {newarr.length} comments
    </span>
  ) :  <span className="postCommentText" onClick={commenthandle}>
   comments
</span>}
      </div>

   

      </div>
      

      {show && (

<div >
<hr className="sidebarHr" />
{newarr?.map((val, i) => (
  <div key={i} className="comment-item" style={{marginLeft:"10px"}}>
    <span className="comment-user">{val[0]}:</span>
    <span className="comment-text">{val[1]}</span>
    {/* <Button onClick={commentDelete}>DELETE</Button> */}
  </div>
))}


{/* <div className="comments">
           <div className="comment-list">
       
          </div>
          <h5 className="comments-title">All Comments</h5> 
          <div className="comment-input">
            <input
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              placeholder="Post Comment"
              className="comment-input-field"
            />
            <button className="comment-button" onClick={commentFunc}>
              Comment
            </button>
          </div> 
         
       </div> */}


        
        <div style={{ position: 'relative', width: '95%',}}>
  <InputBase
    placeholder="Write a Comment..."
    value={comment}
    onChange={(e) => setComment(e.target.value)}
    style={{borderRadius:"10px" , margin:"10px",  width: '100%', backgroundColor: "#E0E0E0", paddingRight: '40px' }} // Add paddingRight for the button
    inputProps={{ style: { padding: '20px', border: 'none', } }}
  />

  <Button
    variant="contained"
    style={{
      position: 'absolute', // Position the button absolutely
      right: '-9px', // Adjust the right distance as needed
      bottom: '10px', // Adjust the bottom distance as needed
      backgroundColor: '#E0E0E0' ,
      color: comment ? '#2196F3' : '',
      border: "none",
      padding:"11px",
      borderRadius:"8px"
    }}
    onClick={commentFunc}
    disabled={!comment}
  >
    <Send style={{ marginRight: '8px' }} />
  
  </Button>
</div>

</div>
  
       
      )}

    </div>

    </div>
  )
}
