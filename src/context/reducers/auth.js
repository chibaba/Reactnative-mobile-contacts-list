

const auth = (state, {type, payload}) => {
  switch (type) {
    case 'LOGIN':
      return  state;
      
      break;
  
    default:
      return state;
  }
}

export default auth;