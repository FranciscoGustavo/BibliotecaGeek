import React from 'react';
import { Link } from 'react-router-dom';

import { FaHome, FaFileAlt, FaUserEdit, FaComments } from 'react-icons/fa';

import { Nav, H1, UL, LI } from './styles';

const Navbar = () => (
    <Nav>
        <H1>BibliotecaGeek</H1>
        <Link to="/posts/new">Nueva Publicacion</Link>
        <UL>
            <LI>
                <Link to="/">
                    <FaHome />
                    <span>Home</span>
                </Link>
            </LI>
            <LI>
                <Link to="/posts">
                    <FaFileAlt />
                    <span>Publicaciones</span>
                </Link>
            </LI>
            <LI>
                <Link to="/comments">
                    <FaUserEdit />
                    <span>Comentarios</span>
                </Link>
            </LI>
            <LI>
                <Link to="/messages">
                    <FaComments />
                    <span>Mensajes</span>
                </Link>
            </LI>
        </UL>
    </Nav>
);

export default Navbar;
