import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import { Header } from './AppBar.styled';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectors } from 'redux/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectors.selectIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
