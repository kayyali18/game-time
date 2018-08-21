const { assert } = require('chai');
const Frog = require('../lib/Frog.js')

describe('Frog', () => {
  let frog;


  beforeEach(() => {
    frog = new Frog(250, 470, 10, 10, 'cornflowerblue', 0, 0, 'White')
  })

  it('should take properties', () => {
    assert.deepEqual(frog, {
      x:250,
      y: 470,
      height: 10,
      width: 10,
      color: 'cornflowerblue',
      borderColor: 'White',
      dx: 0,
      dy: 0,
      dxv: 0,
      dyv: 1,
    })
  })
})