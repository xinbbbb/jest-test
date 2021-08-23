import { generateConfig, generateConfigAnother } from './demo'

test('test snapshot', ()=> {
   expect(generateConfig()).toMatchSnapshot()
})

test('test another snapshot', ()=> {
  expect(generateConfigAnother()).toMatchSnapshot({
    time: expect.any(Date)
  })
})