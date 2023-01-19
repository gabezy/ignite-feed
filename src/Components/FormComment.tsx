import React, { ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import { grey100, grey600 } from "../styles/Variables";
import { Button } from "./Form/Button";
import { Textarea } from "./Form/Textarea";
import { Error } from "../styles/Styles";

export const PostComment = styled.form`
  border-top: 1px solid ${grey600};
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > h3 {
    color: ${grey100};
    font-size: 1rem;
    line-height: 1.6;
  }
  & > button {
    align-self: flex-start;
  }
  &:focus-within > div {
    visibility: visible;
    max-height: none;
  }
`;

interface FormCommentProps {
  handleSubmit: (Event: FormEvent) => void;
  handleNewCommentText: ({ target }: ChangeEvent<HTMLTextAreaElement>) => void;
  newCommentText: string;
  error: string | boolean;
}

export const FormComment: React.FC<FormCommentProps> = ({
  handleSubmit,
  handleNewCommentText,
  newCommentText,
  error,
}) => {
  return (
    <PostComment onSubmit={handleSubmit}>
      <h3>Deixe seu feedback</h3>
      <Textarea
        id="text"
        name="text"
        handleNewCommentText={handleNewCommentText}
        newCommentText={newCommentText}
      />
      <div>
        {typeof error === "string" && error && <Error>{error}</Error>}
        <Button disabled={error ? true : false}>Publicar</Button>
      </div>
    </PostComment>
  );
};
