import React from 'react';
import AppNavBar from './appNavBar';
import Footer from './footer';

const Layout = (props) => {
    return (
        <>
        <AppNavBar/>
        {props.children}

        <Footer/>
            
        </>
    );
};

export default Layout;



