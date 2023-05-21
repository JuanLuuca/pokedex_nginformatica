import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';

function App() {
  const getToken = localStorage.getItem('key')

  //return getToken ? <PrivateRoutes /> : <PublicRoutes />
  return <PublicRoutes />
}

export default App;