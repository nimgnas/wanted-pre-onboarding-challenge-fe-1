import { useEffect } from "react";
import { MutateFunction, useMutation } from "react-query";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login, signUp } from "../../api";

interface IUser {
  email: string;
  password: string;
}

export interface IAuthContent {
  loginMutate: MutateFunction<unknown, unknown, IUser, unknown>;
  signUpMutate: MutateFunction<unknown, unknown, IUser, unknown>;
}

function Auth() {
  const { mutate: loginMutate } = useMutation({
    mutationFn: login,
    onSuccess: ({ message, token }) => {
      alert(message);
      localStorage.setItem("token", token);
      navigate("/");
    },
    onError: (error) => {
      alert(error);
    },
  });

  const { mutate: signUpMutate } = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      alert(data.message);
      navigate("/auth/login");
    },
    onError: (error) => {
      alert(error);
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    const TOKEN = localStorage.getItem("token");
    if (TOKEN) {
      navigate("/");
    }
  }, []);

  return (
    <StyledAuth>
      <Outlet context={{ loginMutate, signUpMutate }} />
    </StyledAuth>
  );
}

export default Auth;

const StyledAuth = styled.div`
  height: 500px;
  width: 700px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
