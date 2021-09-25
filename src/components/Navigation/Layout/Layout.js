import React from 'react';
import {CssBaseline} from "@material-ui/core";
import Toolbar from "../Toolbar/Toolbar";

const Layout = ({children}) => {
    return (
        <>
            <CssBaseline/>
            <Toolbar/>
            {children}
        </>
    );
};

export default Layout;