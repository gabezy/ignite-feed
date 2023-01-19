import React, { FormEvent } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { UserName, UserRole, Link, TagWrapper } from "../styles/GlobalStyle";
import {
  PostContent,
  PostHeader,
  PostAuthor,
  Wrapper,
  CommentList,
} from "../styles/Post";
import { FormComment } from "./FormComment";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { COMMENT1, COMMENT2 } from "../Api";
import { useForm } from "../Hooks/useForm";

interface PostContent {
  type: string;
  content: string | string[];
}

interface PostProps {
  avatarUrl: string;
  name: string;
  role: string;
  post: PostContent[];
  publishedAt: Date;
}

export const Post = ({
  avatarUrl,
  name,
  role,
  post,
  publishedAt,
}: PostProps) => {
  const [comments, setComments] = React.useState([COMMENT1, COMMENT2]);
  const newCommentText = useForm();

  const publishedDateTitle = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();
    if (newCommentText.validate()) {
      const newComment = {
        userAvatar: "https://github.com/gabezy.png",
        userName: "Gabriel Moreira",
        date: new Date(),
        message: newCommentText.value,
        likes: 0,
      };
      setComments((prev) => [...prev, newComment]);
      newCommentText.setValue("");
    }
  };

  const deleteComment = (commentToDeleteDate: Date) => {
    const commentsWithoutDeletedOne = comments.filter(({ date }) => {
      return date !== commentToDeleteDate;
    });
    setComments(commentsWithoutDeletedOne);
  };

  return (
    <>
      <Wrapper>
        <PostHeader>
          <PostAuthor>
            <Avatar src={avatarUrl} />
            <div>
              <UserName margin="none">{name}</UserName>
              <UserRole margin="none">{role}</UserRole>
            </div>
          </PostAuthor>
          <time title={publishedDateTitle} dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow}
          </time>
        </PostHeader>
        <PostContent>
          {post.map(({ type, content }) => {
            if (type === "paragraph" && typeof content === "string")
              return <p key={content}>{content}</p>;
            else if (type === "link" && typeof content === "string")
              return (
                <Link href="#" key={content}>
                  {content}
                </Link>
              );
            else if (type === "tags" && Array.isArray(content))
              return (
                <TagWrapper key={type}>
                  {content.map((p) => (
                    <Link key={p} href="#">
                      {p}
                    </Link>
                  ))}
                </TagWrapper>
              );
          })}
        </PostContent>
        <FormComment
          handleSubmit={handleCreateNewComment}
          handleNewCommentText={newCommentText.handleValue}
          newCommentText={newCommentText.value}
          error={newCommentText.error}
        />
        <CommentList>
          {comments.map(({ userAvatar, userName, date, message, likes }) => (
            <Comment
              key={date.toISOString()}
              userAvatar={userAvatar}
              userName={userName}
              date={date}
              message={message}
              likes={likes}
              onDeteleComment={deleteComment}
            />
          ))}
        </CommentList>
      </Wrapper>
    </>
  );
};
