import styled from "styled-components"


export const BackgroundImage=styled.div`
background: linear-gradient(to left, black 0%, #8B0000 100%);
background-repeat: no-repeat;
background-size:  100%;
height: 100%;
width:100%;
position: relative;
`

export const BgLines=styled.div`
position: absolute;
display: block;
width: 58%;
top: 30%;
left: 19%;
font-size:42px;
font-weight:bold;
color: #fff;
text-align: center;
text-shadow: 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
padding:2%;
@media (max-width: 780px) {
  display: none;
       
    }
`
export const BgLinesMedia= styled.div`
position: absolute;
display: none;
width: 60%;
top: 40%;
left: 19%;
font-size:42px;
font-weight:bold;
color: #fff;
text-align: center;
text-shadow: 0 0 15px	#FF0000, 0 0 20px #FF0000, 0 0 25px 	#FF0000, 0 0 30px 	#FF0000, 0 0 35px	#FF0000;
padding:2%;
@media (max-width: 780px) {
  display: block;
       
    }
`

export const ImgMovie= styled.img`
margin-top: 4%;
 width: 90%;
  height: 91.5vh;
  opacity: 0.5;

`
