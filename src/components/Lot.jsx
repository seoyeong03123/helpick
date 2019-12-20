import React from 'react';
import styled from 'styled-components';
import { stat, unwatchFile } from 'fs';
import { isBigIntLiteral } from '@babel/types';


const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    position : absolute;
    top : 0;


    font-size : 2em;
    text-align : center;
    background-color : pink;
`

const Jb = styled.div`
        margin : 20px;
`

const Button = styled.div`
    width : 300px;
    height : 80px;
    border-radius : 10px;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color : rgba(255, 255, 255, 0.5);
    color : darkblue;
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
            let jb = document.getElementsByClassName("jb")[0];
            jb.innerHTML = '';
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
 

    red = () =>{
        var img = document.createElement("img");
        let jb = document.getElementsByClassName("jb")[0];
        img.width = 180;

        img.src = '/img/red.png';
        jb.appendChild(img);

        // this.setAttribute('onclick', 'check()');
        img.addEventListener('click', function(e){
            var tgt = e.target;
              tgt.parentNode.removeChild(tgt);
              alert("통과");
        });
    }

    white = () =>{
        var img = document.createElement("img");
        let jb = document.getElementsByClassName("jb")[0];
        img.width = 180;

        img.src = '/img/white.png';
        jb.appendChild(img);

        img.addEventListener('click', function(e){
            var tgt = e.target;
              tgt.parentNode.removeChild(tgt);
              alert("꽝");
        });
    }

    purple = () => {
        var img = document.createElement("img");
        let jb = document.getElementsByClassName("jb")[0];
        img.width = 180;

        img.src = '/img/purple.png';
        jb.appendChild(img);

        img.addEventListener('click', function(e){
            var tgt = e.target;
              tgt.parentNode.removeChild(tgt);
              alert("통과");
        });
    }

    green = () => {
        var img = document.createElement("img");
        let jb = document.getElementsByClassName("jb")[0];
        img.width = 180;

        img.src = '/img/green.png';
        jb.appendChild(img);

        img.addEventListener('click', function(e){
            var tgt = e.target;
              tgt.parentNode.removeChild(tgt);
              alert("통과");
        });
    }
    
    yellow = () => {
        var img = document.createElement("img");
        let jb = document.getElementsByClassName("jb")[0];
        img.width = 180;

        img.src = '/img/yellow.png';
        jb.appendChild(img);

        img.addEventListener('click', function(e){
            var tgt = e.target;
              tgt.parentNode.removeChild(tgt);
              alert("통과");
        });
    }

    blue = () => {
        var img = document.createElement("img");
        let jb = document.getElementsByClassName("jb")[0];
        img.width = 180;

        img.src = '/img/blue.png';
        jb.appendChild(img);

        img.addEventListener('click', function(e){
            var tgt = e.target;
              tgt.parentNode.removeChild(tgt);
              alert("통과");
        });
    }


    //lot창 띄우고 클릭 한번 하게 만들기 제비섞기 버튼 누르면 변하게끔
    render(){
        var img = document.createElement("img");
        let jb = document.getElementsByClassName("jb")[0];
        img.width = 180;
        return(
            <>
            <Wrapper>
                {/* <div className="myDiv">제비섞기</div> */}
                <div>추첨할 인원수{this.state.num}명</div>
                <Button onClick = {this.jb}>제비섞기</Button>
                <Jb className="jb"></Jb>

                <p>▶돌아가기</p>
            </Wrapper>
            </>
        )
    }
}

export default Lot