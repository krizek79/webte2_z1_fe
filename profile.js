const urlParams = new URLSearchParams(window.location.search)
const usernameOrEmail = urlParams.get('usernameOrEmail')
const profileDiv = document.getElementById("profileDiv")

fetch("https://site138.webte.fei.stuba.sk/zadanie1/be/getAppUserHistory.php?usernameOrEmail=" + usernameOrEmail)
    .then(response => {
        if (response.status === 200) {
            return response.json().then(data => {
                document.title = "Zadanie #1 | Profile - " + localStorage.getItem("fullName")
                profileDiv.innerHTML += `
                    <div class="pb-6 border-b">
                        <h1 class="text-3xl font-medium pb-2">Profile activity</h1>
                        <span>${localStorage.getItem("fullName")} (${localStorage.getItem("username")})</span>
                    </div>
                    <div class="pt-6">
                        <h2 class="text-2xl pb-2">Login history</h2>
                        <table class="table table-auto w-full text-center border border-0 border-black">
                            <thead class="bg-gray-200">
                                <tr>
                                    <th class="p-2">Id</th>
                                    <th class="p-2">Timestamp</th>
                                    <th class="p-2">Method</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${data.logins.map((record) => `
                                    <tr>
                                        <td class="p-2">${record.id}</td>
                                        <td class="p-2">${record.time}</td>
                                        <td class="p-2">${record.method}</td>
                                     </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                `
            })
        } else {
            return response.json().then(error => {
                console.log(error)
            })
        }
    })