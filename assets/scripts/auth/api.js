'use strict'
//
const config = require('../config')
//
// // require `store` so we have access to our `token`
// // so the API knows who we are
const store = require('../store')
//

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const newGame = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}
const update = function (index, value) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game.id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': '' + value
        },
        'over': false
      }
    }
  })
}

const updateGame = function (board, player) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + player,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}
const updateGameOver = function (over, player) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + player,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'over': over
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  newGame,
  updateGameOver
}
