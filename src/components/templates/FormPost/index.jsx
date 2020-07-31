import React, { useState } from 'react';

import Settings from '../../organisms/Settings';

import { Container, Post, Title, Cover } from './styles'

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

    const handleTitle = (event) => setTitle(event.target.value);
    const handleSlug = (event) => setSlug(event.target.value);
    const handleDescription = (event) => setDescription(event.target.value);
    const handleKeywords = (event) => setKeywords(event.target.value);
    const handleCover = (event) => {};

    return (
        <Container>
            <Post>
                <Cover>
                    <img src={cover} alt=""/>
                    <input type="file" id="cover" onChange={handleCover}/>
                    <label htmlFor="cover">Cambiar imagen</label>
                </Cover>
                <Title>
                    <input type="text" name="" id="" value={title} onChange={handleTitle} />
                </Title>
            </Post>
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
