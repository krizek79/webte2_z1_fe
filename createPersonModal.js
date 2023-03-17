const addPersonDiv = document.getElementById("addPersonDiv")
if (localStorage.getItem("username")) {
    addPersonDiv.classList.add("border", "py-3", "w-4/5", "md:w-3-5", "mx-auto", "my-6", "flex")
    addPersonDiv.innerHTML += `
    <button
        class="w-1/5 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform
        bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 mx-auto"
        onclick="openCreatePersonModal()"
    >
        Add new person
    </button>
    `
} else {
    addPersonDiv.classList.remove("border", "py-3", "w-4/5", "md:w-3-5", "mx-auto", "my-6", "flex")
    addPersonDiv.innerHTML = ``
}

function openCreatePersonModal() {
    const body = document.getElementsByTagName("BODY")[0]
    const modal = document.getElementById("createPersonModal")
    const modalShadow = document.getElementById("modalShadow")
    body.classList.add("fixed", "overflow-y-scroll")
    modal.classList.remove("opacity-0", "pointer-events-none")
    modal.innerHTML = `
    <div
        class="m-6 justify-center items-center flex flex-col fixed inset-0 z-50 outline-none focus:outline-none
        w-4/5 mx-auto rounded-md bg-yellow-600"
    >
        <div class="sm:px-6 w-full p-6 m-auto bg-white shadow-md overflow-y-auto rounded-md">
            <div class="flex width-full justify-between pb-3 border-b">
                <div class="text-2xl font-medium self-end">
                    Create person
                </div>
                <button
                    class="text-2xl text-center cursor-pointer"
                    onclick="closeCreatePersonModal()"
                >
                    &times;
                </button>
            </div>
            <div>
                <div class="my-2">
                    <label 
                        for="name"
                        class="block text-sm font-semibold text-gray-800"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value=""
                        onkeyup="validateName()"
                        class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md 
                        focus:border-blue-700 focus:ring-blue-300 focus:outline-none focus:ring 
                        focus:ring-opacity-40"
                        required
                    />
                    <span id="nameError" class="text-sm text-red-600"></span>
                </div>
                <div class="mb-2">
                    <label 
                        for="surname"
                        class="block text-sm font-semibold text-gray-800"
                    >
                        Surname
                    </label>
                    <input
                        id="surname"
                        type="text"
                        name="surname"
                        value=""
                        onkeyup="validateSurname()"
                        class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md 
                        focus:border-blue-700 focus:ring-blue-300 focus:outline-none focus:ring 
                        focus:ring-opacity-40"
                        required
                    />
                    <span id="surnameError" class="text-sm text-red-600"></span>
                </div>
                <div class="mb-2">
                    <label 
                        for="birthDay"
                        class="block text-sm font-semibold text-gray-800"
                    >
                        Birth day
                    </label>
                    <input
                        id="birthDay"
                        type="date"
                        name="birthDay"
                        value=""
                        onkeyup="validateBirthDay()"
                        class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md 
                        focus:border-blue-700 focus:ring-blue-300 focus:outline-none focus:ring 
                        focus:ring-opacity-40"
                        required
                    />
                    <span id="birthDayError" class="text-sm text-red-600"></span>
                </div>
                <div class="mb-2">
                    <label 
                        for="birthPlace"
                        class="block text-sm font-semibold text-gray-800"
                    >
                        Birth place
                    </label>
                    <input
                        id="birthPlace"
                        type="text"
                        name="name"
                        value=""
                        onkeyup="validateBirthPlace()"
                        class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md 
                        focus:border-blue-700 focus:ring-blue-300 focus:outline-none focus:ring 
                        focus:ring-opacity-40"
                        required
                    />
                    <span id="birthPlaceError" class="text-sm text-red-600"></span>
                </div>
                <div class="mb-2">
                    <label 
                        for="birthCountry"
                        class="block text-sm font-semibold text-gray-800"
                    >
                        Birth country
                    </label>
                    <input
                        id="birthCountry"
                        type="text"
                        name="birthCountry"
                        value=""
                        onkeyup="validateBirthCountry()"
                        class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md 
                        focus:border-blue-700 focus:ring-blue-300 focus:outline-none focus:ring 
                        focus:ring-opacity-40"
                        required
                    />
                    <span id="birthCountryError" class="text-sm text-red-600"></span>
                </div>
                <div class="mb-2">
                    <label 
                        for="deathDay"
                        class="block text-sm font-semibold text-gray-800"
                    >
                        Death day
                    </label>
                    <input
                        id="deathDay"
                        type="date"
                        name="deathDay"
                        class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md 
                        focus:border-blue-700 focus:ring-blue-300 focus:outline-none focus:ring 
                        focus:ring-opacity-40"
                    />
                </div>
                <div class="mb-2">
                    <label 
                        for="deathPlace"
                        class="block text-sm font-semibold text-gray-800"
                    >
                        Death place
                    </label>
                    <input
                        id="deathPlace"
                        type="text"
                        name="deathPlace"
                        class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md 
                        focus:border-blue-700 focus:ring-blue-300 focus:outline-none focus:ring 
                        focus:ring-opacity-40"
                    />
                </div>
                <div class="mb-2">
                    <label 
                        for="deathCountry"
                        class="block text-sm font-semibold text-gray-800"
                    >
                        Death country
                    </label>
                    <input
                        id="deathCountry"
                        type="text"
                        name="deathCountry"
                        class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md 
                        focus:border-blue-700 focus:ring-blue-300 focus:outline-none focus:ring 
                        focus:ring-opacity-40"
                    />
                </div>
                <div class="pt-6 border-t">
                    <button 
                        id="createPersonButton"
                        class="w-full px-4 py-2 tracking-wide text-white transition-colors
                        duration-200 transform bg-green-500 rounded-md hover:bg-green-600 focus:outline-none 
                        focus:bg-green-600"
                        onclick="createPerson()"
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    </div>
    `
    modalShadow.classList.add("opacity-75", "fixed", "inset-0", "z-40", "bg-black")
}

