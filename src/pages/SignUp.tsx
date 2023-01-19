import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Form from "../components/auth/Form";
import { useMutation } from "react-query";
import { signUp } from "../api";

function SignUp() {
  const navigate = useNavigate();

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

  return (
    <StyledSignUp>
      <Header>
        <span>Sign up</span>
      </Header>
      <Body>
        <Form submitText="Sign Up" />
      </Body>
      <Footer>
        <span>
          로그인은 <Link to={"/auth/login"}>여기를</Link> 클릭해 주세요.
        </span>
      </Footer>
    </StyledSignUp>
  );
}

export default SignUp;

const StyledSignUp = styled.div`
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
