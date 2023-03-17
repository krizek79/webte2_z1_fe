const urlParams = new URLSearchParams(window.location.search)
const personId = urlParams.get('id')
const personDiv = document.getElementById("personDiv")

fetch("https://site138.webte.fei.stuba.sk/zadanie1/be/getPersonById.php?id=" + personId)
    .then(response => {
        if (response.status === 200) {
            return response.json().then(data => {
                document.title = "Zadanie #1 | " + data.name + " " + data.surname
                personDiv.innerHTML += `
                <div class="pb-3 border-b">
                    <div class="flex flex-col gap-y-3  pb-3 border-b">
                        <h1 class="text-3xl font-medium">
                            ${data.name} ${data.surname}
                        </h1>
                        ${localStorage.getItem("username") ? `
                        <div class="flex flex-row gap-x-2">
                            <button 
                                class="flex p-1 bg-yellow-500 rounded-md hover:rounded-3xl hover:bg-yellow-600 
                                transition-all duration-300 text-white place-content-center"
                                onclick="getEditPersonById(${data.id})"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                                </svg>
                            </button>
                            <button 
                                class="flex p-1 bg-red-500 rounded-md hover:rounded-3xl hover:bg-red-600 transition-all 
                                duration-300 text-white"
                                onclick="deletePersonById(personId)"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                </svg>
                            </button>
                        </div>
                        ` : ``}
                    </div>
                    <div class="my-2 flex flex-row gap-x-2">
                        <b>Birth:</b>
                        <i>${data.birthDay} ${data.birthPlace} ${data.birthCountry}</i>
                    </div>
                    ${data.deathDay && data.deathPlace && data.deathCountry ? `
                        <div class="my-2 flex flex-row gap-x-2">
                            <b>Death:</b>
                            <i>${data.deathDay} ${data.deathPlace} ${data.deathCountry}</i>
                        </div>
                    ` : `
                        <div class="my-2 flex flex-row gap-x-2">
                             <b>Death:</b>
                             <i>---</i>
                        </div>
                    `}
                    <div class="my-2 flex flex-row gap-x-2">
                        <b>Gold medals:</b>
                        <i>${data.goldMedals}</i>
                    </div>
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
                `
            })
        }
    })