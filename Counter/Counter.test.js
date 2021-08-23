import Counter from './Counter'

let c1 = null

beforeEach(()=> {
  console.log('beforeEach')
  c1 = new Counter()
})

describe("test add", ()=> {
  test('counter +1 ', () => {
    c1.addOne()
    expect(c1.number).toBe(1);
  });
  
  test('counter +2 ', () => {
    c1.addTwo()
    expect(c1.number).toBe(2);
  });
})

describe("test minus ", ()=> {
  test('counter -1 ', () => {
    c1.minusOne()
    expect(c1.number).toBe(-1);
  });
  
  test('counter -2 ', () => {
    c1.minusTwo()
    expect(c1.number).toBe(-2);
  });
})

