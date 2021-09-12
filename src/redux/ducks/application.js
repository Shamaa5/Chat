const initialState = {
  items: {},
  loading: false
};


export default function application(state = initialState, action) {
  switch (action.type) {
    case 'profile/load/start':
      return {
        ...state,
        loading: true
      };
    case 'profile/load/success':
      return {
        ...state,
        loading: false,
        items: action.payload
      }
    default:
      return state;
  }
}


export  const loadProfile = () => {
  return (dispatch) => {
    dispatch({
      type: 'profile/load/start',
    });
    fetch('https://api.intocode.ru:8001/api/profile')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'profile/load/success',
          payload: json,
        });
      });
  };
}