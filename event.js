class Event {
  constructor (id, date) {
    this.id = id
    this.date = date
    this.attending = []
  }

  addAttendee (id) {
    this.attending.push(id)
  }
}

module.exports = Event
