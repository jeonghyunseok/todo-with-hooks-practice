import React, {useContext} from 'react';
import {NavLink, Link} from 'react-router-dom';
import styled from 'styled-components';
import {AuthContext} from '../contexts/AuthContext';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2x;
  border-bottom: 1px solid #efefef;
  background-color: #fefefe;
  a {
    &.active {
      border-bottom: 2px solid pink;
    }
  }
`;

const LogoutMenu = styled.div`
  padding-right: 20px;
`;

function Navigation({auth}) {
  const {isAuthenticated, signout} = useContext(AuthContext);
  return (
    <Nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/todo-list">Todos</NavLink>
      <NavLink to="/blog/">blog</NavLink>
      <NavLink to="/guest/">guest</NavLink>
      {isAuthenticated && (
        <LogoutMenu onClick={() => signout()}>
          <Link exact to={'/'}>
            로그아웃
          </Link>
        </LogoutMenu>
      )}
    </Nav>
  );
}

export default Navigation;
