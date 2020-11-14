import {
  ADD_FORMS,
  GET_FORM,
  DELETE_FORMS,
  UPDATE_FORMS,
} from "../Action/FormAction";

const initialState = {
  forms: [],
  updated_form: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FORMS:
      return {
        ...state,
        forms: [...state.forms, action.payload],
      };

    case DELETE_FORMS:
      return {
        ...state,
        forms: state.forms.filter(
          (item) => action.payload !== state.forms.indexOf(item)
        ),
      };

    case GET_FORM:
      return {
        ...state,
        updated_form: state.forms[action.payload],
      };

    case UPDATE_FORMS:
      console.log(action.payload.id, action.payload.values, "Get forms");
      const newArray = [...state.forms];
      newArray[action.payload.id] = action.payload.values;
      return {
        ...state,
        forms: newArray,
        updated_form: {},
      };

    default:
      return state;
  }
};
