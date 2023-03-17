const topTenTableTr = document.getElementById("topTenTableTr")

window.onload = () => {
    fetch("https://site138.webte.fei.stuba.sk/zadanie1/be/getTopTenList.php")
        .then(response => {
            return response.json()
        })
        .then(data => {
            if (localStorage.getItem("username")) {
                createTableAuth(data)
            } else {
                createTableNoAuth(data)
            }
        })
        .catch(error => {
            console.log(error);
        })
}

function createTableAuth(data) {
    topTenTableTr.innerHTML += `
        <th class="px-2 py-2 text-gray-600">Actions</th>
    `
    $("#topTenTable").DataTable({
        pageLength: 10,
        order: [[3, "desc"]],
        data: data,
        columns: [
            {data: "id"},
            {
                data: ["name", "surname"],
                render: function (data, type, row) {
                    return `
                        <a href="person.html?id=${row.id}" class="text-blue-800 hover:underline cursor-pointer">
                            ${row.name} ${row.surname}
                        </a>
                    `
                }
            },
            {data: "gold_medals"},
            {data: null}
        ],
        columnDefs: [
            {
                targets: -1,
                defaultContent: `
                <div class="flex flex-row gap-x-2 items-center justify-center">
                    <button 
                        class="flex p-1 bg-yellow-500 rounded-md hover:rounded-3xl hover:bg-yellow-600 
                        transition-all duration-300 text-white"
                        onclick="getEditPerson(this, '#topTenTable')"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                        </svg>
                    </button>
                    <button 
                        class="flex p-1 bg-red-500 rounded-md hover:rounded-3xl hover:bg-red-600 transition-all 
                        duration-300 text-white"
                        onclick="deletePerson(this, '#topTenTable')"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                    </button>
                </div>
            `
            }
        ]
    })
}

function createTableNoAuth(data) {
    $("#topTenTable").DataTable({
        pageLength: 10,
        order: [[2, "desc"]],
        data: data,
        columns: [
            {data: "id"},
            {
                data: ["name", "surname"],
                render: function (data, type, row) {
                    return `
                        <a href="person.html?id=${row.id}" class="text-blue-800 hover:underline cursor-pointer">
                            ${row.name} ${row.surname}
                        </a>
                    `
                }
            },
            {data: "gold_medals"}
        ]
    })
}