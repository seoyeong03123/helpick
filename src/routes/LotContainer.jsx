import React, {Fragment} from 'react';
import styled from 'styled-components';
import { tsPropertySignature } from '@babel/types';

import Lot from '../components/Lot';


const Wrapper = styled.div`
    width : 100vw;
    height : 100vh;
    background-color : skyblue;
    overflow-x : hidden;
    overflow-y : hidden;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;


`

const Select = styled.select`
    width: 120px;
    padding: .8em .5em;
    border: 1px solid #999;
    font-family: inherit;
    background: url('/img/btn.jpg') no-repeat 95% 50%;
    background-color : white;
    border-radius: 0px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;


`

const Option = styled.option`

`

const Btn = styled.div`

    width : 8vw;
    height : 7vw;
    border-radius : 10px;
    margin : 2vh;
    display:flex;
    justify-content : center;
    align-items : center;

    font-size : 2em;
    background-color : blue;
    color : white;

`
class LotContainer extends React.Component{
    constructor (props){
        super(props)
        this.state ={
            personnel :0,
            showComponent: false,
            value : 0,
            
        }
        this.handleChange = this.handleChange.bind(this);
    }

    LoadLot = () => {
        this.setState({
            showComponent : true,
        });
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    render(){
        return(
            <>
            <Wrapper>
                <Select value={this.state.value} onChange={this.handleChange}>
                    <Option value ="1">뽑을 인원 선택</Option>
                    <Option value ="2">2명</Option>
                    <Option value ="3">3명</Option>
                    <Option value ="4">4명</Option>
                    <Option value ="5">5명</Option>
                    <Option value ="6">6명</Option>
                </Select>
                <Btn onClick={this.LoadLot}>시작!</Btn>
                {this.state.showComponent ? <Lot person = {this.state.value}/> : null }
            </Wrapper>
            </>
        )
    }
}

export default LotContainer