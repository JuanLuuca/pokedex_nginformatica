import { Routes, Route } from 'react-router-dom'

function PrivateRoutes() {

  return (
    <Routes>
      <Route path="/" element={""}></Route>
      <Route path="/register" element={""}></Route>
    </Routes>
  )
}

export default PrivateRoutes