import {
    CONTACT_FAILURE,
    CONTACT_REQUEST,
    CONTACT_SUCCESS, FETCH_CONTACT_FAILURE,
    FETCH_CONTACT_REQUEST,
    FETCH_CONTACT_SUCCESS
} from "./contactBuilderActions";

const initialState = {
    contacts: [],
    loading: false
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
        default:
            return state;
    }
}

export default contactReducer;