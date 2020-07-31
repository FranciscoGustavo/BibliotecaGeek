import React from 'react';

import FormPost from '../../templates/FormPost';

const NewPost = () => (
    <FormPost 
        currentId={null}
        currentTitle={''}
        currentCover={''}
        currentSlug={''}
        currentBody={''}
        currentDescription={''}
        currentKeywords={''}
    />
);

export default NewPost;
