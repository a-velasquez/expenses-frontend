export default function accountReducer(state = { accounts: [] }, action) {
  // debugger;
  switch (action.type) {
    case 'FETCH_ACCOUNTS':
      return { accounts: action.payload } //returns array from fetch request instead of empty array
    case 'ADD_ACCOUNT':
      return {...state, accounts: [...state.accounts, action.payload]}
    default:
      return state 
  }
}