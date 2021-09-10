const initialState = {};

export default function messages(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const loadMessages = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'contacts/load/start',
    });
    fetch(`https://api.intocode.ru:8001/api/messages/5f2ea3801f986a01cefc8bcd/contactId/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'contacts/load/success',
          payload: json,
        });
      });
  };
};
