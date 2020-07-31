import axios from 'axios';

import config from '../config';
const { token } = JSON.parse(localStorage.getItem('user') || '{}');

const updatePost = async ({
    title,
    cover,
    body,
    description,
    keywords,
    slug,
}, currentSlug) => {
    console.log(`${config.api}/posts/${currentSlug}`);
    try {
        const res = await axios.patch(`${config.api}/posts/${currentSlug}`, {
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
        return res.data.message;
    } catch (error) {
        return error;
    }
}

export default updatePost;
