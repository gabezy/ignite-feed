import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { green300, green500, grey900, white } from "../../styles/Variables";

const ButtonPost = styled.button`
  background: ${green500};
  color: ${white};
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 8px;
  transition: all 0.1s;
  transform: translateY(-20px);
  opacity: 0;
  animation: slideDown 0.3s forwards;
  &:hover {
    background: ${green300};
  }
  &:disabled {
    background: ${grey900};
  }
  @keyframes slideDown {
    to {
      transform: initial;
      opacity: initial;
    }
  }
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  disabled: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, disabled }) => {
  return <ButtonPost disabled={disabled}>{children}</ButtonPost>;
};
