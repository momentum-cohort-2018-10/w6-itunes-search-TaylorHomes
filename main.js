/* globals $, jQuery */

const searchButton = document.getElementById('search-button')
const searchField = document.getElementById('search-field')
const audioPlayer = $('#musicbox')


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
            $resultsDiv.append($('<div>').html(trackHtml(track)))
        }
    }, 'json')



})

function trackHtml(track) {
    return `

    <div style="text-align:center;">
        <h2><a href="${track.trackViewUrl}">${track.trackName} </h2>
        <h3> Album: ${track.collectionName} </h3>
        <img src="${track.artworkUrl100.replace(/100x100bb.jpg/, "/200x200bb.jpg")}">
        <audio data-url="${track.trackViewUrl}" controls="" src"${track.previewURL}"></audio>
        </a>
    </div>
    `
}







