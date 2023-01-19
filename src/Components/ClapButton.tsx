import React from "react";
import styled from "styled-components";
import { green300, grey300 } from "../styles/Variables";
import { ThumbsUp } from "phosphor-react";

const ClapButtonS = styled.button`
  background: transparent;
  border: none;
  font-size: 0.875rem;
  font-weight: bold;
  color: ${({ isLiked }: { isLiked: boolean }) =>
    isLiked ? green300 : grey300};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:focus,
  &:hover {
    outline: none;
  }
  &:hover {
    color: ${green300};
  }
  &:hover svg {
    color: inherit;
  }
`;

interface ClapButtonProps {
  likesCount: number;
  handleClickLikeButton: () => void;
  isLiked: boolean;
}

export const ClapButton = ({
  likesCount,
  handleClickLikeButton,
  isLiked,
}: ClapButtonProps) => {
  return (
    <ClapButtonS onClick={handleClickLikeButton} isLiked={isLiked}>
      <ThumbsUp />
      Aplaudir • {likesCount}
    </ClapButtonS>
  );
};
