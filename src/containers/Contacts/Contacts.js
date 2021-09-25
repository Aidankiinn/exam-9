import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ContactItem from "../../components/ContactItem/ContactItem";
import {getContacts} from "../../store/contactBuilderActions";
import Modal from "../../components/UI/Modal/Modal";

const Contacts = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(state => state.contacts);

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    return contacts ? (
        Object.keys(contacts).map(contact => (
            <>
                {/*<Modal*/}
                {/*    show={showPurchaseModal}*/}
                {/*    close={purchaseCancelHandler}*/}
                {/*>*/}
                {/*    <ContactData products={orders}/>*/}
                {/*</Modal>*/}
                <ContactItem
                    image={contacts[contact].photo}
                    name={contacts[contact].name}
                    key={contact}
                />
            </>
        ))
    ) : 'Add Contact! ';
};

export default Contacts;