import React from 'react';
import { Link } from 'react-router-dom';

import { FaHome, FaFileAlt } from 'react-icons/fa';

import { Nav, H1, UL, LI } from './styles';

const Navbar = () => (
    <Nav>
        <H1>BibliotecaGeek</H1>
        <Link to="/posts/new">Nueva Publicacion</Link>
        <UL>
            <LI>
                <div>
                    <FaHome />
                    <Link to="/">Home</Link>
                </div>
            </LI>
            <LI>
                <div>
                    <FaFileAlt />
                    <Link to="/posts">Publicaciones</Link>
                </div>
            </LI>
        </UL>
    </Nav>
);

export default Navbar;
