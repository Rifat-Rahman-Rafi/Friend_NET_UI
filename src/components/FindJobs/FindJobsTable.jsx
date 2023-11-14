import React from "react";
import { Link } from "react-router-dom";

import { TableRow, TableCell, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { getalluserinfo } from "../../actions/userinfo";
import { useDispatch, useSelector } from 'react-redux';

const FindJobsTable = ({ toys }) => {

    // console.log("tots",toys);
    const user = JSON.parse(localStorage.getItem("profile"));

   //console.log(toys.email);

  //  const dispatch = useDispatch();
  // const alluserinfo = useSelector((state) => state?.userinfo?.alluserinfo);

  // useEffect(() => {
  //   dispatch(getalluserinfo());
  // }, [dispatch]);

  // const { userinfo, userinfomessage } = useSelector((state) => state?.userinfo);


  // // let allIds = userinfo?.data?.userInfor?.followeeId ;
  // // let allIdes2 = userinfo?.data?.userInfor?.followerId;
  
  // // allIds = allIds?.concat(allIdes2);

  // const allIds= [toys?.email]

  // //console.log(alluserinfo.userInfor);

  // // console.log(allIds)


  // const firstArray = alluserinfo.userInfor;
  

  
  // const emailsToFind = [toys?.sellerName];

  //console.log("emailsToFind",emailsToFind);
  
  // const matchingNames = [];
  
  // firstArray?.forEach((firstObj) => {
  //   const foundEmail = emailsToFind.find((name) => name === firstObj.name);
  //   //matchingNames.push({ name: foundEmail, email: firstObj.email });

  //    //console.log("foundEmail",firstObj.name,foundEmail)
  
  // });
  
   //console.log("MMMMMMMMMMM",matchingNames);
  
  
  const myID=user?.result?._id;

  return (
    <TableRow>
      <TableCell>
        <div style={{ display: "flex", alignItems: "center" }}>


               <Typography variant="body1" style={{ fontWeight: "bold",textAlign: "center" }}>
               {toys?.jobTitle}
          </Typography>
           
          
          
        </div>
      </TableCell>
      <TableCell>
        <Typography variant="subtitle1" style={{ fontWeight: "medium", color: "#333",textAlign: "center" }}>
          {toys?.sellerName}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="subtitle1" style={{ fontWeight: "medium", color: "#777",textAlign: "center" }}>
        {toys?.companyName}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="body2" style={{ textAlign: "center" }}>
          ${toys?.salary}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="subtitle2" style={{ color: "green",textAlign: "center" }}>
          {toys?.employType}
        </Typography>
      </TableCell>
      <TableCell align="center">








        {user ? (
          <Link to={`/jobDetail/${toys?._id}`}>
            <Button variant="contained" style={{  color: "white" }}>
              Details
            </Button>
          </Link>
        ) : (
          <Link to={`/login`}>
            <Button variant="contained" style={{  color: "white" }}>
              Details
            </Button>
          </Link>
        )}
      </TableCell>
    </TableRow>
  );
};

export default FindJobsTable;
