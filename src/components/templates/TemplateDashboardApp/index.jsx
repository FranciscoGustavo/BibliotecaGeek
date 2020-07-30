import React from 'react';
import { connect } from 'react-redux';

import Header from '../../organisms/Header';
import Navbar from '../../organisms/Navbar';

const TemplateDashboardApp = ({ user, children }) => {
    if (!user) return <>{children}</> 
    return (
        <>
            <Header />
            <Navbar />
            <main>{children}</main>
        </>
    );
};

const mapStateToProps = (state) => ({
    user: state.user,
});

export default connect(mapStateToProps, null)(TemplateDashboardApp);
