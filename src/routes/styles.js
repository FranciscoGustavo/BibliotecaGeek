import styled, { createGlobalStyle } from 'styled-components';

export const Dashboard = createGlobalStyle`
* {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: normal;
    font-family: 'Lato', sans-serif;
}

body, #root {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #FCFCFC;
}
`;

export const Div = styled.div`
display: grid;
grid-template-columns: 250px 1fr;
grid-template-rows: 60px 1fr;
width: 100%;
height: 100%;
overflow-y: auto;
`;