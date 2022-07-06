import axios from 'axios';

export const fetchList = async () => {
  let response = await axios.get(`https://jsonplaceholder.typicode.com/todos/?_limit=10`);
  return response.data;
};

// Part 2: https://jsonplaceholder.typicode.com/users/{userId}