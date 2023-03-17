function deletePerson(element, tableId) {
    const table = $(tableId).DataTable()
    const data = table.row($(element).parents('tr')).data()
    fetch("https://site138.webte.fei.stuba.sk/zadanie1/be/deletePerson.php?id=" + data.id, {method: "DELETE"})
        .then(response => {
            return response.json()
        })
        .then(data => {
            alert(data.message)
            location.reload()
        })
}

function deletePersonById(id) {
    fetch("https://site138.webte.fei.stuba.sk/zadanie1/be/deletePerson.php?id=" + id, {method: "DELETE"})
        .then(response => {
            return response.json()
        })
        .then(data => {
            alert(data.message)
            window.location = "index.html"
        })
}