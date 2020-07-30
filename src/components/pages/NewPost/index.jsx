import React from 'react';

import { Container, Post, Settings, Cover } from './styles';

const NewPost = () => (
    <Container>
        <Post>
            <div>
                <Cover>
                    <img src="https://res.cloudinary.com/dwapbqqbo/image/upload/v1592516373/ppyvrszlr0s2wxigqpae.jpg" alt="AAAA" />
                </Cover>
                <input type="text" value="Mi primer post"/>
                <textarea>
                    Para construir el juego de la vida necesitaremos tablero que contenga un numero `n` de casillas, y pueden ser tantas como queramos., Las casillas debe estar vivas o muertas y siguen 3 simples reglas:

                    * Si una casilla tiene menos de 2 vecinos, ó más de 3 vecinos vivos, la casilla muere.
                    * Si tiene exactamente 2 o 3 vecinos vivos se queda igual.
                    * Si la casilla esta muerta y tiene exactamente 3 vecinos vivos, esta revive.
                    
                    Con esta introducción ya podemos hacer código.
                    
                    Primero creamos una carpeta y dentro crearemos 4 archivos.
                    * index.html
                    * main.js
                    * box.js
                    * board.js
                </textarea>
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

export default NewPost;
