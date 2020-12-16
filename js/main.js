$('.freegame_item').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $(document).ready(function () {
    $('.burgar_btn').on('click', function (e) {
        // 用 on 監聽 .burgar_btn 的點擊功能
        e.preventDefault();
        // 點擊 burgar_btn 時，讓原本的 a 連結效果無效
        $('body').toggleClass('burgar_btn-show');
        // 讓瀏覽器知道有點擊 .burgar_btn 的時候，會有收合功能，並在 body 產生一個新的 Class 名稱 burgar_btn-show
    });
});