import axios from 'axios';

export default function userAction() {
  const data = axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return {
    type: 'USERS',
    payload: data,
  };
}
