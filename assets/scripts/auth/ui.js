// 'use strict'
// //
//
'use strict'

const store = require('../store')

// const successMessage = function (newText) {
//   $('#message').text(newText)
//   $('#message').removeClass('failure')
//   $('#message').addClass('success')
//   $('form').trigger('reset')
// }
//
// const failureMessage = function (newText) {
//   $('#message').text(newText)
//   $('#message').removeClass('success')
//   $('#message').addClass('failure')
// }
// const signUpSuccessMessage = function (newText) {
//   $('#sign-in-message').text(newText)
//   $('#sign-in-message').removeClass('success')
//   $('#sign-in-message').addClass('failure')
// }
//
// const signUpFailureMessage = function (newText) {
//   $('#sign-in-message').text(newText)
//   $('#sign-in-message').removeClass('success')
//   $('#sign-in-message').addClass('failure')
// }
//
// const onSignInFailureMessage = function (newText) {
//   $('#sign-in-message').text(newText)
//   $('#sign-in-message').removeClass('success')
//   $('#sign-in-message').addClass('failure')
// }
//
// const onSignUpSuccess = function () {
//   $('#sign-up').trigger('reset')
//   $('.hide-signUp').hide()
//   signUpSuccessMessage('Signed up successfully!')
// }
//
// const onSignUpFailure = function () {
//   $('#sign-up').trigger('reset')
//   signUpFailureMessage('You failed to sign up!')
// }
//
// const onSignInSuccess = function (responseData) {
//   $('#sign-in').trigger('reset')
//   $('.hide-signUp').hide()
//   $('.hide-signIn').hide()
//   $('.show-signOut').show()
//   signUpFailureMessage('')
//   store.user = responseData.user
//   successMessage('You are now signed in! ' + store.user.email)
// }
//
// const onSignInFailure = function () {
//   $('#sign-in').trigger('reset')
//   onSignInFailureMessage('You failed to sign in!')
// }
//
// const onChangePasswordSuccess = function () {
//   $('#change-password').trigger('reset')
//   successMessage('Changed Password successfully!')
// }
//
// const onChangePasswordFailure = function () {
//   $('#change-password').trigger('reset')
//   failureMessage('PassWord Change Failed')
// }
//
// const onSignOutSuccess = function () {
//   $('#sign-up').trigger('reset')
//   $('#change-password').trigger('reset')
//   signUpSuccessMessage('You have signed out. Thanks for playing!')
//   $('#counter').hide()
// }
//
// const onSignOutFailure = function () {
//   failureMessage('You did not sign out successfully!')
//   $('#counter').hide()
// }
//
// module.exports = {
//   onSignUpSuccess,
//   onSignUpFailure,
//   onSignInSuccess,
//   onSignInFailure,
//   onChangePasswordSuccess,
//   onChangePasswordFailure,
//   onSignOutSuccess,
//   onSignOutFailure
// }

// const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}
const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('Signed Up successfully!')
  console.log('got to on sign up success')
  $('#sign-up').trigger('reset')
}
const onSignUpFailure = function () {
  failureMessage('Sign up failed')
  console.log('Sign-Up Failed')
  $('#sign-up').trigger('reset')
}
const onSignInSuccess = function (response) {
  successMessage('Signed in successfully!')
  store.user = response.user
  console.log('Signed-In Successfully')
  $('#change-password').show()
  $('#sign-out').show()
  $('.container').show()
  $('#new-game').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}
const onSignInFailure = function () {
  failureMessage('Sign in failed')
  console.log('Sign-In Failed')
}
const onSignOutSuccess = function () {
  successMessage('Signed Out successfully!')
  console.log('Sign-Out Successfully')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.container').hide()
  $('#new-game').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}
const onSignOutFailure = function () {
  failureMessage('Sign Out failed')
  console.log('Sign-Out Failed')
}
const onChangePasswordSuccess = function () {
  successMessage('Changed Password successfully!')
  console.log('Password Changed Successfully')
}
const onChangePasswordFailure = function () {
  failureMessage('Change Password failed')
  console.log('Password Changed Failed')
}
const onNewGameSuccess = function () {
  successMessage('New game')
  console.log('New Game Success')
  $('.game').text('')
  // this code resets the game board with "new-game" button
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordFailure,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onSignOutFailure,
  onNewGameSuccess
}
