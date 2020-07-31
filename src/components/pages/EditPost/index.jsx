import React from 'react';
import { connect } from 'react-redux';

import FormPost from '../../templates/FormPost';

const EditPost = ({ post }) => {
    const { title, cover, slug, body, description, keywords } = post;
    return (
        <FormPost 
            currentTitle={title}
            currentCover={cover}
            currentSlug={slug}
            currentBody={body}
            currentDescription={description}
            currentKeywords={keywords}
        />
    );  
};

const mapStateToProps = (state) => ({
    post: state.currentPost,
});

export default connect(mapStateToProps, null)(EditPost);
