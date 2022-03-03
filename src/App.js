import styled,{keyframes} from "styled-components"
const anim = keyframes`
  from{
    color:tomato;
  }
  to{
    color:blue;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;
  button{
    animation:${anim} 0.5s infinite;
  }
`;

const Box = styled.div`
  width:100px;
  height: 100px;
  background-color: ${(props)=>props.bgColor};
  animation:${anim} 1s linear infinite;
`;

const Circle=styled(Box)`
  border-radius: 50%;
`;

const Btn =styled.button`
  color:tomato;
  background-color: whitesmoke;
  border:none;
  border-radius: 9px;
`;
const Input = styled.input.attrs({required:true, maxLenght:10})`
  background-color:wheat;
`;

function App() {
  return (
  <Wrapper>
    <Box bgColor="teal">🔥</Box>
    <Circle bgColor="tomato">😎</Circle>
    <Btn>Log in</Btn>
    <Btn as="a">Home</Btn>
    <Input />
    <Input />
    <Input />
  </Wrapper>
  );
}

export default App;
