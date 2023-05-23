import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'

function PrivateRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/" element={""}></Route> */}
    </Routes>
  )
}

export default PrivateRoutes