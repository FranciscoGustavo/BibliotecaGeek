import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

import { Actions } from './styles';

const EditOrDeletePost = ({ handleClick, handleDelete, value }) => (
    <Actions>
        <button onClick={() => handleClick(value)}>
            <FaEdit />
        </button>
        <button onClick={() => handleDelete(value)}>
            <FaTrash />
        </button>
    </Actions>
);

export default EditOrDeletePost;
