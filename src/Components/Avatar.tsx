import { ImgHTMLAttributes } from "react";
import styled from "styled-components";
import { green500, grey800 } from "../styles/Variables";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

const AvatarS = styled.img`
  border-radius: 8px;
  width: ${({ hasBorder }) => (hasBorder ? "calc(50px + 12px)" : "50px")};
  height: ${({ hasBorder }) => (hasBorder ? "calc(50px + 12px)" : "50px")};
  border: ${({ hasBorder }) => (hasBorder ? `4px solid ${grey800}` : "none")};
  box-shadow: ${({ hasBorder }) =>
    hasBorder ? `0 0 0 2px ${green500}` : "none"};
  object-fit: cover;
  object-position: center center;
`;

export const Avatar = ({ hasBorder = true, ...props }: AvatarProps) => {
  return <AvatarS hasBorder={hasBorder} {...props} />;
};
