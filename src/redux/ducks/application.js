const initialState = {
  profile: {},
  loading: false,
};

export const loadProfile = () => {
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
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case 'profile/load/start':
      return {
        ...state,
        loading: true,
      };
    case 'profile/load/success':
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    default:
      return state;
  }
}
