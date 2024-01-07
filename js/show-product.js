document.addEventListener('DOMContentLoaded', function () {
  let currentSlide = 0;

  const showSlide = (index) => {
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }
    const translationValue = -currentSlide * 100 + '%';
    slider.style.transform = 'translateX(' + translationValue + ')';
    updatePagination();
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  const createPaginationDots = () => {
    const pagination = document.getElementById('pagination');
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
      const dot = document.createElement('span');
      dot.className = 'dot';
      const thumbnail = document.createElement('img');
      thumbnail.src = slide.querySelector('img').src;
      dot.appendChild(thumbnail);
      dot.addEventListener('click', () => showSlide(index));
      pagination.appendChild(dot);
    });
    updatePagination();
  };

  const updatePagination = () => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };

  createPaginationDots();

  document.getElementById('prevBtn').addEventListener('click', prevSlide);
  document.getElementById('nextBtn').addEventListener('click', nextSlide);

  // Автоматичне перемикання слайдів (розкоментуйте рядки нижче, щоб увімкнути)
  // setInterval(() => {
  //   nextSlide();
  // }, 5000);
});
