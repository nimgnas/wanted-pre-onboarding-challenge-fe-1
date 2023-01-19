import styled from "styled-components";

function AddTodo() {
  return (
    <StyledAddTodo>
      <input className="title" placeholder="제목" />
      <input className="des" placeholder="내용" />
    </StyledAddTodo>
  );
}

export default AddTodo;

const StyledAddTodo = styled.form`
  height: 200px;
  width: 100%;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.black};

  input {
    width: 100%;
    border: none;
    padding: 0 2em;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.lightBlack};

    &:focus {
      outline: none;
    }
  }

  .title {
    height: 35px;
  }

  .des {
    height: 100px;
  }
`;
