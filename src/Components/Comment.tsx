import React from "react";
import styled from "styled-components";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Trash } from "phosphor-react";
import { UserName, UserRole } from "../styles/GlobalStyle";
import { grey300, grey600, red500 } from "../styles/Variables";
import { Avatar } from "./Avatar";
import { ClapButton } from "./ClapButton";

const WrapperComment = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  & + & {
    margin-top: 1.5rem;
  }
`;
const CommentBox = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
`;

const WrapperContent = styled.div`
  width: 100%;
  background: ${grey600};
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  & time {
    font-size: 0.75rem;
    line-height: 1.6;
    color: ${grey300};
  }
  & > button {
    align-self: flex-start;
    color: ${grey300};
    line-height: 0;
    border-radius: 2px;
  }
  & > button:hover {
    color: ${red500};
  }
`;

interface CommentProps {
  userAvatar: string;
  userName: string;
  date: Date;
  message: string;
  likes: number;
  onDeteleComment: (commentDate: Date) => void;
}

export const Comment = ({
  userAvatar,
  userName,
  date,
  message,
  likes,
  onDeteleComment,
}: CommentProps) => {
  const [likesCount, setLikesCount] = React.useState(likes);
  const [isLiked, setIsLiked] = React.useState(false);

  const publishedDateTitle = format(date, "dd 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  });
  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
  });

  const handleDeleteComment = () => {
    onDeteleComment(date);
  };

  const handleClickLikeButton = () => {
    setLikesCount((prev) => prev + 1);
    setIsLiked(true);
  };

  return (
    <WrapperComment>
      <Avatar hasBorder={false} src={userAvatar} />
      <CommentBox>
        <WrapperContent>
          <div>
            <UserName margin="none">{userName}</UserName>
            <time title={publishedDateTitle} dateTime={date.toISOString()}>
              {publishedDateRelativeToNow}
            </time>
            <UserRole margin="1rem 0 0 0 ">{message}</UserRole>
          </div>
          <button title="Deletar comentário" onClick={handleDeleteComment}>
            <Trash size={24} />
          </button>
        </WrapperContent>
        <footer>
          <ClapButton
            likesCount={likesCount}
            handleClickLikeButton={handleClickLikeButton}
            isLiked={isLiked}
          />
        </footer>
      </CommentBox>
    </WrapperComment>
  );
};
