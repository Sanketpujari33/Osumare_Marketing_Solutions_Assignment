import React from 'react';
import styled from 'styled-components';
import logoImg from '../assets/images/OsumareLogo0124.png';
const Nav = styled.nav`
    background-color: #f8f9fa;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 10;
`;

const Logo = styled.div`
  margin: 20px;
  img {
    height: 120px;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

const Button = styled.button`
  padding: 10px 22px;
  border-radius: 50px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  background: transparent;
  border: 1px solid #000;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff;
  }
`;

const Navbar = () => {

  return (
    <Nav>
      <Logo>
        <img src={logoImg} alt="logo" />
      </Logo>
      <NavBtn>
        <Button>Contact Us</Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;