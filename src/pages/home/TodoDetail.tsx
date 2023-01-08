import styled from "styled-components";

function TodoDetail() {
  return (
    <StyledTodoDetail>
      <Header>
        <span className="arrow">﹤</span>
        <span className="title">타이틀</span>
        <span className="delete">X</span>
      </Header>
      <Body>
        <p></p>
      </Body>
      <Footer>
        <span>수정</span>
      </Footer>
    </StyledTodoDetail>
  );
}

export default TodoDetail;

const StyledTodoDetail = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Header = styled.div`
  height: 50px;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${({ theme }) => theme.colors.white};
  }

  .arrow,
  .delete {
    &:hover {
      color: ${({ theme }) => theme.colors.blue};
      cursor: pointer;
    }
  }
`;

const Body = styled.div`
  height: 110px;
  padding: 10px 20px;
  margin: 0px 20px;
  background-color: ${({ theme }) => theme.colors.lightBlack};

  p {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Footer = styled.div`
  height: 40px;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span {
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
      cursor: pointer;
    }
  }
`;
