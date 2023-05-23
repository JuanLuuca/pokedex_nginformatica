import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const getToken = localStorage.getItem('token');

  const navigate = useNavigate();

  useEffect(() => {
    if(getToken) {
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [getToken])

  return getToken ? <PrivateRoutes /> : <PublicRoutes />
}

export default App;