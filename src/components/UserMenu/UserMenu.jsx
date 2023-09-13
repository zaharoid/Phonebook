import { selectors } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from 'redux/operations';
import {
  UserContainer,
  ExitIcon,
  Button,
  UserName,
  User,
} from './UserMenu.styled';
import { ReactComponent as UserIcon } from 'icons/User.svg';

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectors.selectUsername);

  return (
    <UserContainer>
      {' '}
      <UserName>
        <UserIcon fill="#fff" width="25" height="25" />{' '}
        <User>Welcome, {user}</User>
      </UserName>
      <Button
        onClick={() => dispatch(authOperations.logout())}
        aria-label="logout"
      >
        <ExitIcon />
      </Button>
    </UserContainer>
  );
};

export default UserMenu;
