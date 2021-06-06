

const contacts = (state, {type, payload}) => {
  switch (type) {
    case 'GET_CONTACTS':
      return  state;
      
      break;
  
    default:
      return state;
  }
}

export default contacts;