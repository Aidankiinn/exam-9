import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ContactItem from "../../components/ContactItem/ContactItem";
import {deleteRecentContact, getContacts, setModalOpen} from "../../store/contactBuilderActions";
import Modal from "../../components/UI/Modal/Modal";
import ModalInfo from "../../components/ModalInfo/ModalInfo";
import Spinner from "../../components/UI/Spinner/Spinner";

const Contacts = ({history}) => {
    const dispatch = useDispatch();

    const contacts = useSelector(state => state.contacts);
    const loading = useSelector(state => state.loading);

    const [contact, setContact] = useState([]);
    const [id, setId] = useState(null);

    const showPurchaseModal = useSelector(state => state.showPurchaseModal);

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    const purchaseCancelHandler = () => {
        dispatch(setModalOpen(false));
    };

    const purchaseHandler = (id) => {
        dispatch(setModalOpen(true));
        setContact(contacts[id]);
        setId(id);
    };

    const deleteContact = async () => {
        await dispatch(deleteRecentContact(id, history));
        dispatch(setModalOpen(false));
    };

    const editContact = () => {
        history.push('/edit/' + id);
    };

    let contactBuilder = (<>
        <Modal
            show={showPurchaseModal}
            close={purchaseCancelHandler}
        >
            <ModalInfo
                contact={contact}
                onDeleting={deleteContact}
                onEditing={editContact}
            />
        </Modal>
        {Object.keys(contacts).map(contact => (
            <ContactItem
                image={contacts[contact].photo}
                name={contacts[contact].name}
                key={contact}
                cardInfo={() => purchaseHandler(contact)}
            />))
        } </>)

    if (loading) {
        contactBuilder = <Spinner/>
    }

    return contacts ? contactBuilder : 'Add Contact!';
};

export default Contacts;