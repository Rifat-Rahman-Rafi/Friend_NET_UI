import React from "react";
import { Link } from "react-router-dom";

import { TableRow, TableCell, Button, Typography } from "@mui/material";

const FindJobsTable = ({ toys }) => {

    console.log("tots",toys);
    const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <TableRow>
      <TableCell>
        <div style={{ display: "flex", alignItems: "center" }}>


               <Typography variant="body1" style={{ fontWeight: "bold",textAlign: "center" }}>
               {toys.jobTitle}
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
        {toys.companyName}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="body2" style={{ textAlign: "center" }}>
          ${toys.salary}
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
