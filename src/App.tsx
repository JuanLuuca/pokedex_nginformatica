import './App.css';
import PublicRoutes from './routes/PrivateRoutes';
import PrivateRoutes from './routes/PrivateRoutes';

function App() {
  const getToken = localStorage.getItem('key')

  return getToken ? <PrivateRoutes /> : <PublicRoutes />
}

export default App;