import "./sidebar.css";
import {
  RssFeed,
  Chat,
  Group,
  HelpOutline,
  Event
} from "@mui/icons-material";
import {AiFillDelete} from 'react-icons/ai'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import WorkIcon from '@mui/icons-material/Work';
import { Search } from '@mui/icons-material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AllUserInfo from "../AllUserInfo/AllUserInfo";
export default function Sidebar() {
  
  const [showHidden,setShowHidden] = useState()
  const logoutToggle =(showHidden)=>{
             setShowHidden(!showHidden);
  }




  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const navigate = useNavigate();
  const id = user?.result?._id;
  const dispatch = useDispatch();



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
  

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleConfirmDelete = () => {

      localStorage.clear();
        
        dispatch({ type: "LOGOUT" })

      navigate("/")
      setUser(null)
    
        
        handleClose();
    
      
      };

  

  //   const logout = () => {
      
  //     window.confirm("Are You Sure, You want to Logout?")
  //     dispatch({ type: "LOGOUT" })

  //     navigate("/")
  //     setUser(null)
  // }

  return (
    <div className="sidebar">
      <div className="sidebarWrapper"> 
        <ul className="sidebarList">

        <Link to="/findjobs" style={{ textDecoration: 'none' }}>
        <li className="sidebarListItem">
          <Search className="sidebarIcon" style={{ color: 'skyblue' }} /> {/* Use the Search icon */}
          <span className="sidebarListItemText">Find Jobs</span>
        </li>
      </Link>

        <Link to="/job" style={{ textDecoration: 'none' }}>
  <li className="sidebarListItem">
    <WorkIcon className="sidebarIcon" style={{ color: 'skyblue' }} />
    <span className="sidebarListItemText">Create Jobs</span>
  </li>
</Link>


<Link to="/jobtable" style={{ textDecoration: 'none' }}>
  <li className="sidebarListItem">
    <WorkOutlineIcon className="sidebarIcon" style={{ color: 'skyblue' }} />
    <span className="sidebarListItemText">My Jobs</span>
  </li>
</Link>





                <Link to="/comingsoon" style={{ textDecoration: 'none' }}>
  <li className="sidebarListItem">
    <RssFeed className="sidebarIcon" style={{ color: 'skyblue' }} />
    <span className="sidebarListItemText">Feed</span>
  </li>
</Link>


                
        <Link to="/friends" style={{ textDecoration: 'none' }}>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" style={{color:'skyblue'}}/>
            <span className="sidebarListItemText">Friends</span>
          </li>

          </Link>

          <Link to="/chat" style={{ textDecoration: 'none' }}>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" style={{color:'skyblue'}}/>
            <span className="sidebarListItemText">Messenger</span>
          </li>

          </Link>

          <Link to="/comingsoon" style={{ textDecoration: 'none' }}>
          <li className="sidebarListItem">
            <VideoLibraryIcon className="sidebarIcon" style={{color:'skyblue'}}/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          </Link>

          {/* <Link to="/comingsoon" style={{ textDecoration: 'none' }}>
          <li className="sidebarListItem">
            <StorefrontIcon className="sidebarIcon" style={{color:'skyblue'}}/>
            <span className="sidebarListItemText">Marketplace</span>
          </li>
          </Link> */}
          {/* <Link to="/comingsoon" style={{ textDecoration: 'none' }}>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" style={{color:'skyblue'}}/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          </Link>

          <Link to="/comingsoon" style={{ textDecoration: 'none' }}>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" style={{color:'skyblue'}}/>
            <span className="sidebarListItemText">Events</span>
          </li>
          </Link> */}
          <li className="sidebarListItem" onClick={()=>logoutToggle(showHidden)}>
            <ExpandCircleDownRoundedIcon className="sidebarIcon" />
            <span className="sidebarListItemText" >Show more</span>
          </li>
          {/* <Link style={{textDecoration:'none'}} to={logout?'/':''}>
          <li><h5 id="logout"  className={showHidden?"logout-show":"logout-hide"} onClick={()=>logout()}>Logout</h5></li>
          </Link> */}

          <div >
{/* <h4 id="logout" className={showHidden?"logout-show":"logout-hide"} onClick={handleOpen}>Logout</h4>      */}
<Link className={showHidden?"logout-show":"logout-hide"} to="/comingsoon" style={{ textDecoration: 'none' }}>
          <li className="sidebarListItem">
            <StorefrontIcon className="sidebarIcon" style={{color:'skyblue'}}/>
            <span className="sidebarListItemText">Marketplace</span>
          </li>
          </Link>
<Link className={showHidden?"logout-show":"logout-hide"} to="/comingsoon" style={{ textDecoration: 'none' }}>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" style={{color:'skyblue'}}/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          </Link>

          <Link className={showHidden?"logout-show":"logout-hide"} to="/comingsoon" style={{ textDecoration: 'none' }}>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" style={{color:'skyblue'}}/>
            <span className="sidebarListItemText">Events</span>
          </li>
          </Link>
</div>




        </ul>
        {/* <button className="sidebarButton">Show More</button> */}
        <hr className="sidebarHr" />
        
        {/* <h4 style={{color:'grey'}}>Your shortcuts</h4>
        <ul className="sidebarFriendList">
        {Users.filter((user)=>{
         return user.id >2 && user.id<6
        }).map((u)=>(
          <CloseFriend key={u.id} user={u} />
          ))}

          {/* <AllUserInfo></AllUserInfo> */}
        {/* </ul>  */}
      </div>
    </div>
  );
}
