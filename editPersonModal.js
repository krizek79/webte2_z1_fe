function getEditPerson(element, tableId) {
    const table = $(tableId).DataTable()
    const data = table.row($(element).parents('tr')).data()

    fetch("https://site138.webte.fei.stuba.sk/zadanie1/be/getPersonById.php?id=" + data.id)
        .then(response => {
            return response.json()
        })
        .then(data => {
            openEditModal(data)
        })
        .catch(error => {
            console.log(error);
        })
}

function getEditPersonById(id) {
    fetch("https://site138.webte.fei.stuba.sk/zadanie1/be/getPersonById.php?id=" + id)
        .then(response => {
            return response.json()
        })
        .then(data => {
            openEditModal(data)
        })
        .catch(error => {
            console.log(error);
        })
}

function openEditModal(data) {
    const body = document.getElementsByTagName("BODY")[0]
    const modal = document.getElementById("editPersonModal")
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
                    Edit person
                </div>
                <button
                    class="text-2xl text-center cursor-pointer"
                    onclick="closeEditModal()"
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
                        value=${data.name}
                        class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md 
                        focus:border-blue-700 focus:ring-blue-300 focus:outline-none focus:ring 
                        focus:ring-opacity-40"
                        onkeyup="validateName()"
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
                        value=${data.surname}
                        class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md 
                        focus:border-blue-700 focus:ring-blue-300 focus:outline-none focus:ring 
                        focus:ring-opacity-40"
                        onkeyup="validateSurname()"
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
                        value=${data.birthDay}
                        class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md 
                        focus:border-blue-700 focus:ring-blue-300 focus:outline-none focus:ring 
                        focus:ring-opacity-40"
                        onkeyup="validateBirthDay()"
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
                        value=${data.birthPlace}
                        class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md 
                        focus:border-blue-700 focus:ring-blue-300 focus:outline-none focus:ring 
                        focus:ring-opacity-40"
                        onkeyup="validateBirthPlace()"
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
                        value=${data.birthCountry}
                        class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md 
                        focus:border-blue-700 focus:ring-blue-300 focus:outline-none focus:ring 
                        focus:ring-opacity-40"
                        onkeyup="validateBirthCountry()"
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
                        value=${data.deathDay}
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
                        value=${data.deathPlace}
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
                        value=${data.deathCountry}
                        class="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md 
                        focus:border-blue-700 focus:ring-blue-300 focus:outline-none focus:ring 
                        focus:ring-opacity-40"
                    />
                </div>
                <div class="">
                    <div class="text-lg font-bold py-3">Placements</div>
                    <table class="table table-auto w-full text-center border border-0 border-black">
                        <thead class="bg-gray-200">
                            <tr>
                                <th class="p-2">Id</th>
                                <th class="p-2">Placing</th>
                                <th class="p-2">Discipline</th>
                                <th class="p-2">Event</th>
                                <th class="p-2">City</th>
                                <th class="p-2">Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.placements.map((placement) => `
                                <tr>
                                    <td class="p-2">${placement.id}</td>
                                    <td class="p-2">${placement.placing}</td>
                                    <td class="p-2">${placement.discipline}</td>
                                    <td class="p-2">${placement.type}</td>
                                    <td class="p-2">${placement.city}</td>
                                    <td class="p-2">${placement.year}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                <div class="pt-6 border-t">
                    <button
                        class="w-full px-4 py-2 tracking-wide text-white transition-colors
                        duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none 
                        focus:bg-yellow-600"
                        onclick="updatePerson(${data.id})"
                    >
                        Edit
                    </button>
                </div>
            </div>
        </div>
    </div>
    `
    modalShadow.classList.add("opacity-75", "fixed", "inset-0", "z-40", "bg-black")
}

function closeEditModal() {
    const body = document.getElementsByTagName("BODY")[0]
    const modal = document.getElementById("editPersonModal");
    const modalShadow = document.getElementById("modalShadow")
    modal.classList.add("opacity-0", "pointer-events-none");
    modal.innerHTML = "";
    modalShadow.classList.remove("opacity-75", "fixed", "inset-0", "z-40", "bg-black")
    body.classList.remove("fixed", "overflow-y-scroll")
}

function updatePerson(personId) {
    let id = personId
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
        id: id,
        name: name,
        surname: surname,
        birthDay: birthDay,
        birthPlace: birthPlace,
        birthCountry: birthCountry,
        deathDay: deathDay,
        deathPlace: deathPlace,
        deathCountry: deathCountry
    }

    fetch("https://site138.webte.fei.stuba.sk/zadanie1/be/updatePerson.php", {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    }).then(response => {
        if (response.status === 200) {
            return response.json().then(data => {
                alert(data.message)
                window.location = "person.html?id=" + data.person.id
            })
        } else {
            return response.json().then(error => {
                alert(error.message)
            })
        }
    })
}