import styled from "styled-components";
import {
  green500,
  grey300,
  grey600,
  grey800,
  grey100,
  white,
} from "./Variables";

export const SideNav = styled.aside`
  background: ${grey800};
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  height: 300px;
  display: grid;
  grid-template-rows: auto 1fr 1fr;
`;

export const Cover = styled.img`
  width: 100%;
  height: 72px;
  object-fit: cover;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -4rem;
`;

export const SideFooter = styled.footer`
  border-top: 1px solid ${grey600};
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background: transparent;
    color: ${green500};
    border: 1px solid ${green500};
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
    text-align: center;
    font-weight: bold;
    transition: all 0.15s ease-in-out;
    &:hover {
      background: ${green500};
      color: ${white};
    }
  }
`;
