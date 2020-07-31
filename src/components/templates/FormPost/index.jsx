import React, { useState } from 'react';

import Settings from '../../organisms/Settings';

import { Container, Post } from './styles'

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

    const handleSave = () => {
        console.log({
            title,
            cover,
            slug,
            body,
            description,
            keywords,
        });
        alert('Guardando');
    };

    const handleSlug = (event) => setSlug(event.target.value);
    const handleDescription = (event) => setDescription(event.target.value);
    const handleKeywords = (event) => setKeywords(event.target.value);

    return (
        <Container>
            <Post>ONE</Post>
            <Settings 
                slug={slug}
                description={description}
                keywords={keywords}
                handleSave={handleSave}
                handleSlug={handleSlug}
                handleDescription={handleDescription}
                handleKeywords={handleKeywords}
            />
        </Container>
    );
};

export default FormPost;
