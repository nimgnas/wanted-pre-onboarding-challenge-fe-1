import styled from "styled-components";

function Home() {
  return (
    <StyledHome>
      <TodoContainer>
        <Header>
          <span>Todo</span>
        </Header>
        <Body>
          <TodoListContent>
            <Todo>
              <span className="title">밥먹고 양치하기</span>
              <span className="arrow">&rarr;</span>
            </Todo>
            <Todo></Todo>
            <Todo></Todo>
            <Todo></Todo>
            <Todo></Todo>
            <Todo></Todo>
            <Todo></Todo>
            <Todo></Todo>
            <Todo></Todo>
            <AddTodoBtn>+</AddTodoBtn>
          </TodoListContent>
          <TodoDetailContent></TodoDetailContent>
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
  flex-direction: column;
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
`;

const TodoListContent = styled.div`
  height: 610px;
  width: 410px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  position: relative;
  overflow: auto;
`;

const TodoDetailContent = styled.div`
  height: 610px;
  width: 410px;
  margin: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Todo = styled.div`
  height: 70px;
  width: 100%;
  padding: 30px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.black};
  box-shadow: rgb(24, 24, 24) 3px 3px 6px 0px inset, rgba(31, 34, 40, 0.5) -3px -3px 6px 1px inset;

  .title {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 300;
  }

  .arrow {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.lg};
  }

  &:hover {
    .arrow {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

const AddTodoBtn = styled.div`
  height: 50px;
  width: 50px;
  font-size: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  position: sticky;
  bottom: 0;
  right: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
