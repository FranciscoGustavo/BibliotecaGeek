import styled from 'styled-components';

export const HeaderDiv = styled.header`
grid-column: 2 / 3;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 21px;
background-color: #FFF;
`;

export const UserActions = styled.div`
display: flex;
justify-content: space-between;
width: 100px;
`;

export const ProfileImage = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
overflow: hidden;
`;

export const Search = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
width: 300px;
border-radius: 7px;
background-color: #DFDFDF;

label {
    padding: 7px;
}

input {
    display: block;
    width: 100%;
    padding: 7px;
    margin-left: 14px;
    background-color: transparent;

    :focus {
        outline: none;
    }
}
`;