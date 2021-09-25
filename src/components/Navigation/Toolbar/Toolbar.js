import React from 'react';
import "./Toolbar.css";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

const Toolbar = () => {

    return (
        <header className='header'>
            <h2><Link to='/'>Contacts</Link></h2>
            <Button variant="contained" color="primary"> <Link to='/add-contact'> Add new Contact</Link></Button>
        </header>
    );
};

export default Toolbar;