import React from 'react';

import { FaHome, FaFileAlt } from 'react-icons/fa';

import { Nav, H1, UL, LI } from './styles';

const Navbar = () => (
    <Nav>
        <H1>BibliotecaGeek</H1>
        <UL>
            <LI>
                <div>
                    <FaHome />
                    <a>Home</a>
                </div>
            </LI>
            <LI>
                <div>
                    <FaFileAlt />
                    <a>Publicaciones</a>
                </div>
            </LI>
        </UL>
    </Nav>
);

export default Navbar;
