const initialState = {
  items: [],
  loading: false,
  filter: "",
  contactProfileIsOpen: false,
  filteredContact: [],
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case 'contacts/load/start':
      return {
        ...state,
        loading: true,
      };
    case 'contacts/load/success':
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case 'find/contact':
      return {
        ...state,
        loading: false,
        filter: action.payload,
      };
    case 'open/profile':
      return {
        ...state,
        contactProfileIsOpen: true,
      };
    case 'close/profile':
      return {
        ...state,
        contactProfileIsOpen: false,
      };
    default:
      return state;
  }
}

export const loadContacts = () => {
  return (dispatch) => {
    dispatch({
      type: 'contacts/load/start',
    });
    fetch('https://api.intocode.ru:8001/api/contacts')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'contacts/load/success',
          payload: json,
        });
      });
  };
};
export const findContact = (text) => {
  return {
    type: 'find/contact',
    payload: text,
  };
};
export const openContactProfile = () => {
  return {
    type: 'open/profile',
  };
};

export const closeContactProfile = () => {
  return {
    type: 'close/profile',
  };
};
