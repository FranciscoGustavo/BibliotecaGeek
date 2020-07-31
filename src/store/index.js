import { createStore } from 'redux';
import reducer from '../reducers';

const user = JSON.parse(localStorage.getItem('user'));
const posts = JSON.parse(localStorage.getItem('posts'));
const currentPost = JSON.parse(localStorage.getItem('currentPost'));

const store = createStore(reducer, { user, posts, currentPost });

export default store;
