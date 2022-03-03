import styled,{keyframes} from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;
`;
const rotationAnimation = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius: 0%;
  }
  50%{
    transform: rotate(360deg);
    border-radius: 50%;
  }
  100%{
    transform:rotate(0deg);
    border-radius: 0%;
  }
`;
 const Emoji=styled.span`
   font-size:36px;
 `;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation:${rotationAnimation} 2s linear infinite;
  ${Emoji}:hover{
      font-size:80px;
    }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="span">🔥</Emoji>
      </Box>
        <Emoji>😎</Emoji>
    </Wrapper>
  );
}

export default App;
