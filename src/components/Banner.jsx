import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width : 100vw;
    height : 6vh;
    background-color : transparent;
    position : fixed;
    top : 0;

    & > div{
        margin : 0;
        padding : 0;
    }

`

const LeftBox = styled.div`
    width : 50%;
    height : 100%;
    text-align : left;
    padding : auto 15%;
    color : #000;
    font-size : 2em;
`

class Banner extends React.Component{
    render(){
        return(
            <>
            <Wrapper>
                <LeftBox>HELPICK</LeftBox>
            </Wrapper>
            </>
        )
    }
}

export default Banner