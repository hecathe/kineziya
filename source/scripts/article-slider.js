var sliderBottom = new Swiper('.article-slider__container-bottom', {
    spaceBetween: 20,
    slidesPerView: 4,
    //freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var sliderTop = new Swiper('.article-slider__container-top', {
    spaceBetween: 20,
    thumbs: {
      swiper: sliderBottom
    }
  });