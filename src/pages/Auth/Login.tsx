import { Link, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { IAuthContent } from ".";
import AuthForm from "./AuthForm";

function Login() {
  const { loginMutate } = useOutletContext<IAuthContent>();
  return (
    <>
      <Header>
        <span>Log in</span>
      </Header>
      <Body>
        <AuthForm mutateFn={loginMutate} />
      </Body>
      <Footer>
        <span>
          회원가입은 <Link to={"/auth/signup"}>여기를</Link> 클릭해 주세요.
        </span>
      </Footer>
    </>
  );
}

export default Login;

const Header = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  span {
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Body = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const Footer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};

  span {
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.gray};
  }

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;
