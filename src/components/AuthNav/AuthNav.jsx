import { Link } from 'components/Navigation/Navigation';
import { AuthNavList } from './AuthNav.styled';
const AuthNav = () => {
  return (
    <>
      <AuthNavList>
        <li>
          <Link to={'/register'}>Registration</Link>
        </li>
        <li>
          <Link to={'/login'}>Login</Link>
        </li>
      </AuthNavList>
    </>
  );
};

export default AuthNav;
