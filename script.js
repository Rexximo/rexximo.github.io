// Fungsi untuk menyimpan data ke localStorage
function saveData(name, review) {
    localStorage.setItem('name', name);
    localStorage.setItem('review', review);
}

// Fungsi untuk memuat data dari localStorage
function loadData() {
    const name = localStorage.getItem('name');
    const review = localStorage.getItem('review');

    if (name && review) {
        document.getElementById('name').value = name;
        document.getElementById('review').value = review;

        displayResult(name, review);
    }
}

// Fungsi untuk menampilkan hasil
function displayResult(name, review) {

    const resultH2 = document.getElementById('resultName');
    resultH2.innerHTML = `
        <h2>${name}</h2>
    `;
    const resultP = document.getElementById('resultRev');
    resultP.innerHTML = `
        <p class="card-text">${review}</p>
    `;
}

document.getElementById('formData').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah halaman reload

    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;

    saveData(name, review);
    displayResult(name, review);
});

// Memuat data ketika halaman pertama kali dimuat
window.onload = loadData;




