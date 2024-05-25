// Import elemen-elemen yang Anda butuhkan
import './styles/style.css';
import './components/app-bar.js';
import './components/search-bar.js';
import './components/movie-list.js';
import axios from 'axios'; // Impor Axios

const API_KEY = 'xxxxxxxxxxxxxxxxxx';

// Fungsi untuk mengambil data film dari API TMDb berdasarkan kata kunci pencarian
const searchMoviesByKeyword = async (keyword) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}`);
        return response.data.results; // Mengembalikan daftar film hasil pencarian
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Mengembalikan array kosong jika terjadi kesalahan
    }
};

// Fungsi inisialisasi aplikasi
const initializeApp = () => {
    // Mengambil elemen-elemen yang diperlukan
    const searchBarElement = document.querySelector('search-bar');
    const movieListElement = document.querySelector('movie-list');

    // Mengatur event handler untuk tombol "Search" pada elemen search-bar
    searchBarElement.clickEvent = async () => {
        const keyword = searchBarElement.value;

        if (keyword) {
            const searchResults = await searchMoviesByKeyword(keyword);
            movieListElement.movies = searchResults;

            // Mengatur judul movie-list menjadi "Hasil Pencarian"
            movieListElement.title = 'Hasil Pencarian';
        } else {
            const popularMovies = await getPopularMovies();
            movieListElement.movies = popularMovies;

            // Mengatur judul movie-list kembali menjadi "Popular Movies"
            movieListElement.title = 'Film Populer';
        }
    };

    // Panggil fungsi inisialisasi aplikasi saat DOM sudah diinisialisasi
    document.addEventListener('DOMContentLoaded', () => {
        initializeApp();
    });
};

// Fungsi untuk mengambil data film populer dari API TMDb
const getPopularMovies = async () => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
        return response.data.results; // Mengembalikan daftar film populer
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        return []; // Mengembalikan array kosong jika terjadi kesalahan
    }
};

// Panggil fungsi inisialisasi aplikasi saat halaman dimuat
initializeApp();
