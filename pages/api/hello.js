// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"

export const getData = async () => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts`);
}
