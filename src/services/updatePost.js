import axios from 'axios';
const { token } = JSON.parse(localStorage.getItem('user'));

const updatePost = async ({
    title,
    cover,
    body,
    description,
    keywords,
    slug,
}) => {
    try {
        const res = await axios.patch(`http://localhost:5000/api/posts/${slug}`, {
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
