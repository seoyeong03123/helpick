import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Wrapper = styled.div`
    width : 100vw;
    height : 200vh;
    background-color : transparent;
    margin : 0;
    overflow-x: hidden; 
`

const MainWrapper = styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
    box-sizing : border-box;
    padding : 6vh 0 0 0;
    top : 0;
    background-image: url("/img/note.png");
    background-repeat : no-repeat;
    background-size : 100% 100%;
`

const MenuWrapper = styled.div`
    width : 100vw;
    height : 100vh;
    box-sizing : border-box;
    padding : 6vh 0 0 0;
    background-color : lightsteelblue;
    display : flex;
    flex-wrap : wrap;
    justify-content : center;
    align-items : center;
`

const Gotogame_wrapper = styled.div`
    width : 70vw;
    height : 70vh;
    /* background-color : lightgray; */
    display : flex;
    flex-wrap : wrap;
    justify-content : space-around;
    align-items : center;

`

const Gotogame = styled.div`
    width : 30vw;
    height : 30vh;
    padding : 2vh;
    border : 1px solid black;
    box-sizing : border-box;
    border-radius : 20px;
    background-color : white;
`
const StyledLink = styled(Link)`

    text-decoration : none;
    color : black;

`
const LeftBox = styled.div`
    width : 50%;
    height : 100%;

`

const RightBox = styled(LeftBox)`
    padding : 15vh 10vw;
    
`

const Title = styled.div`
    font-size : 7.2em;
    color: darkblue;
`

const TitleText = styled.div`
    color : black;
    font-family: 'Hi Melody', cursive;
    /* font-family: 'Poor Story', cursive;
    font-family: 'Gaegu', cursive; */
    font-size : 2em;

`

const GoMain = styled.div`
    background-image : url('/img/postit-red.png');
    background-size : contain;
    background-repeat : no-repeat;
    position : fixed;
    left : 0;
    top : 20vh;
    width : 364px;
    height : 82px;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 2em;
`

const GoMenu = styled.div`
    background-image : url('/img/postit-purple.png');
    background-size : contain;
    background-repeat : no-repeat;
    position : fixed;
    left : 0;
    top : 35vh;
    width : 364px;
    height : 82px;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 2em;

`

class Main extends React.Component {

    componentDidMount(){
        document.title = "Helpick"
      }

    render(){
        return(
            <>
            <link href="https://fonts.googleapis.com/css?family=Hi+Melody&display=swap" rel="stylesheet"></link>

                <Wrapper>
                    <GoMain>Main</GoMain>
                    <GoMenu>Menu</GoMenu>

                    <MainWrapper >
                        <LeftBox>

                        </LeftBox>
                        <RightBox>
                            <Title>HELPICK</Title>
                            <TitleText>당신의 선택을 도와드림</TitleText>
                        </RightBox>
                    </MainWrapper>

                    <MenuWrapper>
                        <Gotogame_wrapper>
                            <StyledLink to="/lot"><Gotogame>Lot</Gotogame></StyledLink>
                            <StyledLink to="/roulette"><Gotogame>Roulette</Gotogame></StyledLink>
                            <StyledLink to="/quiz"><Gotogame>Quiz</Gotogame></StyledLink>
                            <StyledLink to=""><Gotogame>X</Gotogame></StyledLink>
                        </Gotogame_wrapper>
                    </MenuWrapper>

                </Wrapper>
            </>
        )
    }
}

export default Main;