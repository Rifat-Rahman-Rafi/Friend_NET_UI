import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillCamera } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AiFillNotification } from "react-icons/ai";
import img from "../../images/network.png";
import { getusernotifications } from "../../actions/userinfo";

function NotificationModal() {
  const { userinfo , usernotifications} = useSelector((state) => state.userinfo);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const userId = JSON.parse(localStorage.getItem("profile"));
  const id = userId?.result?._id;
  console.log(usernotifications)

  const handleShow = () => {
    dispatch(getusernotifications(id));

    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
    //  dispatch(getuserinfo(id));
  };

  const style = {
    zIndex: 10000000,
  };

  return (
    <>
      {userId?.result?._id && (
        <Button variant="primary" onClick={handleShow} size="sm">
          <AiFillNotification />
          <span>view notifications</span>
        </Button>
      )}
      <Modal show={show} onHide={handleClose} style={style}>
        <Modal.Header closeButton>
          <Modal.Title>Your Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!usernotifications?.usernotifications?.notification.length && (
            <div>
              <h6>No Notifications</h6>
              <img src={img} style={{ width: "200px" }} />
            </div>
          )}
          {usernotifications?.usernotifications?.notification.map((val) => (
            <ul>
              <li>{val}</li>
            </ul>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NotificationModal;
