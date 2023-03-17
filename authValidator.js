function validateUsernameOrEmail() {
    const usernameOrEmail = document.getElementById("usernameOrEmail").value
    const usernameOrEmailError = document.getElementById("usernameOrEmailError")
    if (usernameOrEmail.length === 0) {
        usernameOrEmailError.innerHTML = "Username/email cannot be empty"
        return false
    } else {
        usernameOrEmailError.innerHTML = ""
        return true
    }
}

function validatePassword() {
    const password = document.getElementById("password").value
    const passwordError = document.getElementById("passwordError")
    if (password.length === 0) {
        passwordError.innerHTML = "Password cannot be empty"
        return false
    } else {
        passwordError.innerHTML = ""
        return true
    }
}

function validateMatchingPassword() {
    const password = document.getElementById("password").value
    const matchingPassword = document.getElementById("matchingPassword").value
    const matchingPasswordError = document.getElementById("matchingPasswordError")
    if (matchingPassword.length === 0) {
        matchingPasswordError.innerHTML = "Matching password cannot be empty"
        return false
    }
    if (matchingPassword !== password) {
        matchingPasswordError.innerHTML = "Passwords do not match"
        return false
    }
    matchingPasswordError.innerHTML = ""
    return true
}

function validateUsername() {
    const username = document.getElementById("username").value
    const usernameError = document.getElementById("usernameError")
    if (username.length === 0) {
        usernameError.innerHTML = "Username cannot be empty"
        return false
    } else {
        usernameError.innerHTML = ""
        return true
    }
}

function validateName() {
    const name = document.getElementById("name").value
    const nameError = document.getElementById("nameError")
    if (name.length === 0) {
        nameError.innerHTML = "Name cannot be empty"
        return false
    } else {
        nameError.innerHTML = ""
        return true
    }
}

function validateSurname() {
    const surname = document.getElementById("surname").value
    const surnameError = document.getElementById("surnameError")
    if (surname.length === 0) {
        surnameError.innerHTML = "Surname cannot be empty"
        return false
    } else {
        surnameError.innerHTML = ""
        return true
    }
}

function validateEmail() {
    const email = document.getElementById("email").value
    const emailError = document.getElementById("emailError")
    const regex = /^[^\s@]{3,}@[^\s@]+\.[^\s@]{2,4}$/

    if (email.length === 0) {
        emailError.innerHTML = "Email cannot be empty"
        return false
    }
    if (!email.match(regex)) {
        emailError.innerHTML = "Email is in wrong format"
        return false
    }
    emailError.innerHTML = ""
    return true
}