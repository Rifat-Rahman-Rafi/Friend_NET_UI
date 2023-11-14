import React from 'react';
import { useEffect } from "react";
import { getalluserinfo } from "../../actions/userinfo";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const LikedPeople = () => {
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
    
    return (
        <div>
  


{Array.isArray(alluserinfo?.userInfor) && allIds?.length > 0 ? (
    alluserinfo?.userInfor
    .filter((userinfo) => allIds.includes(userinfo?.creator) )
    .map((userinfo) => (
<div  key={userinfo?._id}>
          
<li className="rightbarFriend" key={userinfo?._id}>
          <div className="rightbarProfileImageCont">
            <Link to="/chat">
              <img src={userinfo?.profileImg} alt="" className="rightbarProfileImage" />
            </Link>
           
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
    );
};

export default LikedPeople;