import styled,{keyframes} from "styled-components"


const Title = styled.h1`
  color: ${(props)=>props.theme.textColor}
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props)=>props.theme.backgroundColor};
`;


function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
