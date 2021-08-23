import axios from 'axios'

export const fetchData = (fn)=> {
  axios.get("http://www.dell-lee.com/react/api/demo.json").then(res =>{
    fn(res.data)
  })
}

export const fetchDataRes = ()=> {
  return axios.get("http://www.dell-lee.com/react/api/demo.json")
}

export const fetchData404 = ()=> {
  return axios.get("http://www.dell-lee.com/react/api/demo1.json")
}