const playBtn = document.getElementById("playTrailerBtn");
const trailerSection = document.getElementById("trailerSection");
const bgMusic = document.getElementById("bgMusic");

playBtn.addEventListener("click", () => {
  trailerSection.style.display = "block";
  bgMusic.play();
  window.scrollTo({
    top: trailerSection.offsetTop,
    behavior: "smooth",
  });
});
