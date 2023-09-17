import { Navigate } from 'react-router-dom';
import { selectors } from 'redux/selectors';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ redirectTo, component }) {
  const isLoggedIn = useSelector(selectors.selectIsLoggedIn);

  return isLoggedIn ? component : <Navigate to={redirectTo} />;
}
