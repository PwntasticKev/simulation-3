module.exports = {
  createUser: (req, res) => {
    const { username, password } = req.body
    db.create_user(username, password, profile_pic).then(user => {
      user.status(200).send(user)
    }).catch(console)
  }
}