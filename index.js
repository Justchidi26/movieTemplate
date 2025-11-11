function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Show popup automatically after few seconds
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('popup').classList.remove('hidden');
  }, 8000);
});

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}
