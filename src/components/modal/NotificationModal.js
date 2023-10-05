// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { AiFillCamera } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { AiFillNotification } from "react-icons/ai";
// import img from "../../assets/avatar.svg";
// import { getusernotifications } from "../../actions/userinfo";
// import { Search, Person, Notifications } from "@mui/icons-material";
// function NotificationModal() {
//   const { userinfo , usernotifications} = useSelector((state) => state.userinfo);
//   const [show, setShow] = useState(false);
//   const dispatch = useDispatch();
//   const userId = JSON.parse(localStorage.getItem("profile"));
//   const id = userId?.result?._id;
//   console.log(usernotifications)

//   const handleShow = () => {
//     dispatch(getusernotifications(id));

//     setShow(true);
//   };
//   const handleClose = () => {
//     setShow(false);
//     //  dispatch(getuserinfo(id));
//   };

//   const style = {
//     zIndex: 10000000,
//   };

//   return (
//     <>
//       {userId?.result?._id && (
//           <div className="topbarIconItem">
//           <div className="topbarIconCont">
//           <Notifications  onClick={handleShow} style={{color:"black",borderRadius:'50%',fontSize:'21px'}}/>
//             </div>
//             <div>
//   {usernotifications?.usernotifications?.notification.length > 0 ? (
//     <span className="topbarIconBadge">
//       {usernotifications.usernotifications.notification.length}
//     </span>
//   ) : (
//     <span >
      
//     </span>
//   )}
// </div>


//              {/* <Button variant="primary" onClick={handleShow} size="sm">
//            <AiFillNotification />
//            <span>view notifications</span>
//          </Button> */}
//           </div>
//         // <Button variant="primary" onClick={handleShow} size="sm">
//         //   <AiFillNotification />
//         //   <span>view notifications</span>
//         // </Button>
//       )}
//       <Modal show={show} onHide={handleClose} style={style}>
//         <Modal.Header closeButton>
//           <Modal.Title>Your Notification</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {!usernotifications?.usernotifications?.notification.length && (
//             <div>
//               <h6>No Notifications</h6>
//               {/* <img src={img} style={{ width: "200px" }} /> */}
//             </div>
//           )}
//           {usernotifications?.usernotifications?.notification.map((val) => (
//             <ul>
//               <li>{val}</li>
              
//             </ul>
//           ))}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default NotificationModal;


import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { AiFillNotification } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getusernotifications } from "../../actions/userinfo";
import {  Notifications } from "@mui/icons-material";
function NotificationModal() {
  const { userinfo, usernotifications } = useSelector((state) => state.userinfo);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const userId = JSON.parse(localStorage.getItem("profile"));
  const id = userId?.result?._id;

  const handleOpen = () => {
    dispatch(getusernotifications(id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {userId?.result?._id && (
        <div className="topbarIconItem">
          <IconButton onClick={handleOpen} style={{ color: "black" }}>
          <Notifications></Notifications>
          </IconButton>
          <div>
            {usernotifications?.usernotifications?.notification.length > 0 ? (
              <span className="topbarIconBadge">
                {usernotifications.usernotifications.notification.length}
              </span>
            ) : null}
          </div>
        </div>
      )}
      <Dialog open={open} onClose={handleClose} >
        <DialogContent>
          <h3>Your Notifications</h3>
          {!usernotifications?.usernotifications?.notification.length ? (
            <div>
              <h6>No Notifications</h6>
            </div>
          ) : (
            <ul>
              {usernotifications?.usernotifications?.notification.map((val, index) => (
                <li key={index}>{val}</li>
              ))}
            </ul>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default NotificationModal;



// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { AiFillCamera } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { AiFillNotification } from "react-icons/ai";
// import img from "../../assets/img1.jpg";
// import { getusernotifications } from "../../actions/userinfo";

// function NotificationModal() {
//   const { userinfo , usernotifications} = useSelector((state) => state.userinfo);
//   const [show, setShow] = useState(false);
//   const dispatch = useDispatch();
//   const userId = JSON.parse(localStorage.getItem("profile"));
//   const id = userId?.result?._id;
//   console.log(usernotifications)

//   const handleShow = () => {
//     dispatch(getusernotifications(id));

//     setShow(true);
//   };
//   const handleClose = () => {
//     setShow(false);
//     //  dispatch(getuserinfo(id));
//   };

//   const style = {
//     zIndex: 10000000,
//   };

//   return (
//     <>
//       {userId?.result?._id && (
//         <Button variant="primary" onClick={handleShow} size="sm">
//           <AiFillNotification />
//           <span>view notifications</span>
//         </Button>
//       )}
//       <Modal show={show} onHide={handleClose} style={style}>
//         <Modal.Header closeButton>
//           <Modal.Title>Your Notification</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {!usernotifications?.usernotifications?.notification.length && (
//             <div>
//               <h6>No Notifications</h6>
//               <img src={img} style={{ width: "200px" }} />
//             </div>
//           )}
//           {usernotifications?.usernotifications?.notification.map((val) => (
//             <ul>
//               <li>{val}</li>
//             </ul>
//           ))}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default NotificationModal;


