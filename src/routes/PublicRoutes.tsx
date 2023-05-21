import { Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Resgister } from '../pages/Register';

function PublicRoutes() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Resgister />}></Route>
      </Routes>
    </>
  )
}

export default PublicRoutes;
