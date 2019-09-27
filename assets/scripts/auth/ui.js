'use strict'
//

const store = require('../store')

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
}
const onSignUpFailure = function () {
  failureMessage('Sign up failed')
  console.log('Sign-Up Failed')
}
const onSignInSuccess = function (response) {
  successMessage('Signed in successfully!')
  store.user = response.user
  console.log('Signed-In Successfully')
}
const onSignInFailure = function () {
  failureMessage('Sign in failed')
  console.log('Sign-In Failed')
}
const onSignOutSuccess = function () {
  successMessage('Signed Out successfully!')
  console.log('Sign-Out Successfully')
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

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordFailure,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onSignOutFailure
}
