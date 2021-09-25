import axiosApi from "../axiosApi";

export const CONTACT_REQUEST = 'CONTACT_REQUEST';
export const CONTACT_SUCCESS = 'CONTACT_SUCCESS';
export const CONTACT_FAILURE = 'CONTACT_FAILURE';

export const FETCH_CONTACT_REQUEST = 'FETCH_CONTACT_REQUEST';
export const FETCH_CONTACT_SUCCESS = 'FETCH_CONTACT_SUCCESS';
export const FETCH_CONTACT_FAILURE = 'FETCH_CONTACT_FAILURE';

export const SET_MODAL_OPEN = 'SET_MODAL_OPEN';
export const setModalOpen = isOpen => ({type: SET_MODAL_OPEN, payload: isOpen});


export const postContactRequest = () => ({type: CONTACT_REQUEST});
export const postContactSuccess = () => ({type: CONTACT_SUCCESS});
export const postContactFailure = () => ({type: CONTACT_FAILURE});

export const fetchContactRequest = () => ({type: FETCH_CONTACT_REQUEST});
export const fetchContactSuccess = (contacts) => ({type: FETCH_CONTACT_SUCCESS, payload: contacts});
export const fetchContactFailure = () => ({type: FETCH_CONTACT_FAILURE});


export const sendContact = (contact, history) => {
    return async dispatch => {
        dispatch(postContactRequest());

        try {
            await axiosApi.post('/contacts.json', contact);
            dispatch(postContactSuccess());
            history.push('/');
        } catch (error) {
            dispatch(postContactFailure())
        }
    }
};

export const getContacts = () => {
    return async dispatch => {
        dispatch(fetchContactRequest());
        try{
            const response = await axiosApi.get('/contacts.json');
            dispatch(fetchContactSuccess(response.data));
        } catch (error) {
            dispatch(fetchContactFailure());
        }
    }
}
