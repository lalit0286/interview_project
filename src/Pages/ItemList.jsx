import React from 'react'
import SideBar from '../Component/verticalNavBar/SideBar'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ItemNavBar from '../Component/verticalNavBar/ItemNavBar';
import Cards from '../Component/verticalNavBar/Cards';

function ItemList() {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <ItemNavBar />
        <Cards />
      </Box>
    </Box>
  )
}

export default ItemList
