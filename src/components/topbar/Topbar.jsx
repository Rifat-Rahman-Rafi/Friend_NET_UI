import React from 'react';
import "./topbar.css";
import { Search, Person, Notifications } from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import {Link,  useNavigate,  useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
 import { getuserinfo } from "../../actions/userinfo";
 import { getUserpost, getsearch } from "../../actions/posts";
 import Avatar from "@mui/material/Avatar";
import Post from '../post/Post';
import NotificationModal from '../modal/NotificationModal';
import { Button } from 'react-bootstrap';

export default function Topbar() {

  const dispatch = useDispatch();
  const { userposts, message } = useSelector((state) => state.posts);
  const { userinfo, userinfomessage } = useSelector((state) => state.userinfo);

  const user = JSON.parse(localStorage.getItem("profile"));
  const id = user.result._id;

  const navigate = useNavigate();

  function handle() {
    navigate(`/profile/${userinfo?.data?.userInfor?.creator}`);
  }

  useEffect(() => {
    const fetchData = async () => {
      if (userinfomessage) {
        await dispatch(getuserinfo(id));
      }
    };
  
    fetchData(); 
  }, [dispatch, message, userinfomessage, id]);

  const text = userinfo?.data?.userInfor?.name?.charAt(0);

  const [searchText, setSearchText] = useState("");

  const [filteredPosts, setFilteredPosts] = useState(userposts);

  // const handleSearch = (e) => {
  //   const text = e.target.value;
  //   setSearchText(text);
  
  //   // Filter posts based on user names
  //   const filteredPosts = userposts.filter((post) =>
  //     post?.name?.toLowerCase().includes(text.toLowerCase())
  //   );
  //   setFilteredPosts(filteredPosts);
  // };

  // const handleSearch = () => {
  //   dispatch(getsearch(searchText));

  //   console.log("searchText",searchText,filteredPosts)
  // };

  // const { posts, postDetails, loading } = useSelector((state) => state.posts);
  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);

    // Filter posts based on user names
    const filteredPosts = userposts.filter((post) =>
      post?.name?.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPosts(filteredPosts);

    // Dispatch the search action
    dispatch(getsearch(text));
  };

  console.log("filteredPosts",userposts,userinfo)
  

  return (
    <>
   <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <img height='60px' src={"assets/icon.png"} alt="" />
            
          </Link>
         
        </div>
        <div className="topbarLeft2">
          <div className="searchbar">
            <Search onClick={handleSearch} className="searchIcon" />
            <input
              placeholder="Search by user name"
              className="searchInput"
              // onChange={handleSearch}
              onChange={handleSearch}
              value={searchText}
            />
          </div>
          {/* {filteredPosts.map((post) => (
            <Post key={post._id} post={post} />
          ))} */}
       </div> 

       {/* <div className="topbarPosts">
          {filteredPosts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div> */}

        {/* <form onSubmit={handleSearch} style={{ display: "flex", alignItems: "center" }}>
          <input name="search" label="Search by Jobs Title" variant="outlined" fullWidth />
          <Button variant="contained"  type="submit" style={{height:"55px"}}>
            
            <Search />
            

            
          </Button>
        </form> */}
      <div className="topbarCenter">
      <div className="topbarLinks">
        <div className="topbarCenterIcon">
          <div  className="topbarHomeIcon">
            <Link to="/home">
          <HomeIcon style={{fontSize:'30px',color:"blue",position:'relative',  opacity:'0.7'}}/>
          </Link>
          </div>
          </div>
          <div className="topbarCenterIcon">
          <LiveTvIcon style={{fontSize:'30px',color:"grey"}}/>
          </div>
          <div className="topbarCenterIcon">
          <StorefrontIcon style={{fontSize:'30px',color:"grey"}}/>
          </div>
          <div className="topbarCenterIcon">
          <SportsEsportsIcon style={{fontSize:'30px',color:"grey"}}/>
          </div>
     
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          {/* <div className="topbarIconItem">
            <div className="topbarIconCont">
            <Person style={{color:"black",borderRadius:'50%',fontSize:'21px'}} />
            </div>
            <span className="topbarIconBadge">1</span>
          </div> */}
          <div className="topbarIconItem">
          <div className="topbarIconCont">
          <Link to="/chat"> 
                  <QuestionAnswerIcon style={{ color: "black", borderRadius: '50%', fontSize: '21px' }} />
                </Link>
            </div>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
         
          <NotificationModal></NotificationModal>
          
           
          </div>
        </div>
        {/* <Link to="/profile/bhabishya" style={{textDecoration:'none'}}>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
        </Link> */}
        {/* <NotificationModal></NotificationModal> */}
        {userinfo?.data?.userInfor?.profileImg ? (

          <Avatar onClick={handle} alt="Travis Howard" src={userinfo?.data?.userInfor?.profileImg} />
        ) : (
          <div className="topbarImg">
            <Avatar onClick={handle} alt="Travis Howard" src='https://i.ibb.co/Km16CJH/581-5813504-avatar-dummy-png-transparent-png.png' />
           
          </div>
        )}
      </div>
    </div>
    </>
  );
}
