import React from "react";
import styled from "styled-components";
import igniteLogo from "../assets/ignite-logo.svg";

const HeaderNav = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 0;
  background: #202024;
  & img {
    height: 2rem;
  }
`;

export const Header = () => {
  return (
    <HeaderNav>
      <img src={igniteLogo} alt="Logo ignite" />
      <h1>Ignite feed</h1>
    </HeaderNav>
  );
};
