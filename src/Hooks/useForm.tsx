import React, { ChangeEvent } from "react";

export const useForm = (type?: string | boolean) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState<string | boolean>(false);

  const validate = (value: string) => {
    if (!value.length) {
      setError("Campo obrigatório");
      return false;
    }
    setError(false);
    return true;
  };

  const handleValue = ({
    target,
  }: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (error) validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    error,
    handleValue,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};
