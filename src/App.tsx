import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet, useNavigate, useOutlet } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import theme from "./styles/theme";

function App() {
  const queryClient = new QueryClient();
  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/auth/login");
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledApp>
          <Outlet />
        </StyledApp>
      </ThemeProvider>
    </QueryClientProvider>
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
