import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width : 100vw;
    height : 6vh;
    background-color : lightgreen;
    position : fixed;
    top : 0;

    & > div{
        margin : 0;
        padding : 0;
    }

`

class Banner extends React.Component{
    render(){
        return(
            <>
            <Wrapper>
            <div>Banner</div>
            </Wrapper>
            </>
        )
    }
}

export default Banner