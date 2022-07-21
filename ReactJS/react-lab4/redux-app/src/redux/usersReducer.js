export default function UsersReducer(state = [], action) {
  if (action.type == 'USERS') return action.payload;
  return state;
}
