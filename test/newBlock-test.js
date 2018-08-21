const { assert } = require('chai');
const Frog = require('../lib/Frog.js')
const Block2 = require('../lib/Block2.js')
const GamePiece = require('../lib/GamePiece.js')


describe('Block2', () => {
  let block2;


  beforeEach(() => {
    block2 = new Block2(550, 75, 20, 40, 'red', -1, 1, 'black')
  })

  it('should take properties', () => {
    assert.deepEqual(block2, {
      x:550,
      y: 75,
      height: 20,
      width: 40,
      color: 'red',
      dy: 0,
      dyv: 1,
      dx: -1,
      dxv: 1,
      borderColor: 'black'

    })
  })




})