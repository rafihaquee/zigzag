
// =========== curved-text start===========//

$('.curve').arctext({
  radius: 750,
  dir: 1,
})
// =========== curved-text end===========//
// =========== banner-slider start===========//

$('.banner_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-angle-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-right next"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
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
        breakpoint: 575,
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
// =========== banner-slider end===========//
// =========== team-slider start===========//
$('.teem_slider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [{
      breakpoint: 992,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
      }
  }, {
      breakpoint: 768,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2
      }
  }, {
      breakpoint: 575,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
  } // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
  ]
});
// =========== team-slider end===========//
// =========== gallurey-veno start===========//
$(document).ready(function(){
  $('.venobox').venobox(); 
});
// =========== gallurey-veno end===========//
// =========== counter-down start===========//
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor(distance / (1000 * 60 * 60 * 24));
    var minutes = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var seconds = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var Milisecs = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("mil").innerHTML = Milisecs
    document.getElementById("ho").innerHTML = hours
    document.getElementById("min").innerHTML = minutes
    document.getElementById("sec").innerHTML = seconds 

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
// =========== counter-down end===========//
// =========== about_story counter start===========//
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var Have = Math.floor(distance / (1000 * 60 * 60 * 24));
  var Reviewed = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var Occasionally = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var Regular = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("234k+").innerHTML = Have 
  document.getElementById("125k+").innerHTML = Reviewed
  document.getElementById("94k+").innerHTML = Occasionally 
  document.getElementById("83k+").innerHTML = Regular 

  // If the count down is finished, write some text
  if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
// =========== about_story counter end===========//
// =========== contack_part counter start===========//
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var Days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var Hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var Mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var Secs = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = Days
  document.getElementById("ho").innerHTML = Hours
  document.getElementById("min").innerHTML = Mins
  document.getElementById("sec").innerHTML = Secs 

  // If the count down is finished, write some text
  if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
// =========== contack_part counter end===========//
// =========== testi_slider start===========//
$('.testi_slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-chevron-left prev"></i>',
  nextArrow: '<i class="fas fa-chevron-right next"></i>',
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 480,
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
// =========== testi_slider end===========//