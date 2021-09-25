import React, {useState} from 'react';
import Form from "../../components/Form/Form";
import {useDispatch} from "react-redux";
import {sendContact} from "../../store/contactBuilderActions";

const AddContact = ({history}) => {
    const dispatch = useDispatch();

    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email: '',
        photo: '',
    });

    const contactChanged = e => {
        const name = e.target.name;
        const value = e.target.value;

        setContact(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const saveContact = (contact, history) => {
        dispatch(sendContact(contact, history))
    };

    const goToContacts = () => {
        history.push('/');
    }

    return (
        <div>
            <Form
                contact={contact}
                title='Add new Contact: '
                onChange={contactChanged}
                onSaving={() => saveContact(contact, history)}
                backContact={goToContacts}
            />
        </div>
    );
};

export default AddContact;