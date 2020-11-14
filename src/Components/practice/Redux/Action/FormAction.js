export const ADD_FORMS = "ADD_FORMS";
export const GET_FORM = "GET_FORM";
export const UPDATE_FORMS = "UPDATE_FORMS";
export const DELETE_FORMS = "DELETE_FORMS";

export const add_Forms = (form_value) => {
  return {
    type: ADD_FORMS,
    payload: form_value,
  };
};
export const get_form = (id) => {
  return {
    type: GET_FORM,
    payload: id,
  };
};

export const delete_Forms = (id) => {
  return {
    type: DELETE_FORMS,
    payload: id,
  };
};

export const update_Forms = (id, values) => {
  return {
    type: UPDATE_FORMS,
    payload: { id, values },
  };
};
