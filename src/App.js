import React from 'react'
import SideBar from './Component/verticalNavBar/SideBar'
import { Route, Routes } from 'react-router-dom';
import ItemList from './Pages/ItemList';
import Categories from './Pages/Categories';
import Inventory from './Pages/Inventory';
import Plugins from './Pages/Plugins';
import Settings from './Pages/Settings';
import Variant from './Pages/Variant';
function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<ItemList />} />
        <Route exact path='/category' element={<Categories />} />
        <Route exact path='/inventory' element={<Inventory />} />
        <Route exact path='/variants' element={<Variant />} />
        <Route exact path='/plugins' element={<Plugins />} />
        <Route exact path='/settings' element={<Settings />} />
      </Routes>
    </div>
  )
}
export default App
