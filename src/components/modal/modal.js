// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { AiFillCamera } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   createuserinfo,
//   getuserinfo,
//   updateuserinfo,
// } from "../../actions/userinfo";
// import { useParams } from "react-router-dom";
// import FileBase from "react-file-base64";
// import { AiFillEdit } from "react-icons/ai";

// function Modall() {
//   const { userinfo } = useSelector((state) => state.userinfo);
//   const [show, setShow] = useState(false);
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   const handleShow = () => setShow(true);
//   const userId = JSON.parse(localStorage.getItem("profile"));

//   console.log(userId,"userId")

//   const [postInfo, setPostinfo] = useState({
//     profileImg: "",
//     bio: "",
//     creator: "",
//     coverImg: "",
//     name: userId?.result?.name,
//   });
//   const handleClose = () => {
//     setShow(false);
//     setPostinfo({ ...postInfo, creator: id });
//     if (userinfo?.data?.userInfor) {
//     }
//     console.log("updating");

//  dispatch(updateuserinfo(postInfo));
   
//     // dispatch(createuserinfo(postInfo));
//   };

//   const style = {
//     zIndex: 10000000,
//   };
//   return (
//     <>
//       {id === userId.result?._id && (
//         <Button variant="primary" onClick={handleShow}>
//           <AiFillEdit />
//           Edit your Profile
//         </Button>
//       )}
//       <Modal show={show} onHide={handleClose} style={style}>
//         <Modal.Header closeButton>
//           <Modal.Title>Make Your Changes</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div>
//             <h4>Chose Your Profile Picture</h4>
//             <label
//               className="inputLabel"
//               style={{
//                 cursor: "pointer",
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               <AiFillCamera style={{ width: "30px" }} />
//               <span>Select Photo</span>
//               <div style={{ display: "none" }}>
//                 <FileBase
//                   type="file"
//                   multiple={false}
//                   onDone={({ base64 }) =>
//                   setPostinfo({ ...postInfo, profileImg: base64 })
//                   }
//                 />
//                 {<p>{postInfo?.profileImg}</p>}
//               </div>
//             </label>
//           </div>
//           <div>
//             <h4>Chose Your Cover Picture</h4>
//             <label
//               className="inputLabel"
//               style={{
//                 cursor: "pointer",
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               <AiFillCamera style={{ width: "30px" }} />
//               <span>Select Photo</span>
//               <div style={{ display: "none" }}>
//                 <FileBase
//                   type="file"
//                   multiple={false}
//                   onDone={({ base64 }) =>
//                   setPostinfo({ ...postInfo, coverImg: base64 })
//                   }
//                 />
//                 {<p>{postInfo?.profileImg}</p>}
//               </div>
//             </label>
//           </div>
//           <div>
//             <h4 style={{marginBottom: "5px"}}>Enter Your Bio</h4>
//             <input
//               placeholder="Please Enter Bio"
//               value={postInfo.bio}
//               onChange={(e) =>
//                 setPostinfo({ ...postInfo, bio: e.target.value })
//               }
//             />
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Modall;





import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { AiFillCamera } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  createuserinfo,
  getuserinfo,
  updateuserinfo,
} from "../../actions/userinfo";
import { useParams } from "react-router-dom";
import FileBase from "react-file-base64";
import { AiFillEdit } from "react-icons/ai";

function Modall() {
  const { userinfo } = useSelector((state) => state.userinfo);
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleShow = () => setShow(true);
  const userId = JSON.parse(localStorage.getItem("profile"));

  const [postInfo, setPostinfo] = useState({
    profileImg: "",
    bio: "",
    creator: "",
    coverImg: "",
    name: userId?.result?.name,
  });

  const handleClose = () => {
    setShow(false);
    setPostinfo({ ...postInfo, creator: id });
    if (userinfo?.data?.userInfor) {
    }
    console.log("updating");

    dispatch(updateuserinfo(postInfo));
  };

  const style = {
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Set modal height to 100% of the viewport height
  };

  return (
    <>
      {id === userId.result?._id && (
        <Button variant="contained" style={{width: "75%"}} onClick={handleShow} startIcon={<AiFillEdit />}>
          Edit your Profile
        </Button>
      )}
      <Modal open={show} onClose={handleClose} style={style}>
        <div style={{ background: "white", padding: "16px" }}>
          <h4>Choose Your Profile Picture</h4>
          <label
            className="inputLabel"
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AiFillCamera style={{ width: "30px" }} />
            <span>Select Photo</span>
            <div style={{ display: "none" }}>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostinfo({ ...postInfo, profileImg: base64 })
                }
              />
              {<p>{postInfo?.profileImg}</p>}
            </div>
          </label>
          <h4>Choose Your Cover Picture</h4>
          <label
            className="inputLabel"
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AiFillCamera style={{ width: "30px" }} />
            <span>Select Photo</span>
            <div style={{ display: "none" }}>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostinfo({ ...postInfo, coverImg: base64 })
                }
              />
             
            </div>
          </label>
          <h4 style={{ marginBottom: "5px" }}>Enter Your Bio</h4>
          <input
            placeholder="Please Enter Bio"
            value={postInfo.bio}
            style={{padding:"8px",margin:"8px"}}
            onChange={(e) =>
              setPostinfo({ ...postInfo, bio: e.target.value })
            }
          />
          <Button variant="outlined" onClick={handleClose} style={{ marginRight: "8px" }}>
            Close
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Save Changes
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default Modall;

