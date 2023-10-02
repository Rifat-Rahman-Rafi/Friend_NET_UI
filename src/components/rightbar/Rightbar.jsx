import "./rightbar.css"
import React from 'react'
import {Users} from '../../dummyData'
import OnlineFriend from "../online/OnlineFriend"
import CloseFriend from "../closeFriend/CloseFriend"


function Rightbar() {
  return (
    <div className="rightbar">

      {/* <Chat></Chat> */}
     
    <div className="rightbarWrapper">
        
      <div className="birthdayContainer">
        <img src="./assets/gift.png" alt="" className="birthdayImage" />
        <span className="birthdayText">
          <b>Gopal Patel</b> and <b>other friends</b> have a birthday today.
        </span>
      </div>
      <img src="./assets/ad1.png" alt="" className="rightbarAdImg" />
 
     <hr className="rightbarHr" />

   
      <p className="rightbarTitle">Contacts</p>

     
      <ul className="rightbarFriendList">
        {/* {Users.filter((user)=>{
         return user.id >1
        }).map((u)=>(
          <OnlineFriend key={u.id} user={u}/>
          ))} */}

          <OnlineFriend></OnlineFriend>
      </ul>
    </div>
  </div>
  )
}

export default Rightbar
