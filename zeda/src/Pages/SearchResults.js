import styled from "styled-components"
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
export const OnLoading=styled.div`
padding:18% ;
font-size:40px;
color: white;
font-weight:600;
text-transform: uppercase;
`

export const OnError=styled.div`
padding:18% ;
font-size:40px;
color: white;
font-weight:600;
text-transform: uppercase;
`

export const NoData=styled.div`
padding:18% ;
font-size:40px;
color: white;
font-weight:600;
text-transform: uppercase;
img{
  width:30%
}
`

