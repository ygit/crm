import { Dispatch } from "redux";
import {
  CREATE_NEW_CONTACT,
  INITIAL_FETCH,
  NONE_SELECTED,
  SELECT_PERSON,
} from "../types";

export const selectPerson = (peopleId: string) => {
  return {
    type: SELECT_PERSON,
    payload: peopleId,
  };
};

export const noneSelected = () => {
  return {
    type: NONE_SELECTED,
  };
};

type Contact = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
};

export const createNewContact = ({
  firstName,
  lastName,
  phone,
  email,
  company,
}: Contact) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch("http://127.0.0.1:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, phone, email, company }),
      });

      dispatch({ type: CREATE_NEW_CONTACT });

      loadInitialContacts();
    } catch (e) {
      console.warn(e);
    }
  };
};

export const loadInitialContacts = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch("http://127.0.0.1:3000/contact");

      const data = await response.json();

      console.log("data", data);

      dispatch({
        type: INITIAL_FETCH,
        payload: data,
      });
    } catch (e) {
      console.warn(e);
    }
  };
};
