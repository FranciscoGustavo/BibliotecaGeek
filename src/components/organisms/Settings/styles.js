import styled from 'styled-components';

export const Div = styled.div`
background-color: white;
width: 300px;
height: 100%;
padding: 28px;
border-radius: 7px;
box-shadow: 0 0 7px rgba(0, 0, 0, 1);

div {
    margin-bottom: 28px;
}
`;

export const Actions = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 28px;

button {
    background-color: gray;
    border-radius: 7px;
    padding: 7px 14px;
}

button:focus {
    outline: none;
}
`;

export const InputForm = styled.div`
label {
    margin-bottom: 7px;
}

label, input {
    display: block;
    width: 100%;
}

:last-child {
    margin-bottom: 0;
}
`; 