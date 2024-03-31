import {
  CREATE_NEW_CONTACT,
  FORM_UPDATE,
  INITIAL_FETCH,
  NONE_SELECTED,
  SELECT_PERSON,
} from "../types";

const initialState = {
  people: [],
  detailView: false,
  selectedPerson: null,
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  company: "",
  project: "",
  notes: "",
  _id: "",
  toUpdate: false,
};

export default (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case INITIAL_FETCH:
      return { ...state, people: action.payload };
    case SELECT_PERSON:
      return { ...state, detailView: true };
    case NONE_SELECTED:
      return { ...state, selectedPerson: null };
    case CREATE_NEW_CONTACT:
      return {
        ...state,
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        company: "",
        project: "",
        notes: "",
      };
    case FORM_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};

// export default function PeopleReducer(state = [], action: { type: any; payload: any; }) {
//     switch (action.type) {
//         case 'ADD_PERSON':
//         return [...state, action.payload];
//         case 'REMOVE_PERSON':
//         return state.filter(person => person !== action.payload);
//         default:
//         return state;
//     }
// }
