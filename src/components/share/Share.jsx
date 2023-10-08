import React, { useState } from 'react'
import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { useDispatch, useSelector } from "react-redux";

import { createpost, getposts, getUserpost } from "../../actions/posts";
import { Avatar } from '@mui/material';

export default function Share({changeState}) {

    const [postData, setPostData] = useState({ postDetails: "", selectedFile: "" });
    const { userinfo,alluserinfo } = useSelector((state) => state.userinfo);
    const [input, setInput] = useState(false);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"));
    const id = user?.result?._id;

    const text = user?.result?.name.charAt(0);

  return (
    <div className='share' >

        <div className="shareWrapper">
            <div className="shareTop">

            {userinfo?.data?.userInfor?.profileImg ? (
            <img className='shareProfileImage' src={userinfo?.data?.userInfor?.profileImg} alt="" />
          ) : (
            <Avatar sx={{ bgcolor: 'black', width: 52, height: 52 }}>{text}</Avatar>
             
            
          )}
            
            <div className="shareInputCont"></div>

            <input
            className='shareInput'
            style={{paddingLeft:"10px"}}
          placeholder={`Whats on your mind, ${user?.result?.name?.split(" ")[0]}`}
          onClick={changeState}
          name="message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }></input>

            </div>
            <hr className='shareHr' />
            <div className="shareButtom">
             <div className="shareOptions">
             <div className="shareOption">
                    <VideoCameraBackIcon htmlColor='red' className='shareIcon'/>
                    <span className="shareOptionLongText">
                        Live video
                    </span>
                    <span className="shareOptionText">
                        Live
                    </span>
                </div>
                <div onClick={changeState} className="shareOption">
                    <PermMediaIcon  htmlColor='green' className='shareIcon'/>
                    <span className="shareOptionLongText">
                        Photo/video
                    </span>
                    
                    <span className="shareOptionText">
                        Gallery
                    </span>
                </div>
                <div className="shareOption">
                    <EmojiEmotionsIcon htmlColor='orange' className='shareIcon'/>
                    <span className="shareOptionLongText">
                       Feeling/Activity
                    </span>
                    <span className="shareOptionText">
                       Feel
                    </span>
                </div>
             </div>
            </div> 
             </div>

    </div>
  )
}