function closeCreatePersonModal() {
    const body = document.getElementsByTagName("BODY")[0]
    const modal = document.getElementById("createPersonModal");
    const modalShadow = document.getElementById("modalShadow")
    modal.classList.add("opacity-0", "pointer-events-none");
    modal.innerHTML = "";
    modalShadow.classList.remove("opacity-75", "fixed", "inset-0", "z-40", "bg-black")
    body.classList.remove("fixed", "overflow-y-scroll")
}

function createPerson() {
    let name = document.getElementById("name").value
    let surname = document.getElementById("surname").value
    let birthDay = document.getElementById("birthDay").value
    let birthPlace = document.getElementById("birthPlace").value
    let birthCountry = document.getElementById("birthCountry").value
    let deathDay = document.getElementById("deathDay").value
    let deathPlace = document.getElementById("deathPlace").value
    let deathCountry = document.getElementById("deathCountry").value

    if (!isValidDate(birthDay)) {
        birthDay = null
    } else {
        let birthDayDate = new Date(birthDay)
        let birthDayYear = birthDayDate.getFullYear().toString().slice(-2)
        let birthDayMonth = (birthDayDate.getMonth() + 1).toString().padStart(2, "0")
        let birthDayDay = birthDayDate.getDate().toString().padStart(2, "0")
        birthDay = `${birthDayYear}-${birthDayMonth}-${birthDayDay}`
    }

    if (!isValidDate(deathDay)) {
        deathDay = null
    } else {
        let deathDayDate = new Date(deathDay)
        let deathDayYear = deathDayDate.getFullYear().toString().slice(-2)
        let deathDayMonth = (deathDayDate.getMonth() + 1).toString().padStart(2, "0")
        let deathDayDay = deathDayDate.getDate().toString().padStart(2, "0")
        deathDay = `${deathDayYear}-${deathDayMonth}-${deathDayDay}`
    }

    if (deathPlace === "") {
        deathPlace = null
    }

    if (deathCountry === "") {
        deathCountry = null
    }

    if (!validateName() || !validateSurname() || !validateBirthDay() || !validateBirthPlace()
        || !validateBirthCountry()
    ) {
        return
    }

    const request = {
        name: name,
        surname: surname,
        birthDay: birthDay,
        birthPlace: birthPlace,
        birthCountry: birthCountry,
        deathDay: deathDay,
        deathPlace: deathPlace,
        deathCountry: deathCountry
    }

    fetch("https://site138.webte.fei.stuba.sk/zadanie1/be/createPerson.php", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    }).then(response => {
        if (response.status === 201) {
            return response.json().then(data => {
                alert(data.message)
                window.location = "person.html?id=" + data.id
            })
        } else {
            return response.json().then(error => {
                alert(error.message)
            })
        }
    })
}