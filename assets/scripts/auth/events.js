'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}
const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

let player = 'x'
const onClick = function (event) {
  if (player === 'x' && !$(this).text()) {
    $(event.target).text(player)
    player = 'o'
  } else if (player === 'o' && !$(this).text()) {
    $(event.target).text(player)
    player = 'x'
  }
}

// function checkWin() {
//   if(
//     .game[0].textContent === "X" &&
//     .game[1].textContent === "X" &&
//     .game[2].textContent === "X"
//   ) { alert("Win")}
//   else if (
//     .game[3].textContent === "X" &&
//     .game[4].textContent === "X" &&
//     .game[5].textContent === "X"
//   ) { alert("Win")}
//    else if (
//   .game[6].textContent === "X" &&
//   .game[7].textContent === "X" &&
//   .game[8].textContent === "X"
//   ) { alert("Win")}
// }
module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut,
  onClick,
  onNewGame
}
