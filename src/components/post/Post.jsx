
import { useEffect, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './post.css'
import { commentforpost, deletecomment, likepost } from '../../actions/posts';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import {Button} from "react-bootstrap"
import {   InputBase } from '@mui/material';
import {  Send } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { getalluserinfo } from "../../actions/userinfo";

import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
export default function Post({post}) {

  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();
  const dispatch = useDispatch();


const [isLiked, setIsLiked] = useState(post?.likes?.includes(user?.result?._id));
  const [likes, setLikes] = useState(post?.likes?.length || 0);


  function handle() {
    navigate(`/profile/${post?.creator}`);
  }

  const LikeProfilehandle = (id) => {
    navigate(`/profile/${id}`);
  };
  
  const like = () => {
    dispatch(likepost({ id:post?._id, userId: user?.result?._id, setMessage:post?.setMessage,name:post?.name , creator:post?.creator}));
  };
  
  

  


  const likeHandler = async () => {
   
    try {
      if (isLiked) {
        setLikes(likes - 1);
      } else {
        setLikes(likes + 1);
      }

      setIsLiked(!isLiked);

      await dispatch(likepost({ id: post?._id, userId: user?.result?._id, setMessage: post?.setMessage, name: post?.name, creator: post?.creator }));
    } catch (error) {
      console.error(error);
    }
  };


  const handleLikeClick = () => {


    likeHandler();
    like();
  };

  const text = post?.name?.charAt(0);

  const newarr = post?.comments?.map((val, i) => val.split(":"))

  const [show, setShow] = useState(false);
  const commenthandle = () => {
    setShow((e) => !e);
  };

  
  const [comment, setComment] = useState("");
  const commentFunc = () => {
    dispatch(commentforpost({ comment, name: user?.result?.name, id: post?._id, setMessage: post.setMessage }));
    setComment("")
  };

  const test = JSON.parse(localStorage.getItem("profile"));
  const _id = test?.result?._id;


  // const ate =  new Date(createdAt);
  const ate = new Date();


  // console.log("TEST",test);


  const commentDelete = () => {
    dispatch(deletecomment(_id)); // Pass the _id here
    window.alert('Item successfully deleted');
  }
  






  function formatRelativeTime(timestamp) {
    const currentTimestamp = new Date().getTime();
    const timestampDate = new Date(timestamp);
  
    const timeDifference =  currentTimestamp - timestampDate.getTime();
    const secondsDifference = Math.floor(timeDifference / 1000);

    
    
    console.log("secondsDifference",currentTimestamp,timestampDate )
  
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
  
  const timestamp = post?.createdAt; // Replace with your timestamp
  const relativeTime = formatRelativeTime(new Date(timestamp));
  
  console.log(relativeTime); 



  console.log("NNNNNNNNEE",timestamp);


  
  console.log("LIKE  NNNNE ",post?.likes)


  const dateString = timestamp; // Your input date string

// Create a Date object from the input string
const date = new Date(dateString);

// Define the days of the week and months as arrays
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Extract the day, month, and year components from the Date object
const dayOfWeek = daysOfWeek[date.getUTCDay()];
const month = months[date.getUTCMonth()];
const day = date.getUTCDate();
const year = date.getUTCFullYear();

// Create the formatted string
const formattedDate = `${dayOfWeek} ${month} ${day} ${year}`;

// Print the formatted date
// console.log(formattedDate);

const options = [post?.likes];

// console.log("options",options)

const ITEM_HEIGHT = 40;

const [anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};


const alluserinfo = useSelector((state) => state?.userinfo?.alluserinfo);
  
useEffect(() => {
  dispatch(getalluserinfo());
}, [dispatch]);

const { userinfo, userinfomessage } = useSelector((state) => state?.userinfo);


let allIds = userinfo?.data?.userInfor?.followeeId ;
let allIdes2 = userinfo?.data?.userInfor?.followerId;

allIds = allIds?.concat(allIdes2);

allIds= allIds?.concat(user?.result?._id);
// console.log(alluserinfo.userInfor)

//const second = [alluserinfo.userInfor];
// console.log(options)
// console.log(second)
const firstArray =[post?.likes];
const secondArray=[alluserinfo?.userInfor];
// console.log("SS",secondArray)

// secondArray[0]?.forEach((data) => {
//   console.log("ppppppppppppppppp",data?.name);
// });

// secondArray[0]?.forEach((secondData) => {
  
//   firstArray[0]?.forEach((firstCreator) => {
    
//     if (firstCreator === secondData.creator) {
//       console.log(`Show the name for creator  ${secondData?.name}`);
//     }
//   });
// });


const matchingNames = [];
secondArray[0]?.forEach((secondData) => {
  firstArray[0]?.forEach((firstCreator) => {
    if (firstCreator === secondData?.creator) {
      matchingNames.push({profileImg: secondData?.profileImg,name: secondData?.name,creator: secondData?.creator })
    }
  });
});


 
  return (
   <div className="post">
    
    <div className="postWrapper">
    <div className="postTop">
      <div className="postTopLeft">

      {post?.profileImg ? (
            <img onClick={handle} className='postProfileImage' src={post?.profileImg} alt="" />
          ) : (

            <Avatar sx={{ bgcolor: 'black', width: 52, height: 52 }}>{text}</Avatar>
            // <div  className="dummy">{text}</div>

            
          )}
        <span onClick={handle} className="postUsername">{post?.name}</span>

        {/* <span  className="postDate">{relativeTime}</span> */}
        <span  className="postDate" style={{textAlign:"center"}}>{formattedDate}</span>
        
        {/* <span style={{marginRight:"15px"}}>{ate.toDateString()}</span> */}
      </div>
      

      <div className="postTopRight">
      
           <MoreVertIcon style={{ cursor:'pointer'}}/>
      </div>
      </div>

  <div className="postCenter">
  {post?.postDetails &&(
           <span className="postText">{post?.postDetails}</span>
    )}


    {post?.selectedFile &&(
       <img className='postImage' src={post?.selectedFile} alt="" />
    )}
   
  </div>
  <div className="postBottom">
  <div className="postBottomLeft">
        <div style={{ display: 'flex' }}>
          <div className="likeIconCont">
            <img className='likeIcon' onClick={handleLikeClick} src="../assets/like.png" alt="Like" />
          </div>
        </div>
       
        {/* {isLiked ? (
          <span>{likes === 1 ? "You" : ` You and ${likes - 1} other`}</span>
        ) : (
          <span>{likes} likes</span>
        )} */}

<div>
  <span
    aria-controls={open ? 'long-menu' : undefined}
    aria-expanded={open ? 'true' : undefined}
    aria-haspopup="true"
    onClick={handleClick}
  >
    {isLiked ? (
      <span>{likes === 1 ? 'You' : ` You and ${likes - 1} other`}</span>
    ) : (
      <span>{likes} likes</span>
    )}

{/* {post?.likes?.includes(user?.result?._id) ? (
            <>
              {/* <AiFillLike className="reaction-icon" onClick={like} /> */}
              {/* <span>{(post?.likes?.length == 1) ? "You" :` You and ${post?.likes?.length - 1} other`}</span>
            </>
          ) : (
            // <div onClick={like} classNem="div">
              // {/* <AiOutlineLike className="reaction-icon"/> */}
              {/* <span>{post?.likes?.length} likes</span>
            // </div> */}
          {/* )} */} 
  </span>

  {matchingNames.length > 0 && (
    <Menu
      id="long-menu"
      MenuListProps={{
        'aria-labelledby': 'long-button',
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
 
       
     
    >
      {matchingNames?.map((option) => (
        <MenuItem key={option?.creator} selected={option} onClick={handleClose}>
           
           
            <Avatar
            onClick={() => LikeProfilehandle(option?.creator)}
         
          alt="Travis Howard"
          src={option.profileImg || 'https://i.ibb.co/Km16CJH/581-5813504-avatar-dummy-png-transparent-png.png'}
          style={{marginRight:"5px"}}
        />
           
           
              {option?.name}
           
          
        </MenuItem>
      ))}
    </Menu>
  )}
</div>





{/* <div className="likes">
          {post?.likes?.includes(user?.result?._id) ? (
            <>
              {/* <AiFillLike className="reaction-icon" onClick={like} /> */}
              {/* <span>{(post?.likes?.length == 1) ? "You" :` You and ${post?.likes?.length - 1} other`}</span>
            </>
          ) : (
            <div onClick={like} classNem="div">
              {/* <AiOutlineLike className="reaction-icon"/> */}
              {/* <span>{post?.likes?.length} likes</span>
            </div>
          )}
        </div> */} 



      </div>
      <div className="postBottomRight">
      {newarr?.length > 0 ? (
    <span className="postCommentText" onClick={commenthandle}>
      {newarr?.length} comments
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
