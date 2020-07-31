import styled from 'styled-components';

export const Container = styled.div`
width: 700px;
height: 100%;
border-radius: 7px;
box-shadow: 0 0 7px rgba(0, 0, 0, 1);
overflow: hidden;
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

export const Actions = styled.div`
padding: 0 28px;

button {
    background-color: gray;
    padding: 7px 14px;
    border-radius: 7px;
}

button:last-child {
    margin-left: 14px;
}
`;

export const PostContent = styled.div`
padding: $font-size * 2;
padding-top: 0;
background-color: #FFF;
color: #333;
font-family: Roboto Helvetica, sans-serif, freesans, clean;
font-size: $font-size;
word-wrap: break-word;
line-height: 1.7;
-webkit-font-smoothing: antialiased;
a {
    color: #4183c4;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
}
p,
blockquote,
ul,
ol,
dl,
table,
pre {
    margin: $font-size 0;
}
pre {
    border-radius: 4.5px;
    padding: $font-size;
    overflow: auto;
    background-color: #f6f8fa;
    line-height: 1.45;
    code {
        display: block;
        max-width: auto;
        padding: 0;
        margin: 0;
        overflow: visible;
        line-height: inherit;
        word-wrap: normal;
        background-color: initial;
        border: 0;
    }
}
ul,
ol {
    padding-left: 30px;
}
h2 {
    border-bottom: 1px solid #eee;
    color: #000;
    font-size: 2.0em;
}
h3 {
    font-size: 1.5em;
}
h4 {
    font-size: 1.2em;
}
h5 {
    font-size: 1.0em;
}
h6 {
    color: #777;
    font-size: 1.0em;
}
h2,
h3,
h4,
h5,
h6 {
    font-weight: bold;
    line-height: 1.7;
    margin: 1em 0 15px 0;
}
h2+p,
h3+p {
    margin-top: $font-size;
}
code {
    background-color: #F8F8F8;
    border-radius: 4.5px;
    border: 1px solid #DDD;
    font-family: Consolas, "Liberation Mono", Courier, monospace;
    font-size: 12px;
    margin: 0 2px;
    padding: 0 5px;
    white-space: pre;
}
`;