/* eslint-disable react/jsx-no-undef */
import * as React from 'react';
import react, { useEffect, useRef, useState } from "react";
import {Button} from "react-bootstrap"
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { likepost, commentforpost, getposts, updatepost,deletepost } from "../../actions/posts";
import {AiFillEdit} from 'react-icons/ai'
import {AiFillDelete} from 'react-icons/ai'
import './Nfeed.css'
import Box from '@mui/material/Box';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container,  InputBase } from '@mui/material';
import { Search, Send } from '@mui/icons-material';
import PostImg from '../modal/postImg';
const Nfeed = ({
  name,
  postDetails,
  selectedFile,
  creator,
  createdAt,
  profileImg,
  _id,
  likes,
  comments,
  setMessage,
}) => {
  const ate =  new Date(createdAt)
  const { userinfo, loading } = useSelector((state) => state.userinfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [showmessage, setShowmessage] = useState(true)
  const [title, setTitle] = useState(postDetails)
  const [show, setShow] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));
  const newarr = comments?.map((val, i) => val.split(":"))


  const [isLiked, setIsLiked] = useState(false); // Local state for tracking likes
  const [likeCount, setLikeCount] = useState(likes.length); // Local state for like count
 

 // const[updateImg,setUpdateImg]=useState(selectedFile);

  const[updateImg,setUpdateImg]=useState({
    selectedFile: "",
   
  });




  const { posts } = useSelector((state) => state.posts);

  const likeHandler = async () => {
    try {
      if (isLiked) {
        setLikeCount(likeCount - 1);
      } else {
        setLikeCount(likeCount + 1);
      }

      setIsLiked(!isLiked);

      await dispatch(likepost({ id:_id, userId: user?.result?._id, setMessage: setMessage, name: name, creator: creator }));
    } catch (error) {
      console.error(error);
    }
  };


  const showmessageFunc = () => {
    setShowmessage((e) => !e)
    setTitle("")
  }

  const edit = () => {
    dispatch(updatepost({ title, postid: _id, updateImg }));
    setShowmessage((e) => !e);
    setTitle("");
    // Reset the updateImg state if needed
    setUpdateImg("");
  };
  

  const commentFunc = () => {
    dispatch(commentforpost({ comment, name: user?.result?.name, id: _id, setMessage }));
    setComment("")
  };



  


  const commenthandle = () => {
    setShow((e) => !e);
  };

  const deleteone = () => {
    dispatch(deletepost(_id));
    //window.alert('Item successfully deleted');
  }
  

  

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleConfirmDelete = () => {
        // Perform the delete operation here (call deleteone function)
        deleteone();
    
        // Close the modal
        handleClose();
    
        // Show a success message using window.alert
       // window.alert('Item successfully deleted');
      };


  const text = name?.charAt(0);


 




  return (
    <FeedContainer >
      <User>
        <UserProfileImg >
          {profileImg ? (
            <UserImage src={profileImg} />
          ) : (
            <div className="dummy">{text}</div>
          )}
        </UserProfileImg>
        <UserNameAndTimePosted style={{width: "100%",display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <h3 >{name}</h3>
        <>
        <span style={{marginRight:"15px"}}>{ate.toDateString()}</span>
      {creator === user?.result?._id &&
      
      <><AiFillEdit onClick={showmessageFunc} />
       {/* <AiFillDelete onClick={deleteone} /> */}
       </>}
        </>

{creator === user?.result?._id &&
<>
<AiFillDelete style={{margin:"10px"}} onClick={handleOpen} />     
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
<Box sx={style} style={{border:"none",borderRadius:"5px"}}>
  <Typography id="modal-modal-title" variant="h6" component="h2">
    Are you sure you want to delete this Post?
  </Typography>
  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button onClick={handleConfirmDelete} style={{ margin: '0 10px',backgroundColor:"red", color:"white", padding:"10px 15px", border:"none",borderRadius:"5px" }}>
        Delete
      </button>
      <button onClick={handleClose} style={{ margin: '0 10px',backgroundColor:"gray", color:"white", padding:"10px 15px", border:"none",borderRadius:"5px" }}>
        Cancel
      </button>
    </div>
  </Typography>
</Box>

</Modal>
</>
}






        </UserNameAndTimePosted>
      </User>
      <UserInput>
       {showmessage &&  <h3>{postDetails}</h3>}
       {!showmessage &&
       <div style={{display: "flex", width: "100%", flexDirection: "column"}}>
         <input value={title} onChange={(e) => setTitle(e.target.value)} style={{flex: 1, padding: "5px",paddingBottom: "80px"}} />
       

         <FileBase 
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setUpdateImg({selectedFile: base64 })
            }

           
          />


<PostImg></PostImg>

         

        {!title ? <Button  onClick={showmessageFunc}>Close</Button> : <Button onClick={edit}>Update</Button>}
       </div>
       }




      </UserInput>
      {selectedFile && (
        <UserPostImg>
          <Img src={selectedFile} />
        </UserPostImg>
      )}

      {/* <div className="postBottom">
        <div className="postBottomLeft">
        <div style={{ display: 'flex' }}>
          <div className="likeIconCont">
            <img className='likeIcon' onClick={likeHandler} src="../assets/like.png" alt="Like" />
          </div>
          <div className="likeIconCont">
            <img className='likeIcon' onClick={likeHandler} src="../assets/heart.png" alt="Heart" />
          </div>
        </div>

          {likes?.includes(user?.result?._id) ? (
            <>
                        
              <span>{(likes?.length == 1) ? "You" :` You and ${likes?.length - 1} other`}</span>
            </>
          ) : (
            <div  classNem="div">
              <span>{likes?.length} likes</span>
            </div>
          )}
        </div>
        <div className="likes">
          <AiOutlineComment className="reaction-icon" onClick={commenthandle} />{" "}
          {comments?.length} <span>Comments</span>
        </div>
       
      </div> */}




      <div className="postBottom" style={{margin:"10px"}}>
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
          <span>{likeCount === 1 ? "You" : ` You and ${likeCount - 1} other`}</span>
        ) : (
          <span>{likeCount} likes</span>
        )}
      </div>
      <div className="postBottomRight" style={{marginRight:"5px"}}>
  {newarr.length > 0 ? (
    <span className="postCommentText" onClick={commenthandle}>
      {newarr.length} comments
    </span>
  ) :  <span className="postCommentText" onClick={commenthandle}>
   comments
</span>}
</div>



      </div>
     
