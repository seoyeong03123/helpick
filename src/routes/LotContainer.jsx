import React from 'react';
import styled from 'styled-components';
import { tsPropertySignature } from '@babel/types';

import Lot from '../components/Lot';


const Wrapper = styled.div`
    width : 100vw;
    height : 100vh;
    background-color : skyblue;
    overflow-x : hidden;
    overflow-y : hidden;
`

const Select = styled.select`

`

const Option = styled.option`

`

const Btn = styled.div`
    width : 8vw;
    height : 4vh;
    background-color : blue;
    display:flex;
    text-align : center;
    justify-content : center;
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
                    <Option value ="1">선택</Option>
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