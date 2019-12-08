import React from 'react';
import styled from 'styled-components';
import { stat } from 'fs';
import { isBigIntLiteral } from '@babel/types';


const Wrapper = styled.div`
    width : 80%;
    height : 80%;
    background-color : pink;
`

class Lot extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num : 0,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.num !== nextProps.person) {
          return { num: nextProps.person };
        }
    
        return null;
    }

    jb = () => {
        let jjb = document.getElementsByClassName("jjb")[0];
        let imgBox = document.createElement("div");
        var img = document.createElement("img");
        img.width = 180;
        let myLot = new Array()
        // console.log('out');
        // if(parseInt(this.state.num) === 2){
        //     console.log("in")
        //     for(let i=0;i<parseInt(this.state.num);i++){

        //         img[i].src = '/img/red'+[i]+'.png';
        //         jjb.appendChild(img);
        //     }
        // }
        for (let i = 0; i < parseInt(this.state.num ); i++) {
            myLot[i] = new Image()
            myLot[i].src = "lot" + i + ".png";
            imgBox.appendChild(myLot[i]);
        }
        for (let i = 0; i < parseInt(this.state.num); i++) {
            imgBox.innerHTML= "<img src= '/img/lot"+[i]+".png' width='180px'>"
        }
        jjb.appendChild(imgBox);
    }


    //lot창 띄우고 클릭 한번 하게 만들기 제비섞기 버튼 누르면 변하게끔
    render(){
        
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