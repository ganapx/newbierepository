// Show Delete Button
// =========================================================================================
// For Mobile Display =====
// Ambil elemen input dan tombol clear
const cariBox = document.querySelector('.cari-box');
const searchInput = document.querySelector('.cari-input .input');
const bersihBtn = document.querySelector('.cari-input .bersih-search');

// Saat user mengetik sesuatu
searchInput.addEventListener('input', () => {
  if (searchInput.value.trim() !== '') {
    bersihBtn.classList.add('show'); // tampilkan tombol clear
  } else {
    bersihBtn.classList.remove('show'); // sembunyikan tombol clear
  }
});

// Saat tombol clear diklik
function clearSearch() {
  // Kosongkan nilai input
  searchInput.value = '';
  // Sembunyikan tombol clear segera
  bersihBtn.classList.remove('show');
  // Fokus kembali ke input
  searchInput.focus();
}

// Saat kursor keluar dari search box → sembunyikan tombol clear
cariBox.addEventListener('mouseleave', () => {
  bersihBtn.classList.remove('show');
});

// Saat kursor masuk ke search box → jika input berisi, tampilkan tombol clear
cariBox.addEventListener('mouseenter', () => {
  if (searchInput.value.trim() !== '') {
    bersihBtn.classList.add('show');
  }
});


// For Desktop Display =====
// Ambil elemen input dan tombol clear
const searchBox = document.querySelector('.search-box');
const searchInput1 = document.querySelector('.search-input .input');
const clearBtn1 = document.querySelector('.search-input .clear-search');

// Saat user mengetik sesuatu
searchInput1.addEventListener('input', () => {
  if (searchInput1.value.trim() !== '') {
    clearBtn1.classList.add('show'); // tampilkan tombol clear
  } else {
    clearBtn1.classList.remove('show'); // sembunyikan tombol clear
  }
});

// Saat tombol clear diklik
function clearSearch1() {
  // Kosongkan nilai input
  searchInput1.value = '';
  // Sembunyikan tombol clear segera
  clearBtn1.classList.remove('show');
  // Fokus kembali ke input
  searchInput1.focus();
}

// Saat kursor keluar dari search box → sembunyikan tombol clear
searchBox.addEventListener('mouseleave', () => {
  clearBtn1.classList.remove('show');
});

// Saat kursor masuk ke search box → jika input berisi, tampilkan tombol clear
searchBox.addEventListener('mouseenter', () => {
  if (searchInput1.value.trim() !== '') {
    clearBtn1.classList.add('show');
  }
});
// =========================================================================================










// Search Logic and Data Arrays 
// =========================================================================================
// For Mobile Display =====
// Take from input searchInput class element => Enter
document.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById("searchInput");

  input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // cegah reload
      performSearch();
    }
  });
});
// Search Logic
function performSearch() {
  const inputValue = document.getElementById('searchInput').value.trim().toLowerCase();

  if (inputValue === "") {
    alert("Silahkan ketik sesuatu terlebih dahulu!");
  } else {
    const searchMapping = [
      { keywords: ["home", "index", "main",], path: "../../public/index.html" },
      { keywords: ["about", "about us", "visi misi", "visi", "misi", "sejarah", "logo", "guideline", "team"], path: "about.html" },
      { keywords: ["provision", "services", "provision services", "konstruksi", "pemeliharaan", "konstruksi jalan", "jalan"], path: "provisionServices.html" },
      { keywords: ["contact", "contact us", "maps", "google maps", "location"], path: "contactUs.html" }
    ];

    const match = searchMapping.find(item =>
      item.keywords.some(keyword => keyword === inputValue)
    );

    if (match) {
      window.location.href = match.path;
    } else {
      window.location.href = "errorSearchHandling.html";
    }
  }
}


// Take From input searchInput1 class Element => Enter
// For Desktop Display =====
document.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById("searchInput1");

  input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // cegah reload
      performSearch1();
    }
  });
});
// Search Logic
function performSearch1() {
  const inputValue = document.getElementById('searchInput1').value.trim().toLowerCase();

  if (inputValue === "") {
    alert("Silahkan ketik sesuatu terlebih dahulu!");
  } else {
    const searchMapping = [
      { keywords: ["home", "index", "main",], path: "../../public/index.html" },
      { keywords: ["about", "about us", "visi misi", "visi", "misi", "sejarah", "logo", "guideline", "team"], path: "about.html" },
      { keywords: ["provision", "services", "provision services", "konstruksi", "pemeliharaan", "konstruksi jalan", "jalan"], path: "provisionServices.html" },
      { keywords: ["contact", "contact us", "maps", "google maps", "location"], path: "contactUs.html" }
    ];

    const match = searchMapping.find(item =>
      item.keywords.some(keyword => keyword === inputValue)
    );

    if (match) {
      window.location.href = match.path;
    } else {
      window.location.href = "errorSearchHandling.html";
    }
  }
}
// =========================================================================================
