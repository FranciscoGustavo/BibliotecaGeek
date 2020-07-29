import React from 'react';

import Header from '../../organisms/Header';
import Navbar from '../../organisms/Navbar';

const TemplateDashboardApp = ({ children }) => (
    <>
        <Header />
        <Navbar />
        <main>{children}</main>
    </>
);

export default TemplateDashboardApp;
