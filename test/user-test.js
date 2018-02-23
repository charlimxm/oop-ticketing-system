var assert = require('chai').assert
var User = require('../user')

var user = new User(1)

describe('Testing constructor for User', () => {
  it('should return an object for user', () => {
    assert.isObject(user)
  })

  it('should return a card id of 1', () => {
    assert.equal(user.id, 1)
  })
})

describe('Add other user(s) to friendlist - addFriend()', () => {
  it('should return the friends array with length of 2', () => {
    user.addFriend(3)
    user.addFriend(5)
    assert.equal(user.friends.length, 2)
  })
})
