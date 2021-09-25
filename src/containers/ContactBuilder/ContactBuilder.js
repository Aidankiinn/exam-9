import React from 'react';
import {Container} from "@material-ui/core";
import {Route, Switch} from "react-router-dom";
import Contacts from "../Contacts/Contacts";
import AddContact from "../AddContact/AddContact";

const ContactBuilder = () => {
    return (
        <Container>
            <Switch>
                {/*<Route path='/' exact render={() => <Typography variant="h5">Welcome!</Typography>}/>*/}
                <Route path='/' exact component={Contacts}/>
                <Route path='/add-contact' component={AddContact}/>
                <Route render={() => <h1>Not Found</h1>}/>
            </Switch>
        </Container>
    );
};

export default ContactBuilder;