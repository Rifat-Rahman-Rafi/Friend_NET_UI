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
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Modal from '@mui/material/Modal';
export default function Topbar() {



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

  const dispatch = useDispatch();
  const { userposts, message } = useSelector((state) => state?.posts);
  const { userinfo, userinfomessage } = useSelector((state) => state?.userinfo);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  //const user = JSON.parse(localStorage.getItem("profile"));
  const id = user?.result?._id;

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


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const handleConfirmDelete = () => {
    localStorage.clear();
        
    dispatch({ type: "LOGOUT" })

  navigate("/")
  setUser(null)

    
  handleModalClose();

  
  };



  const [activeIcon, setActiveIcon] = useState('home'); // 'home' is the default active icon

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };



  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    handle();
    handleClose();
  };

  const handleLogoutModalClick = () => {
    handleModalClose();
     handleClose();
  };
  

  return (
    <>
   <div className="topbarContainer">
        {/* <div className="topbarLeft">
          <Link to="/home" style={{ textDecoration: 'none' ,marginLeft:"30px" }}>
            {/* <img height='60px' src={"assets/icon.png"} alt="" /> */}

            {/* <img height='62px' width="80px"  src="https://i.ibb.co/nrFtYWN/2.jpg" alt="" />
            
          </Link>
         
        </div> */} 

<div className="topbarLeft">
  <Link to="/home" style={{ textDecoration: 'none', marginLeft: '25px' }}>
    <img
      height='55px'
      width='80px'
      style={{ borderRadius: '100%' }} // Add this line for border radius
      // src="https://i.ibb.co/nrFtYWN/2.jpg"
     // src="https://i.ibb.co/dmnmtgc/121.png"
      //src="https://i.ibb.co/wczK67C/2-removebg-preview.png"
      src="https://i.ibb.co/WgSP3TZ/2-removebg-preview.png"
      alt=""
    />
  </Link>
</div>

        <div className="topbarLeft2">
          <div>
          {/* <div className="searchbar"> */}
            {/* <Search onClick={handleSearch} className="searchIcon" /> */}
            {/* <input
              placeholder="Search by user name"
              className="searchInput"
              // onChange={handleSearch}
              onChange={handleSearch}
              value={searchText}
            /> */}
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
      {/* <div className="topbarCenter">
      <div className="topbarLinks">
        <div className="topbarCenterIcon">
          <div  className="topbarHomeIcon">
            <Link to="/home">
          <HomeIcon style={{fontSize:'30px',color:"blue",position:'relative',  opacity:'0.7',}}/>
          </Link>
          </div>
          </div>
          <div className="topbarCenterIcon">
          <Link to="/comingsoon">
          <LiveTvIcon style={{fontSize:'30px',color:"grey"}}/>

          </Link>
          </div>
          {/* <div className="topbarCenterIcon">
          <StorefrontIcon style={{fontSize:'30px',color:"grey"}}/>
          </div> */}
          {/* <div className="topbarCenterIcon">
          <Link to="/comingsoon">
          <SportsEsportsIcon style={{fontSize:'30px',color:"grey"}}/>
          </Link>
          </div>
     
        </div>
      </div> */} 


<div className="topbarCenter">
      <div className="topbarLinks">
        <div className="topbarCenterIcon">
          <div className={`topbarHomeIcon ${activeIcon === 'home' ? 'active' : ''}`}>
            <Link to="/home" onClick={() => handleIconClick('home')}>
              <HomeIcon style={{ fontSize: '30px', color: activeIcon === 'home' ? 'blue' : 'grey', position: 'relative', opacity: '0.7' }} />
            </Link>
          </div>
        </div>
        <div className="topbarCenterIcon">
          <Link to="/comingsoon" onClick={() => handleIconClick('live')}>
            <LiveTvIcon style={{ fontSize: '30px', color: activeIcon === 'live' ? 'blue' : 'grey' }} />
          </Link>
        </div>
        <div className="topbarCenterIcon">
          <Link to="/comingsoon" onClick={() => handleIconClick('sports')}>
            <SportsEsportsIcon style={{ fontSize: '30px', color: activeIcon === 'sports' ? 'blue' : 'grey' }} />
          </Link>
        </div>
      </div>
    </div>




      {/* <div className="topbarRight">
        <div className="topbarIcons">
          {/* <div className="topbarIconItem">
            <div className="topbarIconCont">
            <Person style={{color:"black",borderRadius:'50%',fontSize:'21px'}} />
            </div>
            <span className="topbarIconBadge">1</span>
          </div> */}
          {/* <div className="topbarIconItem">
          <div className="topbarIconCont">
          <Link to="/chat"> 
                  <QuestionAnswerIcon style={{ color: "black", borderRadius: '50%', fontSize: '21px' }} />
                </Link>
            </div>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
         
          <NotificationModal></NotificationModal> */}
          
           
          {/* </div>
        </div> */}
  
        {/* <NotificationModal></NotificationModal> */}
        {/* {userinfo?.data?.userInfor?.profileImg ? (

          <Avatar onClick={handle} alt="Travis Howard" src={userinfo?.data?.userInfor?.profileImg} />
        ) : (
          <div className="topbarImg">
            <Avatar onClick={handle} alt="Travis Howard" src='https://i.ibb.co/Km16CJH/581-5813504-avatar-dummy-png-transparent-png.png' />
           
          </div>
        )} */}







      {/* <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        
        <Divider />
        
    
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu> */}
    
      {/* </div> */} 


      <div className="topbarRight">
      <div className="topbarIcons">
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

      <div>
        <Avatar
          onClick={handleAvatarClick}
          alt="Travis Howard"
          src={userinfo?.data?.userInfor?.profileImg || 'https://i.ibb.co/Km16CJH/581-5813504-avatar-dummy-png-transparent-png.png'}
        />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleProfileClick} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
  <Avatar fontSize="small" />
  Profile
</MenuItem>

          <MenuItem onClick={handleOpen} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}> <ListItemIcon>
            <Logout fontSize="large"  />
          </ListItemIcon> Logout</MenuItem>

          <Modal
  open={open}
  onClose={handleModalClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
<Box sx={style} style={{border:"none",borderRadius:"5px"}}>
  <Typography style={{textAlign:"center"}} id="modal-modal-title" variant="h6" component="h2">
          Are You Sure, You want to Logout?
  </Typography>
  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button onClick={handleConfirmDelete} style={{ margin: '0 10px',backgroundColor:"red", color:"white", padding:"10px 15px", border:"none",borderRadius:"5px" }}>
        Yes LogOut
      </button>
      <button onClick={handleLogoutModalClick} style={{ margin: '0 10px',backgroundColor:"gray", color:"white", padding:"10px 15px", border:"none",borderRadius:"5px" }}>
        Cancel
      </button>
    </div>
  </Typography>
</Box>

</Modal>
        </Menu>
      </div>
    </div>
    </div>
    </>
  );
}
