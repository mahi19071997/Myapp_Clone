import styled from "styled-components"

export const Moviecard=styled.div`
display:grid;
grid-template-columns: 30% 66%;
margin: 4% auto 0% auto;
width:90%;
color:#FFD9D9;
min-height:90vh;
background: linear-gradient(to left, black 0%, #8B0000 100%);
padding:4.5% 5% 0.5% 5% ;
word-spacing: 4px;
font-family: 'Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
@media (max-width:810px){
    grid-template-columns: repeat(1,1fr);
    
}
`

export const Title=styled.div`
font-size:40px;
line-height:45px;
font-Weight:700;
text-align: left;
margin-top:0%;
margin:5% ;
letter-spacing: 2px;
@media (max-width:810px){
    margin-Top: 0%;
}
`

export const Runtime=styled.div`
font-size:20px;
line-height:26px;
font-Weight:500;
margin:5% ;
display: flex;
justify-content:space-between;
flex-direction:row;
text-align:left;
width: 75%;
@media (max-width:1150px) {
    display: flex;
    flex-direction:column;
}
`

export const Plot=styled.div`
font-size:18px;
text-align:left;
line-height:26px;
font-Weight:550;
margin:5% ;
`


export const Imdb=styled.div`
font-size:18px;
line-height:26px;
font-Weight:700;
margin: 5%;
padding:2px;
text-align:left;
`

export const Mainleads=styled.div`
font-size:20px;
line-height:26px;
font-Weight:500;
margin: 5%;
padding:2px ;
text-align: left;
`

export const Posterimg=styled.img`
padding: 1.5% 5px 1% 5px ;
width: 100%;
height: 70%;
margin-top:10%;
@media (max-width:1000px){
    margin-top:3%;
}
@media (max-width:810px){
    width: 50%;
    margin: 3% auto;
    padding: 1% 5px;
}
`

export const Genree=styled.div`
font-size:20px;
line-height:26px;
font-Weight:500;
margin:5%;
padding:2px;
text-align:left;
`
export const OnLoading=styled.div`
padding:18% ;
font-size:40px;
color: white;
font-weight:600;
text-transform: uppercase;
background: linear-gradient(to left, black 0%, #8B0000 100%);

`

export const OnError=styled.div`
padding:18% ;
font-size:40px;
color: white;
font-weight:600;
text-transform: uppercase;
background: linear-gradient(to left, black 0%, #8B0000 100%);
`
