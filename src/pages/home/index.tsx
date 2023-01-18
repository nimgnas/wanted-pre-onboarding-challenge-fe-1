import styled from "styled-components";
import TodoDetail from "./TodoDetail";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { useMutation, useQuery } from "react-query";
import { createTodo, deleteTodo, getTodoById, getTodos, updateTodo } from "../../api";

function Home() {
  const { data: todoList } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos(token),
    onError: (error) => {
      alert(error);
    },
  });

  const { data: todo } = useQuery({
    queryKey: ["todos", todoId],
    queryFn: () => getTodoById(todoId),
    onError: (error) => {
      alert(error);
    },
  });

  const { mutate: createTodoMutate } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      console.log("작성완료");
    },
    onError: (error) => {
      alert(error);
    },
  });

  const { mutate: updateTodoMutate } = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      console.log("업데이트 완료");
    },
    onError: (error) => {
      alert(error);
    },
  });

  const { mutate: deleteTodoMutate } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      console.log("삭제 완료");
    },
    onError: (error) => {
      alert(error);
    },
  });

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
