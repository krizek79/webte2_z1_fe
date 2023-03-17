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

function validateBirthDay() {
    const birthDay = document.getElementById("birthDay").value
    const birthDayError = document.getElementById("birthDayError")
    if (!isValidDate(birthDay)) {
        birthDayError.innerHTML = "Not a valid date"
        return false
    } else {
        birthDayError.innerHTML = ""
        return true
    }
}

function isValidDate(d){
    return !isNaN((new Date(d)).getTime());
}

function validateBirthPlace() {
    const birthPlace = document.getElementById("birthPlace").value
    const birthPlaceError = document.getElementById("birthPlaceError")
    if (birthPlace.length === 0) {
        birthPlaceError.innerHTML = "Birth place cannot be empty"
        return false
    } else {
        birthPlaceError.innerHTML = ""
        return true
    }
}

function validateBirthCountry() {
    const birthCountry = document.getElementById("birthCountry").value
    const birthCountryError = document.getElementById("birthCountryError")
    if (birthCountry.length === 0) {
        birthCountryError.innerHTML = "Birth country cannot be empty"
        return false
    } else {
        birthCountryError.innerHTML = ""
        return true
    }
}