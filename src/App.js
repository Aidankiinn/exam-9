import React from 'react';
import Layout from "./components/Navigation/Layout/Layout";
import ContactBuilder from "./containers/ContactBuilder/ContactBuilder";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <ContactBuilder/>
            </Layout>
        </BrowserRouter>
    );
};

export default App;