import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectors } from 'redux/selectors';

export default function PublicRoute({ redirectTo, component }) {
  const isLoggedIn = useSelector(selectors.selectIsLoggedIn);
  const shouldRedirect = isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
}
