import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const EditPost = ({ match, posts }) => {
    const { id } = match.params;
    const [post, setPost] = useState({
        body: '# JAJAJAJATL',
        cover: 'http://localhost:4200/api/uploads/a562782bebaf44a74bb7718b7b0617f7.automata.jpg',
        description: 'Comprar leche',
        id: '5eebcc04f7c9f80cc7d4a375',
        isPublic: false,
        keywords: 'Hola amigu',
        likes: 0,
        slug: 'mi-nuevo-slug-2.0',
        timeShared: 0,
        title: 'Como Crear una papitas',
        views: 0,
    });
    useEffect(() => {
        /*setPost(
            posts.filter((post) => post.slug === id)
        );*/
    }, []);

    console.log(post);

    return (
        <h1>Editar Post</h1>
    );  
};

const mapStateToProps = (state) => ({
    posts: state.posts,
});
export default connect(mapStateToProps, null)(EditPost);
