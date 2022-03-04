import { useEffect, useState } from "react";
import { useParams,useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    padding: 0 20px;
    max-width: 480px;
    margin:10px auto;
`;
const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;
const Title = styled.h1`
    color:${(props)=>props.theme.accentColor};
    font-size:48px;
`;
const Loader = styled.span`
    text-align: center;
    display: block;
`;

interface Params{
    coinId:string;
};

interface StateParams{
    name:string;
};



function Coin(){
    const [loading,setLoading] = useState(true);
    const {coinId} = useParams<Params>();
    const {state} = useLocation<StateParams>();
    return(
        <Container>
            <Header>
                <Title>{state?.name || "Loading..."}</Title>
            </Header>
            {loading ? (
                <Loader>Loading...</Loader>
            ) :( null)}
        </Container>
    );
}
export default Coin;