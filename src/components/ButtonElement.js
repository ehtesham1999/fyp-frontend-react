import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button=styled(Link)`
border-radius:50px;
background:${({primary})=>(primary ?'#bbecd8':'#010606')};
white-space:nowrap;
padding:${({big})=>(big ? '14px 48px':'12px 30px')};
color:${({dark})=>(dark ? '#010606':'#fff')};
font-size:${({fontBig})=>(fontBig ? '20px':'16px')};
font-weight:400;
outline:none;
border:none;
display:flex;
cursor:pointer;
justify-content:center;
align-items:center;
transition:all .2s ease-in-out;

&:hover{
    transition:all .2s ease-in-out;
    background:${({primary})=>(primary ?'#01BF71':'#bbecd8')};
    color:black;
    transform:scale(1.1);
}
`