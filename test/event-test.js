var assert = require('chai').assert
var Event = require('../event')

var event = new Event(1, '23Feb2017')

describe('Testing constructor for Event', () => {
  it('should return an object for Events', () => {
    assert.isObject(event)
  })

  it('should return an event id of 1', () => {
    assert.equal(event.id, 1)
  })

  it('should return an event date of 23Feb2017', () => {
    assert.equal(event.date, '23Feb2017')
  })
})

describe('Add id of users attending event to attending - addAttendee()', () => {
  it('should return the attending array with length of 3', () => {
    event.addAttendee(1)
    event.addAttendee(3)
    event.addAttendee(3)
    assert.equal(event.attending.length, 3)
  })
})
