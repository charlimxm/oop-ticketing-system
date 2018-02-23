class Events {
  constructor (id, name) {
    this.id = id
    this.name = name
    this.eventList = []
  }

  addEvent (event) {
    this.eventList.push(event)
  }
}

module.exports = Events
