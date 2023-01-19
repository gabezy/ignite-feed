import styled from "styled-components";
import { grey100, grey300, grey800 } from "./Variables";

export const Wrapper = styled.article`
  width: 100%;
  background: ${grey800};
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  gap: 1.5rem;
  padding: 2.5rem;
  border-radius: 8px;
  & + & {
    margin-top: 2rem;
  }
`;

export const PostHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  & > time {
    line-height: 1.6;
    font-size: 0.875rem;
    color: ${grey300};
  }
`;

export const PostAuthor = styled.div`
  justify-self: flex-start;
  display: flex;
  justify-content: center;
  gap: 1rem;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & strong {
      line-height: 1.6;
      color: ${grey100};
      font-weight: bold;
    }
    & span {
      line-height: 1.6;
      font-size: 0.875rem;
      color: ${grey300};
    }
  }
`;

export const PostContent = styled.div`
  display: grid;
  align-items: center;
  & p {
    color: ${grey300};
    line-height: 1.6;
  }
  & > div {
    display: flex;
    gap: 5px;
  }
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
