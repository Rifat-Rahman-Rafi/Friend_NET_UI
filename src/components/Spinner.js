import React from 'react'
import {Spinner} from "react-bootstrap"
import styled from 'styled-components'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const Spinnerr = ({text}) => {
  return (
    <Main>
        <Spinner animation="grow" variant="primary"/>
        <Box sx={{ display: 'flex' }}>
      <CircularProgress style={{width:"50px"}} />
      <h3 style={{margin:"20px"}}>Loading....</h3>
    </Box>
    </Main>
  )
}

export default Spinnerr

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  height: 100vh; /* Set the height to 100vh for vertical centering */
`;
