import { ChangeEvent, TextareaHTMLAttributes } from "react";
import styled from "styled-components";
import { green500, grey300, grey900 } from "../../styles/Variables";

const TextArea = styled.textarea`
  background: ${grey900};
  border: none;
  border-radius: 8px;
  height: 6rem;
  padding: 13px 1rem;
  color: ${grey300};
  font-size: 1rem;
  line-height: 1.4;
  resize: none;
  transition: all 0.1s;
  &:hover {
    box-shadow: 0 0 0 2px ${green500};
  }
`;

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  newCommentText: string;
  handleNewCommentText: ({ target }: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<TextareaProps> = ({
  name,
  id,
  newCommentText,
  handleNewCommentText,
  ...props
}) => {
  return (
    <TextArea
      name={name}
      id={id}
      value={newCommentText}
      onChange={handleNewCommentText}
      placeholder={"Deixe seu comentário"}
      {...props}
    />
  );
};
