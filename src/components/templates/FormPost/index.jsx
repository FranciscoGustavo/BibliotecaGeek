import React, { useState } from 'react';
import showdown from 'showdown';

import Post from '../../organisms/Post';
import Settings from '../../organisms/Settings';

import uploadImage from '../../../services/uploadImage';
import updatePost from '../../../services/updatePost';

import { Container } from './styles'

const converter = new showdown.Converter();

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
        updatePost({
            title,
            cover,
            slug,
            body,
            description,
            keywords,
        })
        .then(console.log)
        .catch(console.log);
        alert('Guardando');
    };

    const handleTitle = (event) => setTitle(event.target.value);
    const handleSlug = (event) => setSlug(event.target.value);
    const hanldeBody = (event) => setBody(event.target.value);
    const handleDescription = (event) => setDescription(event.target.value);
    const handleKeywords = (event) => setKeywords(event.target.value);
    
    const handleCover = (event) => {
        const file = event.target.files[0];
        if (file.type === "image/jpeg") {
            uploadImage('cover', file)
            .then((url) => setCover(url))
            .catch(console.log);
        }
    };

    const handleConvertHtml = () => {
        setBodyHtml(converter.makeHtml(body));
        setMarkDownToHtml(true);
    }

    return (
        <Container>
            <Post 
                title={title}
                cover={cover}
                body={body}
                bodyHtml={bodyHtml}
                markDownToHtml={markDownToHtml}
                handleCover={handleCover}
                handleTitle={handleTitle}
                handleConvertHtml={handleConvertHtml}
                hanldeBody={hanldeBody}
                setMarkDownToHtml={setMarkDownToHtml}
            />
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
