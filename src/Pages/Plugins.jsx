import React from 'react'
import SideBar from '../Component/verticalNavBar/SideBar'
import Box from '@mui/material/Box';
function plugins() {
  return (
    <Box sx={{ display: 'flex' }}>
    <SideBar />
    <h1>Plugins</h1>
</Box>
  )
}

export default plugins
