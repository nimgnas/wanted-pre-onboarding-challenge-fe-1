import styled from "styled-components";

function TodoList() {
  return (
    <Content>
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
    </Content>
  );
}

export default TodoList;

const Content = styled.div`
  height: 610px;
  width: 410px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  overflow: auto;
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
  height: 45px;
  width: 45px;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  position: absolute;
  bottom: 0;
  right: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
