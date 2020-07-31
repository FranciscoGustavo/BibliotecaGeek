import { createStore } from 'redux';
import reducer from '../reducers';

const user = JSON.parse(localStorage.getItem('user'));

const store = createStore(reducer, { user });

export default store;
