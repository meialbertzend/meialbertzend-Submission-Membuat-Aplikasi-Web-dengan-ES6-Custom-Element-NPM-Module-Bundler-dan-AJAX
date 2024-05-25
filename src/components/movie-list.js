//movie-list.js
import './movie-item.js';
class MovieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  set title(title) {
    this._title = title;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        /* Gaya CSS untuk daftar film di sini */
        .movie-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        
        .header {
          width: 100%;
          text-align: center;
          margin-bottom: 16px;
        }
        @media screen and (max-width: 850px) {
          .movie-list {
            justify-content: center; /* Menengahkan elemen-elemen saat layar lebih kecil */
          }
        }
        @media screen and (max-width: 280px) {
          .movie-list {
            justify-content: center; /* Menengahkan elemen-elemen saat layar lebih kecil */
          }
        }
      </style>
      <div class="header">
        <h2>${this._title}</h2>
      </div>
      <div class="movie-list">
        ${this._movies.map(() => `
          <movie-item></movie-item>
        `).join('')}
      </div>
    `;

    // Seleksi semua elemen <movie-item> dan atur properti movie untuk masing-masing
    const movieItemElements = this.shadowDOM.querySelectorAll('movie-item');
    movieItemElements.forEach((movieItem, index) => {
      movieItem.movie = this._movies[index];
    });
  }
}

customElements.define('movie-list', MovieList);
