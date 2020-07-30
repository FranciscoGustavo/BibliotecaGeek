import styled from 'styled-components';

export const Div = styled.div`
grid-column: 1 / 3;
grid-row: 1 / 3;
display: flex;
justify-content: center;
align-items: center;    
width: 100%;
height: 100%;
`;

export const FormContainer = styled.div`
width: 90%;
max-width: 400px;
padding: 14px;
border-radius: 7px;
box-shadow: 0 0 7px rgba(0, 0, 0, 0.16);

h1 {
    margin-bottom: 28px;
    text-align: center;
    font-size: 28px;
}
`;

export const Input = styled.input`
display: block;
width: 100%;
border-radius: 7px;
padding: 7px;
margin-bottom: 28px;
background-color: #DFDFDF;

&[type=submit] {
    width: auto;
    border-radius: 7px;
    padding: 7px 14px;
    margin-bottom: 0;
}
`;