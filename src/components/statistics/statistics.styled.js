import styled from 'styled-components';
export const Section= styled.section`
width:300px;
gap: 30px;
padding:30px;
display:flex;
flex-direction:column;
align-items:center;
flex-wrap:wrap;
`
export const Title=styled.h2`
margin:0;
`
export const List =styled.ul`
margin:0;
display:flex;
padding:0;
list-style:none;
`
export const Item=styled.li`
display:flex;
gap:5px;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:#8bc34a;
width:60px;
height:60px;
border:1px solid black;
border-radius:5px;
`