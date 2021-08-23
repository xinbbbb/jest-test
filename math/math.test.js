import { add } from './math'
// const { add } =  require('./math.js')

test('add ', () => {

  expect(add(9,9)).toBe(18)
})
