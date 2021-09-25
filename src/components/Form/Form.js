import React from 'react';
import {Button} from "@material-ui/core";
import './Form.css';

const Form = (props) => {
    const {onSaving, backContact, contact, onChange, title} = props;

    return (
        <form className="addPost">
            <h2>{title}</h2>
            <div className="labels">
                <label>Name:<br/> <input
                    name="name"
                    placeholder="Enter the name"
                    value={contact.name}
                    onChange={onChange}
                    required
                /></label>
                <label>Phone: <br/> <input
                    name="phone"
                    placeholder="Enter the phone number"
                    value={contact.phone}
                    onChange={onChange}
                    required
                /></label>
                <label>Email: <br/> <input
                    name="email"
                    placeholder="Enter the email"
                    value={contact.email}
                    onChange={onChange}
                    required
                /></label>
                <label>Photo: <br/> <input
                    name="photo"
                    placeholder="Enter the url of photo"
                    value={contact.photo}
                    onChange={onChange}
                /></label>
                {contact.photo ? (
                    <img src={contact.photo} alt='Preview contact'/>
                ) : (<p><strong>No image! </strong></p>)}
            </div>
            <Button variant="outlined" color="secondary" onClick={onSaving}>SAVE</Button>
            <Button variant="outlined" color="primary" onClick={backContact}>Back to Contacts</Button>
        </form>
    );
};

export default Form;