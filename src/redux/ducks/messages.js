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
      };
    case 'messages/load/success':
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case 'comment/upload/start':
      return {
        ...state,
        loading: true,
      };
    case 'comment/upload/success':
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload],
      };
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
        scroll();
      });
  };
};
export const scroll = () => {
  if (document.getElementById('scroll_page')) {
    const message = document.getElementById('scroll_page');
    message.scrollTop = message.scrollHeight;
  }
};

export const newMessageSend = (content, id, myId) => {
  return (dispatch) => {
    dispatch({ type: 'comment/upload/start' });
    fetch(`https://api.intocode.ru:8001/api/messages`, {
      method: 'POST',
      body: JSON.stringify({
        content: content,
        time: new Date(),
        type: 'text',
        contactId: id,
        tempId: Math.random() * 100,
        toUserId: id,
        myId: myId,
        read: false,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'comment/upload/success',
          payload: json,
        });
        scroll();
      });
  };
};

export const findMessage = () => {

}
