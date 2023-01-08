import styled from "styled-components";
import TodoDetail from "./TodoDetail";
import TodoList from "./TodoList";

function Home() {
  return (
    <StyledHome>
      <TodoContainer>
        <Header>
          <span>Todo</span>
        </Header>
        <Body>
          <TodoList />
          <TodoDetail />
        </Body>
      </TodoContainer>
    </StyledHome>
  );
}

export default Home;

const StyledHome = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
`;

const TodoContainer = styled.div`
  height: 700px;
  width: 900px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.lightBlack};
`;

const Header = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
  }
`;

const Body = styled.div`
  height: 650px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
`;
