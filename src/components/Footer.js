import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    IconButton
  } from '@mui/material'

  import SensorDoorIcon from '@mui/icons-material/SensorDoor';
const Footer = () => {
  return (
    <AppBar position="static" color="primary" >
    <Container maxWidth="md">

      <Toolbar sx={{justifyContent:'center'}}>
      <IconButton href="/">
       <SensorDoorIcon/>
        </IconButton>

        <Typography color="inherit">
          &copy; 2023 Kit Fuderich
        </Typography>
      </Toolbar>

    </Container>
  </AppBar>
  )
}

export default Footer