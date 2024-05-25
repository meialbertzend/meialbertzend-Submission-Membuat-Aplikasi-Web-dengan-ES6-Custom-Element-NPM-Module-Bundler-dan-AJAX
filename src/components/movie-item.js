class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
          /* Gaya CSS untuk movie-item */
          .movie {
            width: 100%;
            max-width: 290px;
            height: 600px; /* Atur tinggi tetap untuk elemen movie-item */
            margin: 16px;
            padding: 16px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            text-align: left;
            transition: background-color 0.3s;
            overflow: auto; /* Aktifkan overflow jika konten melebihi tinggi tetap */
          }
          
          
  
          .movie img {
            width: 100%;
            height: 360px; /* Atur tinggi gambar sesuai yang Anda inginkan */
            object-fit: cover;
            border-radius: 10px 10px 0 0;
          }
  
          .movie-info {
            padding: 16px;
            max-height: 220px; /* Batasi tinggi maksimum konten */
          }
          
  
          .movie-title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 8px;
          }
  
          .movie-info p {
            margin: 8px 0;
          }
          .movie:hover {
            background-color: #f2f2f2; /* Warna latar belakang saat dihover */
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }
          @media screen and (max-width: 376px) {
            .movie {
              max-width: 88%; /* Gunakan lebar penuh pada layar kecil */
              margin: 8px 0;
            }
    
            .movie img {
              max-height: auto; /* Biarkan tinggi gambar disesuaikan */
              border-radius: 10px; /* Hapus radius sudut pada gambar */
            }

        </style>
        <div class="movie">
        ${this._movie.poster_path
        ? `<img src="https://image.tmdb.org/t/p/w185${this._movie.poster_path}" alt="${this._movie.title}">`
        : ''
      }
        <div class="movie-info">
          <p class="movie-title">${this._movie.title}</p>
          <p><strong>Tanggal Rilis: </strong><br>${this._movie.release_date}</p>
          <p><strong>Deskripsi Film:</strong><br> ${this._movie.overview}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('movie-item', MovieItem);
