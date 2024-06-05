$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
  });
  const carousel = document.getElementById('carouselExampleIndicators');
  let interval = setInterval(function() {
    carousel.classList.add('slide');
    carousel.classList.add('carousel-slide');
    carousel.classList.remove('carousel-fade');
    carousel.querySelector('.carousel-item.active').classList.remove('active');
    let nextSlide = carousel.querySelector('.carousel-item.active').nextElementSibling;
    if (!nextSlide) {
      nextSlide = carousel.querySelector('.carousel-item:first-child');
    }
    nextSlide.classList.add('active');
  }, 5000); 
  carousel.addEventListener('mouseenter', function() {
    clearInterval(interval);
  });
  carousel.addEventListener('mouseleave', function() {
    interval = setInterval(function() {
      carousel.classList.add('slide');
      carousel.classList.add('carousel-slide');
      carousel.classList.remove('carousel-fade');
      carousel.querySelector('.carousel-item.active').classList.remove('active');
      let nextSlide = carousel.querySelector('.carousel-item.active').nextElementSibling;
      if (!nextSlide) {
        nextSlide = carousel.querySelector('.carousel-item:first-child');
      }
      nextSlide.classList.add('active');
    }, 5000); 
  });

  