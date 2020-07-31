import React from 'react';

import { Container, Title, Cover, PostBody, Actions, PostContent } from './styles';

const Post = ({
    title, cover, body, bodyHtml, markDownToHtml,handleCover, handleTitle, handleConvertHtml, hanldeBody, setMarkDownToHtml,
}) => {
    return (
        <Container>
            <Cover>
                <img src={cover} alt=""/>
                <input type="file" id="cover" onChange={handleCover}/>
                <label htmlFor="cover">Cambiar imagen</label>
            </Cover>
            <Title>
                <input type="text" name="" id="" value={title} onChange={handleTitle} />
            </Title>
            <Actions>
                <button onClick={() => setMarkDownToHtml(false)}>Marckdown</button>
                <button onClick={handleConvertHtml}>Html</button>
            </Actions>
            <PostBody>
                {
                    !markDownToHtml 
                        ? <textarea value={body} onChange={hanldeBody } />
                        : <PostContent dangerouslySetInnerHTML={{ __html: bodyHtml }}/>
                }
            </PostBody>
        </Container>
    );
};

export default Post;
