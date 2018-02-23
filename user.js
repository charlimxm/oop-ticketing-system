class User {
  constructor(id) {
    this.id = id
    this.friends = []
  }

  addFriend (id) {
    this.friends.push(id)
  }
}

module.exports = User
