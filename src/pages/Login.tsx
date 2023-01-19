import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Form from "../components/auth/Form";
import { useMutation } from "react-query";
import { login } from "../api";

function Login() {
  const navigate = useNavigate();

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

  return (
    <StyledLogin>
      <Header>
        <span>Log in</span>
      </Header>
      <Body>
        <Form submitText="Log In" />
      </Body>
      <Footer>
        <span>
          회원가입은 <Link to={"/auth/signup"}>여기를</Link> 클릭해 주세요.
        </span>
      </Footer>
    </StyledLogin>
  );
}

export default Login;

const StyledLogin = styled.div`
  height: 500px;
  width: 700px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

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
