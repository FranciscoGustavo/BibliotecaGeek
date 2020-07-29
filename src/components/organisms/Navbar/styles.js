import styled from 'styled-components';

export const Nav = styled.nav` 
grid-row: 1 / 3;
height: 100%;
padding: 28px;
background-color: #F1F1F1;

> a {
    display: inline-block;
    width: 100%;
    border-radius: 7px;
    padding: 14px;
    margin-top: 42px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.16);
    background-color #4B5A8A;
    color: #F0F0F0;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
}
`;

export const H1 = styled.h1`
font-size: 28px;
font-weight: bold;
`;

export const UL = styled.ul`
padding-top: 28px;
list-style: none;
`;

export const LI = styled.li`
position: relative;
padding: 14px 0;
cursor: pointer;

div {
    display: flex;
    align-items: center;
    transform-origin: left;
    transition: all 0.2s;
}

svg {
    margin-right: 14px;
    font-size: 21px;
}

:hover {
    color: #4285F4;
}

:hover:before {
    position: absolute;
    left: -28px;
    content: '';
    display: block;
    width: 5px;
    height: 60%;
    border-radius: 4.5px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
    background-color: #4285F4;
}

:hover div {
    font-weight: bold;
    transform: scale(1.05);
}
`;
