// Ambil elemen kartu
const card = document.querySelector(".outer");

// Saat diklik, kasih animasi "pulse" pada border gradient
card.addEventListener("click", () => {
  card.classList.add("clicked");
  setTimeout(() => card.classList.remove("clicked"), 800);
});
// Ambil elemen tombol dan musik
const playBtn = document.getElementById("playBtn");
const music = document.getElementById("bgMusic");

// Status awal
let isPlaying = false;

// Event klik tombol
playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play(); // mainkan lagu
    playBtn.textContent = "Pause Music 🎵";
    playBtn.classList.add("pulse");
  } else {
    music.pause(); // hentikan lagu
    playBtn.textContent = "Play Music ▶️";
    playBtn.classList.remove("pulse");
  }

  isPlaying = !isPlaying; // ubah status
});
