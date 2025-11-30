axios.get("https://imdb236.p.rapidapi.com/api/imdb/top250-movies", {
  headers: {
    "x-rapidapi-key": "e54ffa35c1msha05fc638dfd2f24p19ad21jsnb6665decdc2b",
    "x-rapidapi-host": "imdb236.p.rapidapi.com",
  }
})
.then(res => {
    console.log(res);
    res.data.map(film => {
        document.querySelector('#listfilm').innerHTML += templateCard(film.primaryImage, film.originalTitle, film.averageRating, film.id, film);
    })
})

const templateCard = (gambar, judul, rating, id, semua) => {
    return `
        <div class="card-main">
          <div class="card w-100 h-100">
          <div class="d-flex justify-content-center align-items-center overflow-hidden cover">
            <img src="${gambar}" class="card-img-top" width="110%" />
            </div>
            <div class="card-body">
              <h5 class="card-title">${judul}</h5>
              <p class="card-text">
                ${rating}
              </p>
              <button
                type="button"
                class="btn btn-primary position-absolute btn-custom"
                data-bs-toggle="modal"
                data-bs-target="#modal-${id}"
              >
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
    <div
      class="modal fade"
      id="modal-${id}"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${judul}</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body"><p>${semua.releaseDate}</p><p>${semua.description}</p></div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    `
}