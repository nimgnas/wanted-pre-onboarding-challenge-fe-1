import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Auth() {
  return (
    <StyledAuth>
      <AuthContainer>
        <Outlet />
      </AuthContainer>
    </StyledAuth>
  );
}

export default Auth;

const StyledAuth = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
`;

const AuthContainer = styled.div`
  height: 500px;
  width: 700px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
