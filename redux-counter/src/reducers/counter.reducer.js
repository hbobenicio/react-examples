export default function(state = {count: 0}, action) {
  switch(action.type) {

    case 'INCREMENT':
      console.log('INCREMENT');
      return {count: state.count + 1};
    
    case 'DECREMENT':
      console.log('DECREMENT');
      return {count: state.count - 1};

    default:
      return state;
  }
}
