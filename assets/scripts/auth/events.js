'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
//

let player = 'x'
const gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
]
let turns = 0
// let numberOfGames = 0
// let playerMoves = 0
// let playerTurn = 0
let gameOver = false
//
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
  player = 'x'
  turns = 0
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onClick = function (event) {
  const position = event.target.id
  if (player === 'x' && !$(this).text()) {
    turns++
    // add player to html board
    $(event.target).text(player)
    // add player to javascript board
    gameBoard[position] = player
    // check for winner
    checkWin()
    // change player
    player = 'o'
  } else if (player === 'o' && !$(this).text()) {
    turns++
    // add player to html board
    $(event.target).text(player)
    // add player to javascript board
    gameBoard[position] = player
    // check for winner
    checkWin()
    // change player
    player = 'x'
  }
}


function checkWin () {
  // if top row is a winning combo
  if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
    $('#message').text(gameBoard[0] + ' won')
    gameOver = true
    endGame()
  // if middle is a winning combo
  } else if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
    $('#message').text(gameBoard[3] + ' won ')
  // if bottom is a winning combo
  } else if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
    $('#message').text(gameBoard[6] + ' won')
    // if middle column is a winning combo
  } else if (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
    $('#message').text(gameBoard[7] + ' won')
    // if last column is a winning combo
  } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
    $('#message').text(gameBoard[8] + ' won')
    // diagnol from left to right is a winning combo
  } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
    $('#message').text(gameBoard[8] + ' won')
    // if winning combo from right to left diagnol
  } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
    $('#message').text(gameBoard[6] + ' won')
    // max clicks set to 9 will end game with a tie
  } else if (turns === 9) {
    $('#message').text('tie')
    }
  }

  const endGame = function () {
  if (gameOver === false) {
    // successMessage('The game is a draw!')
  } else if (turns % 2 === 1) {
    // successMessage('Player X wins!')
  } else if (turns % 2 === 0) {
    // successMessage('Player O wins!')
  }
}

module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut,
  onClick,
  endGame,
  onNewGame
}
