import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { Container, Post, Settings, Cover } from './styles';

const NewPost = ({ token }) => {
    const [cover, setCover] = useState(false);

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
                    <input type="text" value="Mi primer post"/>
                    <textarea></textarea>
                </div>
            </Post>
            <Settings>
                <div>
                    <button>Guardar</button>
                    <button>Publicar</button>
                </div>
                <div>
                    <label htmlFor="">Url</label>
                    <input type="text" placeholder="Escribe amigable"/>
                </div>
                <div>
                    <label htmlFor="">Descripcion</label>
                    <input type="text" placeholder="Escribe una descripcion"/>
                </div>
                <div>
                    <label htmlFor="">Palabras Clave</label>
                    <input type="text" placeholder="Escribe palabras clave"/>
                </div>
            </Settings>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    token: state.user.token,
});

export default connect(mapStateToProps, null)(NewPost);
