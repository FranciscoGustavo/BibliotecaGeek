import axios from 'axios';

import config from '../config';

const publicPost = async ({ slug, token }) => {
    try {
        const res = await axios.patch(
                `${config.api}/posts/${slug}`,
                { isPublic: true },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
        return res.data.message;
    } catch (error) {
        return error;
    }
};

export default publicPost;
