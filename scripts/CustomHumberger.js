//For Customs Hamburger Menu
const hamburgerBtn = document.getElementById('hamburgerBtn');

hamburgerBtn.addEventListener('click', () => {
  const innerBtn = hamburgerBtn.querySelector('.hamburger-btn');
  innerBtn.classList.toggle('active');

  if (innerBtn.classList.contains('active')) {
    setTimeout(() => {
      innerBtn.classList.add('rotated');
    }, 800); // jeda 0.8 detik sebelum rotasi
  } else {
    innerBtn.classList.remove('rotated');
  }
});