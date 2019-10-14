'use strict'
const authEvents = require('./auth/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// const authEvents = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')

// on page load
$(() => {
  // your JS code goes here

  // hide forms we dont want until they sign in
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.container').hide()
  $('#new-game').hide()
  // set click events for page
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('.game').on('click', authEvents.onClick)
  $('#new-game').on('submit', authEvents.onNewGame)

  // ('#create-example') selects the create-example form on the page
  // the rest says: I want to listen for the submit event
  // nd then call exampleEvents.onCreateExample whenever the form is submitted
  // $('#create-example').on('submit', exampleEvents.onCreateExample)
})
