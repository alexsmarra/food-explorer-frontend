import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Menu } from '../pages/Menu'
import { NewDish } from '../pages/NewDish'
import { DishDetails } from '../pages/DishDetails'
import { EditDish } from '../pages/EditDish'

export function AppRoutes() {
   return (
      <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/menu' element={<Menu />}/>
         <Route path='/newDish' element={<NewDish />}/>
         <Route path='/details/:id' element={<DishDetails />}/>
         <Route path='/editDish/:id' element={<EditDish />}/>
      </Routes>
   )
}


