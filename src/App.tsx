import { RouterProvider } from "react-router-dom";
import styled from "styled-components";
import Router from "./Router";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <RouterProvider router={Router} />
      </StyledApp>
    </>
  );
}

export default App;

const StyledApp = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
`;
