import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { Nav, NavList } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectors } from 'redux/selectors';

export const Link = styled(NavLink)`
  display: block;

  text-decoration: none;
  line-height: normal;

  color: #111;
  transition: all 250ms linear;

  &.active {
    color: var(--milk-white);
  }

  @media only screen and (min-width: 768px) {
    padding: 6px 18px;
    height: 25px;
    border-radius: 8px;
    background-color: #bfbfbf;

    &.active {
      height: 25px;
      background-color: #123da1;
      &:hover {
        background-color: #072e89;
      }
    }
    &:hover {
      background-color: #ebeaea;
    }
  }
`;

const Navigation = () => {
  const isLoggedIn = useSelector(selectors.selectIsLoggedIn);
  return (
    <Nav>
      <NavList>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link to={'/contacts'}>Contacts</Link>
          </li>
        )}
      </NavList>
    </Nav>
  );
};

export default Navigation;
