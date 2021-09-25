import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ContactItem from "../../components/ContactItem/ContactItem";
import {getContacts, setModalOpen} from "../../store/contactBuilderActions";
import Modal from "../../components/UI/Modal/Modal";
import ModalInfo from "../../components/ModalInfo/ModalInfo";

const Contacts = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(state => state.contacts);

    const [contact, setContact] = useState([]);

    const showPurchaseModal = useSelector(state => state.showPurchaseModal);

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    const purchaseCancelHandler = () => {
        dispatch(setModalOpen(false));
    };

    const purchaseHandler = async (id) => {
        dispatch(setModalOpen(true));
        setContact(contacts[id]);
    };

    return contacts ? (
        <>
            <Modal
                show={showPurchaseModal}
                close={purchaseCancelHandler}
            >
                <ModalInfo contact={contact}/>
            </Modal>
            {Object.keys(contacts).map(contact => (
                <ContactItem
                    image={contacts[contact].photo}
                    name={contacts[contact].name}
                    key={contact}
                    cardInfo={() => purchaseHandler(contact)}
                />))
            } </>
    ) : 'Add Contact! ';
};

export default Contacts;