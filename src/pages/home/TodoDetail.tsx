import styled from "styled-components";

function TodoDetail() {
  return (
    <Content>
      <Wrapper></Wrapper>
    </Content>
  );
}

export default TodoDetail;

const Content = styled.div`
  height: 610px;
  width: 410px;
  margin: 20px;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  height: 300px;
  width: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.black};
`;
