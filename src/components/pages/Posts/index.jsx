import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TemplateTable from '../../templates/TemplateTable';

const Posts = () => {
    const [posts, setPosts] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios({
            url: 'http://localhost:5000/api/posts',
        })
        .then((res) => setPosts(res.data.body.posts))
        .catch((err) => setError(error));
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
    ]

    if (error) return (<h1>Ups algo salio mal</h1>)

    return (
        <>
            <h1>Lista de posts</h1>
            {
                posts 
                    ? <TemplateTable data={posts} columns={columns} /> 
                    : <p>Sin posts</p>
            }
        </>
    );  
};

export default Posts;