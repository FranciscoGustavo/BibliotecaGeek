import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';

import TemplateTable from '../../templates/TemplateTable';
import { savePosts } from '../../../actions';

const Posts = ({ token, save }) => {
    const [posts, setPosts] = useState(false);
    const [err, setError] = useState(false);

    useEffect(() => {
        axios({
            url: 'http://localhost:5000/api/posts/author',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => {
            setPosts(res.data.body.posts)
            save(res.data.body.posts);
        })
        .catch((err) => setError(err));
    }, []);

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
                    <Link to={`/posts/edit/${cell.value}`}>
                        <FaEdit />
                    </Link>
                    <Link to={cell.value}>
                        <FaTrash />
                    </Link>
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
    save: savePosts 
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);