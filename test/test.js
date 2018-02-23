var assert = require('chai').assert
var test = require('../index')

describe('refining customer input - parseData()', () => {
  it('should return an object', () => {
    assert.isObject(test.parseData('User1, Insidious, 23Feb2017'))
  })

  it("should return user of User1", () => {
    assert.equal(test.parseData('User1, Insidious, 23Feb2017').user, 'User1')
  })

  it("should return name of Insidious", () => {
    assert.equal(test.parseData('User1, Insidious, 23Feb2017').eventName, 'Insidious')
  })

  it("should return date of 23Feb2017", () => {
    assert.equal(test.parseData('User1, Insidious, 23Feb2017').eventDate, '23Feb2017')
  })
})
