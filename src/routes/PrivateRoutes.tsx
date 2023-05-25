import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { FavoritePage } from '../pages/Favorite'
import { CapturePage } from '../pages/Capture'

function PrivateRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/favoritePokemons" element={<FavoritePage />}></Route>
      <Route path="/capturePokemons" element={<CapturePage />}></Route>
    </Routes>
  )
}

export default PrivateRoutes