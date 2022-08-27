import axios, { AxiosResponse } from "axios";

export function fetchList(): Promise<AxiosResponse<ToDo[], any>> {
  return axios.get("https://jsonplaceholder.typicode.com/todos/?_limit=10");
}

// Part 2: https://jsonplaceholder.typicode.com/users/{userId}
