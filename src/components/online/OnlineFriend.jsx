import React from 'react'
import './onlineFriend.css'
import { useEffect } from "react";
import { getalluserinfo } from "../../actions/userinfo";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function OnlineFriend() {
  const dispatch = useDispatch();
  const alluserinfo = useSelector((state) => state.userinfo.alluserinfo);

  useEffect(() => {
    dispatch(getalluserinfo());
  }, [dispatch]);
  return (

  //   <div>
  //    {
  //     Array.isArray(alluserinfo.userInfor) && alluserinfo.userInfor.map((userinfo) => (
  //   <li className="sidebarFriend">
  //     <img className="sidebarFriendImg" src={userinfo?.profileImg} alt="" />
  //     <span className="sidebarFriendName">{userinfo?.name}</span>
  //   </li>
  //    ))}
  //  </div>
  <div>
    
      {Array.isArray(alluserinfo?.userInfor) && alluserinfo?.userInfor.map((userinfo) => (
        <li className='rightbarFriend' key={userinfo._id}>
          <div className="rightbarProfileImageCont">
            {/* Wrap the image with a Link */}
            {/* <Link to={`/chat/${userinfo._id}`}></Link> */}

            
            <Link to={"/chat"}>
              <img src={userinfo?.profileImg} alt="" className="rightbarProfileImage" />
            </Link>
            <span className="rightbarOnline"></span>
          </div>
          {/* Wrap the name with a Link */}
          <Link to={'/chat'} className="rightbarUsername">
            <b >{userinfo?.name}</b>
          </Link>
        </li>
      ))}
    </div>
  )
}
