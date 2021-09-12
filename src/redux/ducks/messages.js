const initialState = {
  items: [],
  loading: false,
  findMessage: '',
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case 'messages/load/start':
      return {
        ...state,
        loading: true,
      }
    case 'messages/load/success':
      return {
        ...state,
        loading: false,
        items: action.payload
      }
    default:
      return state;
  }
}

export const loadMessages = (myId, id) => {
  return (dispatch) => {
    dispatch({
      type: 'messages/load/start',
    });
    fetch(`https://api.intocode.ru:8001/api/messages/${myId}/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'messages/load/success',
          payload: json,
        });
      });
  };
};
