import { fetchData, fetchDataRes, fetchData404 } from './fetchData'
import axios from 'axios'

jest.mock('axios')
// test('fetchData ', (done) => {
//   fetchData((data)=> {
//     expect(data).toEqual({
//       success: true
//     })
//     done()
//   })
// })

// test('fetchDataRes ', () => {
// return fetchDataRes().then((res)=> {
//   expect(res.data).toEqual({
//     success: true
//   })  
// })
// })
// is the same as below
// test('fetchDataRes ', () => {
//   return expect(fetchDataRes()).resolves.toMatchObject({
//     data: {
//       success: true
//     }
//   })
// })
// test('fetchDataRes ', async () => {
//   const { data } = await fetchDataRes()
//   expect(data).toEqual({
//     success: true
//   })
// })

// test('fetch 404 ', () => {
//   expect.assertions(1)
//   return fetchData404().catch((e)=> {
//     console.log(e.toString())
//     expect(e.toString().indexOf('404') > -1).toBe(true)
//   })
// })

// is the same as below
// test('fetch 404 ', () => {
//   return expect(fetchData404()).rejects.toThrow()
// })

test('mock axios ', async () => {

  axios.get.mockResolvedValueOnce({data: "success"})
  await fetchDataRes().then(({data})=> {
    expect(data).toBe("success")
  })
})
