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
            return {
                ...state, showPurchaseModal: action.payload
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: Object.keys(state.contacts).splice(state.contacts[action.payload], 1),
            }
        default:
            return state;
    }
}

export default contactReducer;