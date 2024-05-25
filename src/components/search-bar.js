class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();

  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    /* Gaya CSS untuk elemen search-bar */
    .search-container {
      max-width: 800px;
      padding: 16px;
      border-radius: 5px;
      display: flex;
      position: sticky;
      top: 10px;
      background-color: #3498db; /* Warna biru */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: background-color 0.3s, box-shadow 0.3s;
    }

    .search-container:hover {
      background-color: #2980b9; /* Warna biru yang sedikit lebih gelap saat hover */
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }

    .search-container > input {
      width: 75%;
      padding: 16px;
      border: 0;
      border-bottom: 2px solid #ffffff;
      font-weight: bold;
      background-color: transparent;
      color: white;
      transition: border-bottom 0.3s;
    }

    .search-container > input:focus {
      outline: 0;
      border-bottom: 2px solid #3498db; /* Warna biru saat input mendapatkan fokus */
    }

    .search-container > input::placeholder {
      color: #ffffff;
      font-weight: normal;
    }

    .search-container > button {
      width: 23%;
      cursor: pointer;
      margin-left: auto;
      padding: 16px;
      background-color: #2980b9; /* Warna biru yang sedikit lebih gelap */
      color: white;
      border: 0;
      text-transform: uppercase;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    .search-container > button:hover {
      background-color: #3498db; /* Warna biru saat tombol dihover */
    }

    @media screen and (max-width: 550px) {
      .search-container {
        flex-direction: column;
        position: static;
      }

      .search-container > input {
        width: 100%;
        margin-bottom: 12px;
      }

      .search-container > button {
        width: 100%;
      }
    }
  </style>
      
   <div id="search-container" class="search-container">
      <input placeholder="Cari Film" id="searchElement" type="search">
      <button id="searchButtonElement" type="submit">CARI</button>
    </div>
    `;

    const searchContainer = this.shadowDOM.querySelector('.search-container');
    const searchInputElement = this.shadowDOM.querySelector('#searchElement');

    searchInputElement.addEventListener('focus', () => {
      searchContainer.style.backgroundColor = '#2980b9';
    });

    searchInputElement.addEventListener('blur', () => {
      searchContainer.style.backgroundColor = '#3498db';
    });

    if (this._clickEvent) { // Pastikan clickEvent telah diatur sebelum menambahkan event listener
      this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
  }
}

customElements.define('search-bar', SearchBar);
