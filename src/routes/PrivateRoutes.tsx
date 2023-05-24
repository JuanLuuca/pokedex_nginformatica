import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { FavoritePage } from '../pages/Favorite'

function PrivateRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/favoritePokemons" element={<FavoritePage />}></Route>
    </Routes>
  )
}

export default PrivateRoutes