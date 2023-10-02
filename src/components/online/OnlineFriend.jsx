import React from 'react'
import './onlineFriend.css'
import { useEffect } from "react";
import { getalluserinfo } from "../../actions/userinfo";
import { useDispatch, useSelector } from 'react-redux';
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
    {  Array.isArray(alluserinfo?.userInfor) && alluserinfo?.userInfor.map((userinfo) => (
   <li className='rightbarFriend'>
    <div className="rightbarProfileImageCont">
        <img src={userinfo?.profileImg} alt="" className="rightbarProfileImage" />
        <span className="rightbarOnline"></span>
    </div>
    <span className="rightbarUsername"><b>{userinfo?.name}</b></span>
   </li>
   ))}
   </div>
  )
}
