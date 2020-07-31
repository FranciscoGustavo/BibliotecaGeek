import axios from 'axios';

import config from '../config';

const deletePost = async (currentSlug, token) => {
    try {
        const res = await axios.delete(
                `${config.api}/posts/${currentSlug}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            return res.data.message;
    } catch (error) {
        return error;
    }
};

export default deletePost;
