import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 100%;
`;

export const Post = styled.div`
width: 700px;
overflow-y: auto;

> div {
    border-radius: 7px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.16);
    overflow: hidden;
}

input, textarea {
    display: block;
    width: 100%;
}

input {
    padding: 0 21px;
    padding-bottom: 14px;
    border-bottom: solid 1px gray;
    margin: 14px 0;
    font-size: 28px;
    font-weight: bold;
}
`;

export const Settings = styled.div`
width: 300px;
border-radius: 7px;
box-shadow: 0 0 7px rgba(0, 0, 0, 0.16);
padding: 28px;

> div {
    margin-bottom: 14px;
}

> div button {
    border-radius: 7px;
    padding: 7px 14px;
    background-color: gray;
}

> div:first-child {
    display: flex;
    justify-content: space-between;
}

> div label {
    display: block;
    width: 100%;
    margin-bottom: 7px;
}

> div input {
    display: block;
    width: 100%;
}

`;

export const Cover = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 250px;
overflow: hidden;
`;
