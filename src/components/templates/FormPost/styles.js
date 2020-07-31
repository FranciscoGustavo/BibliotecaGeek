import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: space-between;
min-height: 100%;
`;

export const Post = styled.div`
width: 700px;
height: 100%;
border-radius: 7px;
box-shadow: 0 0 7px rgba(0, 0, 0, 1);
overflow: hidden;
`;

export const Title = styled.div`
input {
    display: block;
    width: 100%;
    border-bottom: solid 1px gray;
    padding: 0 28px;
    padding-bottom: 14px;
    margin: 14px 0;
    font-size: 35px;
}
`;

export const Cover = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
height: 250px;
overflow: hidden;

input {
    display: none;
}

label {
    position: absolute;
    padding: 7px 14px;
    cursor: pointer;
    background-color: #FFF;
}
`;

export const PostBody = styled.div`
padding: 28px;
padding-bottom: 28px;

textarea{
    display: block;
    width: 100%;
    min-height: 300px;
    
    &:focus {
        outline: none;
    } 
}
`;