import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import TemplateTable from '../../templates/TemplateTable';

const Posts = ({ token }) => {
    const [posts, setPosts] = useState(false);
    const [err, setError] = useState(false);

    useEffect(() => {
        axios({
            url: 'http://localhost:5000/api/posts/author',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => setPosts(res.data.body.posts))
        .catch((err) => setError(err));
    }, [token]);

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
                    <Link to={cell.value}>
                        <FaEdit />
                    </Link>
                    <Link to="/" >
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

export default connect(mapStateToProps, null)(Posts);