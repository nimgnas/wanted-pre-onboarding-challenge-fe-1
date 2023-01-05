import { Link } from "react-router-dom";
import styled from "styled-components";

function Login() {
  return (
    <>
      <Header>
        <span>Log in</span>
      </Header>
      <Body>
        <Form>
          <InputContainer>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
          </InputContainer>
          <SubmitWrapper>
            <Button type="submit">Log in</Button>
          </SubmitWrapper>
        </Form>
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
  font-size: ${({ theme }) => theme.fontSize.lg};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
`;

const Body = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const Form = styled.form`
  height: 200px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: teal;
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
`;

const Footer = styled.div`
  height: 100px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.base};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.black};

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;
