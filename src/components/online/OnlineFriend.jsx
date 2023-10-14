import React from 'react'
import './onlineFriend.css'
import { useEffect } from "react";
import { getalluserinfo } from "../../actions/userinfo";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function OnlineFriend() {
  const dispatch = useDispatch();
  const alluserinfo = useSelector((state) => state?.userinfo?.alluserinfo);

  useEffect(() => {
    dispatch(getalluserinfo());
  }, [dispatch]);

  const user = JSON.parse(localStorage.getItem("profile"));
  
  const myID=user?.result?._id;
  return (


  // <div>
    
  //     {Array.isArray(alluserinfo?.userInfor) && alluserinfo?.userInfor.map((userinfo) => (

        
  //       <li className='rightbarFriend' key={userinfo?._id}>
  //         <div className="rightbarProfileImageCont">
            

            
  //           <Link to={"/chat"}>
  //             <img src={userinfo?.profileImg} alt="" className="rightbarProfileImage" />
  //           </Link>
  //           <span className="rightbarOnline"></span>
  //         </div>
        
  //         <Link to={'/chat'} className="rightbarUsername">
  //           <b >{userinfo?.name}</b>
  //         </Link>
  //       </li>
  //     ))}
  //   </div>

<div>
  {Array.isArray(alluserinfo?.userInfor) &&
    alluserinfo?.userInfor.map((userinfo) =>
      userinfo?.creator !== myID ? (
        <li className="rightbarFriend" key={userinfo?._id}>
          <div className="rightbarProfileImageCont">
            <Link to="/chat">
              <img src={userinfo?.profileImg} alt="" className="rightbarProfileImage" />
            </Link>
            <span className="rightbarOnline"></span>
          </div>
          <Link to="/chat" className="rightbarUsername">
            <b>{userinfo?.name}</b>
          </Link>
        </li>
      ) : null
    )
  }
</div>



  
  )
}
