import styled from "styled-components";
import TodoDetail from "./TodoDetail";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function Home() {
  return (
    <StyledHome>
      <Header>
        <span>Todo</span>
      </Header>
      <Body>
        <TodoList />
        <Container>
          <TodoDetail />
          <AddTodo />
        </Container>
      </Body>
    </StyledHome>
  );
}

export default Home;

const StyledHome = styled.div`
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

const Container = styled.div`
  height: 610px;
  width: 410px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  border-radius: 10px;
`;
