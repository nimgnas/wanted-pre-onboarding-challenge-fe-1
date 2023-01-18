import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { MutateFunction } from "react-query";
import styled from "styled-components";

interface IUser {
  email: string;
  password: string;
}

interface IProps {
  mutateFn: MutateFunction<unknown, unknown, IUser, unknown>;
  submitText: string;
}

const authValidateHandler = (email: string, password: string) => {
  const emailRegEx = /[a-z0-9]+@[a-z]+\.+[a-z]{2,3}/;
  return emailRegEx.test(email) && password.length >= 8;
};

function AuthForm({ mutateFn, submitText }: IProps) {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [isValidated, setIsValidated] = useState(false);
  const { email, password } = inputs;

  useEffect(() => {
    setIsValidated(authValidateHandler(email, password));
  }, [email, password]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateFn({ email, password });
  };

  return (
    <Form onSubmit={onSubmit}>
      <InputContent>
        <Input placeholder="Email" type="email" name="email" value={email} onChange={onChange} />
        <Input placeholder="Password" type="password" name="password" value={password} onChange={onChange} />
      </InputContent>
      <SubmitWrapper>
        <Button type="submit" disabled={!isValidated}>
          {submitText}
        </Button>
      </SubmitWrapper>
    </Form>
  );
}

export default AuthForm;

const Form = styled.form`
  height: 200px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
`;

const Input = styled.input`
  height: 50px;
  border: none;
  padding: 0 2em;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }

  &:focus {
    outline: none;
  }
`;

const SubmitWrapper = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  height: 100%;
  width: 100px;
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray};
  font-weight: 600;
  cursor: pointer;
`;
