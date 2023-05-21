import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';

function App() {
  const getToken = localStorage.getItem('token');

  return getToken ? <PrivateRoutes /> : <PublicRoutes />
}

export default App;