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
import { updatepost } from "../../actions/posts";

function PostImg() {

  


  const { userinfo } = useSelector((state) => state.userinfo);
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleShow = () => setShow(true);
  const userId = JSON.parse(localStorage.getItem("profile"));
  const [title, setTitle] = useState();
  const [postInfo, setPostinfo] = useState({
    title:"",
    selectedFile:"",
  });

  const handleClose = () => {
    setShow(false);
    setPostinfo({ ...postInfo, creator: id });
    if (userinfo?.data?.userInfor) {
    }
    console.log("updating");

    dispatch(updatepost(postInfo));
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
                  setPostinfo({ ...postInfo, selectedFile: base64 })
                }
              />
            
            </div>
          </label>

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

export default PostImg;

