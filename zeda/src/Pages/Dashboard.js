import styled from "styled-components"


export const BackgroundImage=styled.div`
background: linear-gradient(to left, black 0%, #8B0000 100%);
background-repeat: no-repeat;
background-size:  100%;
height: 100%;
width:100%;
position: relative;
`
export const ContSearch= styled.div`
background: linear-gradient(to left, black 0%, #8B0000 100%);
padding:7% 5% 0.3% 5%;
width:90%;
margin: auto;
`

export const MoviesCards= styled.div`
display: grid;
grid-template-columns: repeat(5,1fr);
gap: 5px;
@media (max-width: 1200px){
  display: grid;
grid-template-columns: repeat(4,1fr);

}
@media (max-width: 900px){
  display: grid;
grid-template-columns: repeat(3,1fr);

}

@media (max-width: 780px){
  display: grid;
grid-template-columns: repeat(3,1fr);

}
@media (max-width: 650px){
  display: grid;
grid-template-columns: repeat(2,1fr);

}
@media (max-width: 500px){
  display: grid;
grid-template-columns: repeat(1,1fr);

}
`

export const ImgMoviesCards= styled.img`
height:90%;
width:87%;

&:hover{
  transform:scale(1.07)
}
`

export const ImgMovie= styled.img`
margin-top: 4%;
 width: 90%;
  height: 91.5vh;
  opacity: 0.5;

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
text-shadow: 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
padding:2%;
@media (max-width: 780px) {
  display: block;
       
    }
`
export const ButtonsPage= styled.div`
display: flex;
margin: 2px;
margin: 1% auto;
width : 18%;
justify-content:space-evenly;
@media (max-width:550px) {
  flex-direction: column;

}
`

export const Buttons=styled.button`
background-color:black;
width: 100%;
padding:7px;
border-radius:5px;
height:20%;
margin:0px 10px;
color: white;
font-size: 18px;
outline:none;
`

export const PageNum= styled.div`
font-size:25px;
color: white;
`

