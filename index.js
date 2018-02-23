var Events = require('./events')
var Event = require('./event')
var User = require('./user')

var user1 = new User(1)
var user2 = new User(2)
var user3 = new User(3)
var user4 = new User(4)
var user5 = new User(5)

user1.addFriend(2)
user1.addFriend(4)
user2.addFriend(1)
user2.addFriend(3)
user2.addFriend(5)

var insidious = new Events(1, 'Insidious')
insidious.eventList = [event1, event2]
var event1 = new Event(1, '23Feb2017')
event1.addAttendee(1)
event1.addAttendee(3)
var event2 = new Event(2, '25Feb2017')
event2.addAttendee(2)
event2.addAttendee(4)
event2.addAttendee(5)

function parseData(booking) {
  var parseBooking = {
    user: "",
    eventName: "",
    eventDate: ""
  }
  var bookingArr = booking.split(', ')
  parseBooking.user = bookingArr[0]
  parseBooking.eventName = bookingArr[1]
  parseBooking.eventDate = bookingArr[2]

  return parseBooking
}

function findAttendees (data) {
  data = parseData(data)


}

findAttendees('user1, Insidious, 23Feb2017')

module.exports = {
  parseData,
  findAttendees
}
