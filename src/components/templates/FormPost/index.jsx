import React, { useState } from 'react';

import Settings from '../../organisms/Settings';

import { Container, Scroll, Post } from './styles'

const FormPost = ({ 
    currentTitle, 
    currentCover,
    currentSlug,
    currentBody,
    currentDescription,
    currentKeywords,
}) => {
    const [markDownToHtml, setMarkDownToHtml] = useState(false);
    const [bodyHtml, setBodyHtml] = useState('');

    const [title, setTitle] = useState(currentTitle);
    const [cover, setCover] = useState(currentCover);
    const [slug, setSlug] = useState(currentSlug);
    const [body, setBody] = useState(currentBody);
    const [description, setDescription ] = useState(currentDescription);
    const [keywords, setKeywords] = useState(currentKeywords);
    return (
        <Container>
            <Post>ONE</Post>
            <Settings>Como estes</Settings>
        </Container>
    );
};

export default FormPost;
