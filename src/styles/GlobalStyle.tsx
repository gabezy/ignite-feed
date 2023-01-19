import styled, { createGlobalStyle } from "styled-components";
import {
  green300,
  green500,
  grey100,
  grey300,
  grey900,
  mobile,
  white,
} from "./Variables";

export const GlobalStyle = createGlobalStyle`
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${green500}
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${grey900};
    color: ${white};
  }
  img {
    display: block;
    max-width: 100%;
  }
  ul {
    list-style: none
  }
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  button {
    cursor: pointer;
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    @media ${mobile} {
      font-size: 87.5%;
      
    }
  }
  button {
    background: none;
    border: none;
    outline: none;
  }
`;

export const Wrapper = styled.section`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 2rem;
  align-items: flex-start;
  @media ${mobile} {
    grid-template-columns: 1fr;
  }
`;

interface UserParagraph {
  margin: string;
}

export const UserName = styled.p<UserParagraph>`
  color: ${grey100};
  line-height: 1.6;
  margin: ${({ margin }) => margin};
  font-weight: bold;
`;
export const UserRole = styled.p<UserParagraph>`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${grey300};
  margin: ${({ margin }) => margin};
`;

export const Link = styled.a`
  color: ${green300} !important;
  font-weight: bold;
  line-height: 1.6;
  &:hover {
    text-decoration: underline;
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
