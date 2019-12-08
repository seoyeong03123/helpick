import React from 'react';
import styled from 'styled-components';
import { stat, unwatchFile } from 'fs';
import { isBigIntLiteral } from '@babel/types';


const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    background-color : pink;
    position : absolute;
    top : 0;
`

class Lot extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num : 0,
            input : 0
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.num !== nextProps.person) {
          return { num: nextProps.person };
        }
    
        return null;
    }

    jb = () => {
        var num = parseInt(this.state.num);
        this.setState({
            input : this.state.input+1
        })
        console.log(this.state.input)

        if(parseInt(this.state.input)!=0){        
            console.log("asdf");
            let jjb = document.getElementsByClassName("jjb")[0];
            jjb.innerHTML = '';
        }

        if(num === 2){
            this.red();
            this.white();
        }
        else if(num === 3){
            this.red();
            this.white();
            this.purple();
        }
        else if(num === 4){
            this.red();
            this.white();
            this.purple();
            this.green();
        }
        else if(num === 5){
            this.red();
            this.white();
            this.purple();
            this.green();
            this.yellow();
        }
        else if(num === 6){
            this.red();
            this.white();
            this.purple();
            this.green();
            this.yellow();
            this.blue();
        }
    }
 
    two = () => {
        this.red();
        this.white();
    }

    red = () =>{
        var img = document.createElement("img");
        let jjb = document.getElementsByClassName("jjb")[0];
        img.width = 180;

        img.src = '/img/red.png';
        jjb.appendChild(img);
    }

    white = () =>{
        var img = document.createElement("img");
        let jjb = document.getElementsByClassName("jjb")[0];
        img.width = 180;

        img.src = '/img/white.png';
        jjb.appendChild(img);
    }

    purple = () => {
        var img = document.createElement("img");
        let jjb = document.getElementsByClassName("jjb")[0];
        img.width = 180;

        img.src = '/img/purple.png';
        jjb.appendChild(img);
    }

    green = () => {
        var img = document.createElement("img");
        let jjb = document.getElementsByClassName("jjb")[0];
        img.width = 180;

        img.src = '/img/green.png';
        jjb.appendChild(img);
    }
    
    yellow = () => {
        var img = document.createElement("img");
        let jjb = document.getElementsByClassName("jjb")[0];
        img.width = 180;

        img.src = '/img/yellow.png';
        jjb.appendChild(img);
    }

    blue = () => {
        var img = document.createElement("img");
        let jjb = document.getElementsByClassName("jjb")[0];
        img.width = 180;

        img.src = '/img/blue.png';
        jjb.appendChild(img);
    }



    //lot창 띄우고 클릭 한번 하게 만들기 제비섞기 버튼 누르면 변하게끔
    render(){
        var img = document.createElement("img");
        let jjb = document.getElementsByClassName("jjb")[0];
        img.width = 180;
        return(
            <>
            <Wrapper>
                {/* <div className="myDiv">제비섞기</div> */}
                <div>추첨할 인원수{this.state.num}명</div>
                <div onClick = {this.jb}>제비섞기</div>
                <div className="jjb"></div>
            </Wrapper>
            </>
        )
    }
}

export default Lot