{/* 
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
       <span className="postCommentText">{post.comment} comments</span>
      </div>
      </div>  */}



{show && (

<div style={{marginLeft:"10px"}}>
  
{newarr?.map((val, i) => (
  <div key={i} className="comment-item">
    <span className="comment-user">{val[0]}:</span>
    <span className="comment-text">{val[1]}</span>
  </div>
))}


{/* <div className="comments">
           <div className="comment-list">
       
          </div>
          {/* <h5 className="comments-title">All Comments</h5> */}
          {/* <div className="comment-input">
            <input
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              placeholder="Post Comment"
              className="comment-input-field"
            />
            <button className="comment-button" onClick={commentFunc}>
              Comment
            </button>
          </div> */}
         
        {/* </div> } */}
        
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
    </FeedContainer>
  );
};

export default Nfeed;

const FeedContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 20px;
  padding-top: 13px;
  .div:target {
    /* transform: scale(4); */
    /* background-color: blue; */
}
  .dummy {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0px 10px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .reactions {
    padding-block: 10px;
    background-color: whitesmoke;
    text-align: center;
    justify-content: space-around;
    display: grid;
    grid-auto-flow: column;
    transition: all 0.3s ease-in-out;
    .likes {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .reaction-icon {
      width: 25px;
      cursor: pointer;
    }
  }
  h3 {
    font-size: 15px;
  }
  
  }
`;
const User = styled.div`
  display: flex;
  flex-direction: row;

  height: auto;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;
const UserNameAndTimePosted = styled.div`
  display: flex;
  flex-direction: row;
  text-align: initial;

  h3 {
    margin-left: 5px;
  }
`;
const UserProfileImg = styled.div``;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0px 10px;
`;
const UserInput = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 15px;
  padding: 10px 0px;
  font-size: 15px;
`;
const UserPostImg = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 450px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
