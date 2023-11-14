import { useDispatch, useSelector } from "react-redux";
import "./closeFriend.css";
import { useEffect } from "react";
import { getalluserinfo } from "../../actions/userinfo";

export default function CloseFriend( ) {

  const dispatch = useDispatch();
  const alluserinfo = useSelector((state) => state.userinfo?.alluserinfo);

  useEffect(() => {
    dispatch(getalluserinfo());
  }, [dispatch]);

  

  return (
   <div>
     {
      Array.isArray(alluserinfo?.userInfor) && alluserinfo?.userInfor.map((userinfo) => (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={userinfo?.profileImg} alt="" />
      <span className="sidebarFriendName">{userinfo?.name}</span>
    </li>
     ))}
   </div>
  );
}
