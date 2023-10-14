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
  const { userinfo, usernotifications } = useSelector((state) => state?.userinfo);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const userId = JSON.parse(localStorage?.getItem("profile"));
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
                {usernotifications?.usernotifications?.notification?.length}
              </span>
            ) : null}
          </div>
        </div>
      )}
      {/* <Dialog open={open} onClose={handleClose} >
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
      </Dialog> */}

      <Dialog open={open} onClose={handleClose}>
  <DialogContent>
    <h3>Your Notifications</h3>
    {!usernotifications?.usernotifications?.notification.length ? (
      <div>
        <h6>No Notifications</h6>
      </div>
    ) : (
      <ul>
        {usernotifications?.usernotifications?.notification
          .slice(-5) // Get the last 5 notifications
          .map((val, index) => (
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





