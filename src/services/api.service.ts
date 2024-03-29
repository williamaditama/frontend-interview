import axios from 'axios';

export async function fetchList() {
  // GET https://jsonplaceholder.typicode.com/todos/?_limit=10
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=10')
  return res
}

// Part 2: https://jsonplaceholder.typicode.com/users/{userId}