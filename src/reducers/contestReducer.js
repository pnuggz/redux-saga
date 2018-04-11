const contest = (state = {}, action)  => {
  switch(action.type) {
    case 'FETCH_CONTEST_SUCCESS':
    return action.payload;
    default :
      return state;
  }
};

export default contest;