import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import showdown from 'showdown';

import { Container, Post, Settings, Cover } from './styles';

const converter = new showdown.Converter();

const NewPost = ({ token }) => {
    const [MarkDownToHtml, setMarkDownToHtml] = useState(false);
    const [cover, setCover] = useState(false);
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState();
    const [body, setBody] = useState('');
    const [bodyHtml, setBodyHtml] = useState('');
    const [description, setDescription ]= useState('');
    const [keywords, setKeywords] = useState('');

    const handleChange = (event) => {
        // upload image
        const file = event.target.files[0];
        if (file.type === "image/jpeg") {
            const formData = new FormData();
            formData.append('cover', file);

            axios.post('http://localhost:5000/api/uploads', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => {
                console.log(res.data.body.secure_url);
                setCover(res.data.body.secure_url);
            })
            .catch();
        }
        console.log(file);
    };

    const handleChangeInput = (event) => {
        setTitle(event.target.value);
        setSlug(event.target.value);
    };

    const handleMarckDownToHtml = () => {
        setMarkDownToHtml(!MarkDownToHtml);
    };

    
    const handleChangeTextarea = (event) => {
        setBody(event.target.value);
        console.log(converter.makeHtml(event.target.value));
        setBodyHtml(converter.makeHtml(event.target.value));
    };

    const handleDescription = (event) => {
        setDescription(event.target.value);
    };

    const handleKeywords = (event) => {
        setKeywords(event.target.value);
    };

    const handleSubmit = () => {
        console.log({
            title,
            cover,
            body,
            description,
            keywords,
            slug,
        });

        axios.post('http://localhost:5000/api/posts', {
            title,
            cover,
            body,
            description,
            keywords,
            slug,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log(res.data);
        })
        .catch();
    }

    return (
        <Container>
            <Post>
                <div>
                    <Cover>
                        {
                            cover 
                                ? <img src={cover} alt="" />
                                : <>
                                    <input type="file" name="cover" id="cover" style={{ display: 'none'}} onChange={handleChange} />
                                    <label htmlFor="cover">Cargar imagen</label>
                                </> 
                        }
                    </Cover>
                    <input type="text" value={title} onChange={handleChangeInput} placeholder="Escribe un titulo" />
                    <button onClick={handleMarckDownToHtml}>Marldown</button>
                    <button onClick={handleMarckDownToHtml}>Html</button>
                    {
                        (!MarkDownToHtml)
                            ? <textarea value={body} onChange={handleChangeTextarea}></textarea>
                            : <div style={{ backgroundColor: 'red' } } dangerouslySetInnerHTML={{ __html: bodyHtml }} />                    }
                </div>
            </Post>
            <Settings>
                <div>
                    <button onClick={handleSubmit}>Guardar</button>
                    <button>Publicar</button>
                </div>
                <div>
                    <label htmlFor="">Url</label>
                    <input type="text" placeholder="Escribe amigable" defaultValue={slug} />
                </div>
                <div>
                    <label htmlFor="">Descripcion</label>
                    <input type="text" placeholder="Escribe una descripcion" value={description} onChange={handleDescription} />
                </div>
                <div>
                    <label htmlFor="">Palabras Clave</label>
                    <input type="text" placeholder="Escribe palabras clave" value={keywords} onChange={handleKeywords}/>
                </div>
            </Settings>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    token: state.user.token,
});

export default connect(mapStateToProps, null)(NewPost);
