import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

function usersReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    //GET USERS
    case ACTION_TYPES.GET_USERS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.GET_USERS_SUCCESS: {
      const { users } = action;
      return {
        ...state,
        isFetching: false,
        users: users,
      };
    }
    case ACTION_TYPES.GET_USERS_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error: error,
      };
    }
    //GET USER by id
    case ACTION_TYPES.GET_USER_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.GET_USER_SUCCESS: {
      const { id } = action;
      //const { users } = state;
      return {
        ...state,
        isFetching: false,
        id: id,
      };
    }
    case ACTION_TYPES.GET_USER_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error: error,
      };
    }
    //CREATE
    case ACTION_TYPES.CREATE_USER_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.CREATE_USER_SUCCESS: {
      const { user } = action;
      const { users } = state;
      const newUsers = [...users, user];
      return {
        ...state,
        isFetching: false,
        users: newUsers,
      };
    }
    case ACTION_TYPES.CREATE_USER_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error: error,
      };
    }
    default:
      return state;
  }
}

export default usersReducer;