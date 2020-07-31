import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaEdit, FaTrash } from 'react-icons/fa';

import TemplateTable from '../../templates/TemplateTable';
import { savePosts, currentPost } from '../../../actions';
import getPosts from '../../../services/getPosts';
import deletePost from '../../../services/deletePost';

const Posts = ({ token, save, history, current }) => {
    const [posts, setPosts] = useState(false);
    const [err, setError] = useState(false);

    useEffect(() => {
        getPosts(token)
        .then((body) => {
            setPosts(body.posts)
            save(body.posts);
            localStorage.setItem('posts', JSON.stringify(body.posts));
        })
        .catch((err) => setError(err));
    }, [save, token]);

    const handleClick = (slug) => {
        const currentPost = posts.filter((post) => post.slug === slug);
        current(currentPost[0]);
        localStorage.setItem('currentPost', JSON.stringify(currentPost[0]));
        history.push(`/posts/edit/${slug}`);
    };

    const handleDelete = (slug) => {
        deletePost(slug, token)
            .then((message) => {
                console.log(message);
                history.push('/posts');
            })
            .catch(console.log);
    }

    const columns = [
        { Header: 'Titulo', accessor: 'title' },
        { Header: 'Me gusta', accessor: 'likes' },
        { Header: 'Compartido', accessor: 'timeShared' },
        {
            Header: 'Estado',
            accessor: 'isPublic',
            Cell: ({ value }) => (value ? 'Publicado' : 'Borrador'),
        },
        {
            Header: '',
            accessor: 'slug',
            Cell: (cell) => (
                <div>
                    <button onClick={() => handleClick(cell.value)}>
                        <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(cell.value)}>
                        <FaTrash />
                    </button>
                </div>
            ),
        }
    ]

    if (err) return (<h1>Ups algo salio mal</h1>)

    return (
        <>
            {
                posts 
                    ? <TemplateTable data={posts} columns={columns} /> 
                    : <p>Sin posts</p>
            }
        </>
    );  
};

const mapStateToProps = (state) => ({
    token: state.user.token,
});

const mapDispatchToProps = {
    save: savePosts,
    current: currentPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);