import {
    CONTACT_FAILURE,
    CONTACT_REQUEST,
    CONTACT_SUCCESS, DELETE_CONTACT, FETCH_CONTACT_FAILURE,
    FETCH_CONTACT_REQUEST,
    FETCH_CONTACT_SUCCESS, SET_MODAL_OPEN
} from "./contactBuilderActions";

const initialState = {
    contacts: [],
    loading: false,
    showPurchaseModal: false,
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTACT_REQUEST:
            return {...state, loading: true};
        case CONTACT_SUCCESS:
            return {...state, loading: false};
        case CONTACT_FAILURE:
            return {...state, loading: false};
        case FETCH_CONTACT_REQUEST:
            return {...state, loading: true};
        case FETCH_CONTACT_SUCCESS:
            return {...state, loading: false, contacts: action.payload};
        case FETCH_CONTACT_FAILURE:
            return {...state, loading: false};
        case SET_MODAL_OPEN:
            return {...state, showPurchaseModal: action.payload}
        case DELETE_CONTACT:
            const contactsCopy = state.contacts;
            delete contactsCopy[action.payload];
            return {
                ...state,
                contacts: contactsCopy,
            }
        default:
            return state;
    }
}

export default contactReducer;