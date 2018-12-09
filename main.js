/* globals $, jQuery */

const searchButton = document.getElementById('search-button')
const searchField = document.getElementById('search-field')


$('#search-button').on('click', function (entity) {
    let query = $('#search-field').val()


    $.get('https://itunes.apple.com/search?term', { term: query }, function (entity) {
        console.log(entity)
        let $resultsDiv = $('#search-results')
        $resultsDiv
            .empty()
            .append($('<p>')
                .text(`Total count: ${entity.resultCount}`)
            )

        for (let track of entity.results) {
            $resultsDiv.append($('<p>').html(trackHtml(track)))
        }
    }, 'json')
})

function trackHtml(track) {
    return `
        <a href="${track.trackViewUrl}">${track.trackName}</a> - Album: ${track.collectionName} 
        <img src="${track.artworkUrl100}">
    `
}

