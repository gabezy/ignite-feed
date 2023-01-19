import styled from "styled-components";

export const Error = styled.p`
  color: #00e676;
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 1rem;
  &::before {
    content: "*";
    margin-right: 5px;
  }
`;
