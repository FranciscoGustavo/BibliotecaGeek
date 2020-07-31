import React from 'react';

import { Div, Actions, InputForm } from './styles';

const Settings = ({
    slug, description, keywords, handleSave, handleSlug, handleDescription, handleKeywords, handlePublic
}) => {
    return (
        <Div>
            <Actions>
                <button onClick={handleSave}>Guardar</button>
                <button onClick={handlePublic}>Publicar</button>
            </Actions>
            <InputForm>
                <label htmlFor="slug">Url</label>
                <input
                    id="slug"
                    name="slug"
                    type="text"
                    placeholder="Escribe amigable" 
                    value={slug}
                    onChange={handleSlug}
                />
            </InputForm>
            <InputForm>
                <label htmlFor="description">Descripcion</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    placeholder="Escribe una descripcion"  
                    value={description}
                    onChange={handleDescription}
                />
            </InputForm>
            <InputForm>
                <label htmlFor="keywords">Palabras Clave</label>
                <input
                    id="keywords"
                    name="keywords"
                    type="text"
                    placeholder="Escribe palabras clave"
                    value={keywords}
                    onChange={handleKeywords}
                />
            </InputForm>
        </Div>
    );
};

export default Settings;
