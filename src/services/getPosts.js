import axios from 'axios';

import config from '../config';

const getPost = async (token) => {
    try {
        const res = await axios({
                url: `${config.api}/posts/author`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        return res.data.body;
    } catch (error) {
        return error;
    }
};

export default getPost;
