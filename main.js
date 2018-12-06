const searchButton = document.getElementById('search-button')
const searchField = document.getElementById('search-field')



searchButton.addEventListener('click', function (event) {
    let query = searchField.value

    $.get("https://itunes-api-proxy.glitch.me/search?term= ${query}", { q: query }, function (results) {
        console.log(results)
    }
    )
})

// not functional yet
function enterKey() {
    searchField.addEventListener("keydown", function (event) {
        if (event.code === "Enter") {
            searchEvent(event)
        }
    })
}


