import { Link, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { IAuthContent } from ".";
import AuthForm from "./AuthForm";

function SignUp() {
  const { signUpMutate } = useOutletContext<IAuthContent>();
  return (
    <>
      <Header>
        <span>Sign up</span>
      </Header>
      <Body>
        <AuthForm mutateFn={signUpMutate} />
      </Body>
      <Footer>
        <span>
          로그인은 <Link to={"/auth/login"}>여기를</Link> 클릭해 주세요.
        </span>
      </Footer>
    </>
  );
}

export default SignUp;

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
