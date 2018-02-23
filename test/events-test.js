var assert = require('chai').assert
var Events = require('../events')

var events = new Events(1, 'Insidious')

describe('Testing constructor for Events', () => {
  it('should return an object for Events', () => {
    assert.isObject(events)
  })

  it('should return an events id of 1', () => {
    assert.equal(events.id, 1)
  })

  it('should return an events name of Insidious', () => {
    assert.equal(events.name, 'Insidious')
  })

  it('should return an empty event list array', () => {
    assert.equal(events.eventList.length, 0)
  })
})

describe('Add id of users attending event to attending - addAttendee()', () => {
  it('should return the attending array with length of 3', () => {
    events.addEvent({ id: 1, date: '23Feb2017' })
    events.addEvent({ id: 2, date: '26Feb2017' })
    assert.equal(events.eventList.length, 2)
  })
})
