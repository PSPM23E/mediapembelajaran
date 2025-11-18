// ===== AUTO SCALE UNTUK GAME PYTHA CLIMB =====

// ukuran dasar canvas game (yang asli)
const BASE_WIDTH = 1100;
const BASE_HEIGHT = 620;

// ambil canvas
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// pastikan ukuran internal tetap (untuk logika game)
canvas.width = BASE_WIDTH;
canvas.height = BASE_HEIGHT;

function autoScale() {
    // hitung skala berdasarkan lebar layar
    const scale = canvas.clientWidth / BASE_WIDTH;

    // apply transform ke context
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
}

// jalankan saat layar berubah
window.addEventListener("resize", autoScale);

// jalankan pertama kali
autoScale();
