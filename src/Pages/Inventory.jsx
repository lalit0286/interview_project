import React from 'react'
import SideBar from '../Component/verticalNavBar/SideBar'
import Box from '@mui/material/Box';
function inventory() {
  return (
    <Box sx={{ display: 'flex' }}>
    <SideBar />
    <h1>Inventory</h1>
</Box>
  )
}

export default inventory

