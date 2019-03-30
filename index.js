
$(function() {
  attachEventListeners();

function getPaintings(e) {
  e.preventDefault();
    $.get('https://collectionapi.metmuseum.org/public/collection/v1/objects', function(data) {
      console.log(data)
      data.forEach(paintingNew => {
        const painting = paintingNew
        const id = painting.id
        const paintingHtml = `
        <div class="painting-object">
          <img src="${painting.primaryImage}"><br>
          <h1>${painting.title}</h1>
        </div>
        `
      $('div#content').append(paintingHtml)
  })
}, "json")
}

function attachEventListeners() {

    $('a#refresh').on('click', getPaintings)
}
})
