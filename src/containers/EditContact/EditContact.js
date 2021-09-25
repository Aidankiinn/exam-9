import React, {useEffect, useState} from 'react';
import Form from "../../components/Form/Form";
import {useDispatch} from "react-redux";
import {editRecentContact, setModalOpen} from "../../store/contactBuilderActions";
import axiosApi from "../../axiosApi";

const EditContact = ({history, match}) => {
    const id = match.params.id;

    const dispatch = useDispatch();

    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email: '',
        photo: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosApi.get('/contacts/' + id + '/.json');
            setContact(response.data);
        }

        fetchData().catch(console.error);
    }, [id]);

    const contactChanged = e => {
        const name = e.target.name;
        const value = e.target.value;

        setContact(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const saveContact = (id, contact, history) => {
        dispatch(editRecentContact(id, contact, history));
        dispatch(setModalOpen(false));
    };

    const goToContacts = () => {
        history.push('/');
    }


    return (
        <>
            <Form
                contact={contact}
                title='Add new Contact: '
                onChange={contactChanged}
                onSaving={() => saveContact(id, contact,history)}
                backContact={goToContacts}
            />
        </>
    );
};

export default EditContact;