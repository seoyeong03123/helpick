import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Banner from '../components/Banner';

const Wrapper = styled.div`
    width : 100vw;
    height : 200vh;
    background-color : pink;
    margin : 0;
    overflow-x: hidden; 
`

const MainWrapper = styled.div`
    width : 100vw;
    height : 100vh;
    box-sizing : border-box;
    padding : 6vh 0 0 0;
    background-image : url("/img/spring_note.jpg");
    background-repeat : no-repeat;
    background-size : contain;
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

class Main extends React.Component {

    componentDidMount(){
        document.title = "Helpick"
      }

    render(){
        return(
            <>
                <Wrapper>

                    <Banner/>

                    <MainWrapper >
                        asdf
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