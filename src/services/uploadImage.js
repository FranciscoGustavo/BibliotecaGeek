import axios from 'axios';

import config from '../config';
const { token } = JSON.parse(localStorage.getItem('user') || '{}');

const uploadImage = async (fieldName, file) => {
    const formData = new FormData();
    formData.append(fieldName, file);

    try {
        const res = await axios.post(`${config.api}/uploads`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }
        });
        return res.data.body.secure_url;
    } catch (error) {
        return error;
    }
};

export default uploadImage;
