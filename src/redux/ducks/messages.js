import { scroll } from '../../helpers/dom';
const initialState = {
  items: [],
  loading: false,
  filter: '',
};

export const loadMessages = (myId, id) => {
  return (dispatch) => {
    dispatch({
      type: 'messages/load/start',
    });
    fetch(
      `https://api.intocode.ru:8001/api/messages/5f2ea3801f986a01cefc8bcd/${id}`,
    )
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

export const setFilterMessage = (text) => {
  return {
    type: 'find/message',
    payload: text,
  };
};
export const deleteMessage = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'message/deleting/start',
    });
    fetch(`https://api.intocode.ru:8001/api/messages/${id}`, {
      method: 'DELETE',
    }).then(() => {
      dispatch({
        type: 'message/deleting/success',
        payload: id,
      });
    });
  };
};
export const newMessageSend = (content, id, myId) => {
  const tempId = Math.random() * 100;
  return (dispatch) => {
    dispatch({
      type: 'comment/upload/start',
      payload: {
        tempId: tempId,
        content: content,
        myId: myId,
        type: 'text',
        time: new Date(),
        contactId: id,
        read: false,
      },
    });
    fetch(`https://api.intocode.ru:8001/api/messages`, {
      method: 'POST',
      body: JSON.stringify({
        content: content,
        time: new Date(),
        sending: false,
        type: 'text',
        tempId: tempId,
        contactId: id,
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
          payload: { ...json, tempId: tempId },
        });
        scroll();
      });
  };
};
export default function messages(state = initialState, action) {
  switch (action.type) {
    case 'messages/load/start':
      return {
        ...state,
        loading: true,
        items: [],
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
        items: [...state.items, { ...action.payload, sending: true }],
      };
    case 'comment/upload/success':
      return {
        ...state,
        items: state.items.map((message) => {
          if (message.tempId === action.payload.tempId) {
            return {
              ...action.payload,
              sending: false,
            };
          }
          return message;
        }),
      };
    case 'find/message':
      return {
        ...state,
        filter: action.payload,
      };
    case 'message/deleting/start':
      return {
        ...state,
      };
    case 'message/deleting/success':
      return {
        ...state,
        items: state.items.filter((message) => message._id !== action.payload),
      };
    default:
      return state;
  }
}
