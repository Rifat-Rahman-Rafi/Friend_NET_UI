import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getalluserinfo } from '../../actions/userinfo';

const AllUserInfo = () => {
  const dispatch = useDispatch();
  const alluserinfo = useSelector((state) => state.userinfo.alluserinfo);

  useEffect(() => {
    dispatch(getalluserinfo());
  }, [dispatch]);


  console.log("alluserinfo",alluserinfo?.userInfor)

//   for (let i = 0; i < alluserinfo?.userInfor?.length; i++) {
//     console.log("Name:", alluserinfo?.userInfor[i].name);
//   }

  return (
    <div>
      <h1>All User Info</h1>
      <ul>
        {Array.isArray(alluserinfo.userInfor) && alluserinfo.userInfor.map((userinfo) => (
          <li key={userinfo._id}>
            {/* Render user info data here */}
            
            <p>Name: {userinfo.name}</p>
            <img src={userinfo.profileImg} alt="" />
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllUserInfo;
