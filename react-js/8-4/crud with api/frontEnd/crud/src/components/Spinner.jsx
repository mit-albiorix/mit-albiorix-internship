import React from "react";
// import "../../assests/css/Spinner.css";     import * as React from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import './../assests/css/Spinner.css'

function Spinner() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </>
  );
}

export default Spinner;
