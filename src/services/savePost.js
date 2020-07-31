import axios from 'axios';

import config from '../config';

const { token } = JSON.parse(localStorage.getItem('user'));

const savePost = async ({
    title,
    cover,
    body,
    description,
    keywords,
    slug,
}) => {
    try {
        const res = await axios.post(`${config.api}/posts`, {
                title,
                cover,
                body,
                description,
                keywords,
                slug,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        return res.data.body;
    } catch (error) {
        return error;
    }
}

export default savePost;
