function login() {
    const usernameOrEmail = document.getElementById("usernameOrEmail").value
    const password = document.getElementById("password").value

    if (usernameOrEmail.length === 0 || password.length === 0) {
        validateUsernameOrEmail()
        validatePassword()
        return
    }

    const request = {
        usernameOrEmail: usernameOrEmail,
        password: password
    }

    fetch("https://site138.webte.fei.stuba.sk/zadanie1/be/login.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    }).then(response => {
        if (response.status === 200) {
            return response.json().then(data => {
                localStorage.setItem("username", data.authResponse.username)
                localStorage.setItem("email", data.authResponse.email)
                localStorage.setItem("loginTime", data.authResponse.loginTime)
                localStorage.setItem("fullName", data.authResponse.fullName)
                window.location.href = "index.html"
            })
        } else {
            return response.json().then(error => {
                alert(error.message)
            })
        }
    })
}

function logout() {
    fetch("https://site138.webte.fei.stuba.sk/zadanie1/be/logout.php")
        .then(response => {
            if (response.status === 200) {
                return response.json().then(() => {
                    localStorage.removeItem("username")
                    localStorage.removeItem("loginTime")
                    localStorage.removeItem("fullName")
                    window.location.href = "index.html"
                })
            } else {
                alert("Oops, something went wrong...")
            }
        })
}

function register() {
    const name = document.getElementById("name").value
    const surname = document.getElementById("surname").value
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const matchingPassword = document.getElementById("matchingPassword").value

    if (!validateName() || !validateSurname() || !validateUsername() || !validateEmail()
        || !validatePassword() || !validateMatchingPassword()
    ) {
        return
    }

    const request = {
        name: name,
        lastName: surname,
        username: username,
        email: email,
        password: password,
        matchingPassword: matchingPassword
    }

    fetch("https://site138.webte.fei.stuba.sk/zadanie1/be/register.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    }).then(response => {
        if (response.status === 200) {
            return response.json().then(data => {
                alert(data.message)
                window.location.href = "signin.html"
            })
        } else {
            return response.json().then(error => {
                alert(error.message)
            })
        }
    })
}