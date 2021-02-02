$(document).ready(function(){

    //Toggle Nav for mobile  menu
    $('.menu-show').click(function(){
        $('.menu-items').addClass('menu-active');
        $('.menu-hide').addClass('menu-hide-active');
    });

    $('.menu-hide').click(function(){
        $('.menu-items').toggleClass('menu-active');
    });

    // Hero Carousel
    $('.hero-carousel').owlCarousel({
         loop: true,
         autoplay: true,
         autoplayTimeout: 3000,
         dots: false,
         dotsEach: false,
         autoplayHoverPause: true,
         nav:true,
         navText: ["<i class='fas fa-long-arrow-alt-left''></i>", "<i class='fas fa-long-arrow-alt-right''></i>"],
         responsive: {
             0: {
                 items: 2
             },
             600: {
                 items: 3
             },
             768: {
                 items: 3
             },
             992: {
                 items: 3
             },
             1000: {
                 items: 4
             },
             1199: {
                 items: 4
             },
             1920: {
                 items: 4
            }
        }
    });

	// Service Carousel
    $('.service-carousel').owlCarousel({
         loop: true,
         autoplay: true,
         autoplayTimeout: 5000,
         dots: true,
         dotsEach: true,
         autoplayHoverPause: true,
         nav:false,
         navText: ["<i class='fas fa-long-arrow-alt-left''></i>", "<i class='fas fa-long-arrow-alt-right''></i>"],
         responsive: {
             0: {
                 items: 1
             },
             768: {
                 items: 1
             },
             992: {
                 items: 1
             },
             1000: {
                 items: 1
             },
             1199: {
                 items: 1
             },
             1920: {
                 items: 1
            }
        }
    });
    // Service Carousel Two
    $('.service-carousel-two').owlCarousel({
         loop: true,
         autoplay: true,
         autoplayTimeout: 5000,
         dots: true,
         dotsEach: true,
         autoplayHoverPause: true,
         nav:false,
         navText: ["<i class='fas fa-long-arrow-alt-left''></i>", "<i class='fas fa-long-arrow-alt-right''></i>"],
         responsive: {
             0: {
                 items: 1
             },
             768: {
                 items: 2
             },
             992: {
                 items: 2
             },
             1000: {
                 items: 2
             },
             1199: {
                 items: 2
             },
             1920: {
                 items: 2
            }
        }
    });

   // Brand Carousel
    $('.brand-carousel').owlCarousel({
         loop: true,
         autoplay: true,
         autoplayTimeout: 3000,
         dots: false,
         dotsEach: false,
         autoplayHoverPause: true,
         nav:false,
         smartSpeed: 2000,
         navText: ["<i class='fas fa-long-arrow-alt-left''></i>", "<i class='fas fa-long-arrow-alt-right''></i>"],
         responsive: {
             0: {
                 items: 1
             },
             768: {
                 items: 3
             },
             992: {
                 items: 4
             },
             1000: {
                 items: 5
             },
             1199: {
                 items: 5
             },
             1920: {
                 items: 5
            }
        }
    });
    
    // Bio Carousel
    $('.bio-carousel').owlCarousel({
         loop: true,
         autoplay: true,
         autoplayTimeout: 5000,
         dots: true,
         dotsEach: false,
         autoplayHoverPause: true,
         nav:false,
         navText: ["<i class='fas fa-long-arrow-alt-left''></i>", "<i class='fas fa-long-arrow-alt-right''></i>"],
         responsive: {
             0: {
                 items: 1
             },
             768: {
                 items: 1
             },
             992: {
                 items: 1
             },
             1000: {
                 items: 1
             },
             1199: {
                 items: 1
             },
             1920: {
                 items: 1
            }
        }
    });
    // Bio Carousel-Two
    $('.bio-carousel-two').owlCarousel({
         loop: true,
         autoplay: true,
         autoplayTimeout: 5000,
         dots: true,
         dotsEach: false,
         autoplayHoverPause: true,
         nav:false,
         navText: ["<i class='fas fa-long-arrow-alt-left''></i>", "<i class='fas fa-long-arrow-alt-right''></i>"],
         responsive: {
             0: {
                 items: 1
             },
             768: {
                 items: 2
             },
             992: {
                 items: 2
             },
             1000: {
                 items: 2
             },
             1199: {
                 items: 2
             },
             1920: {
                 items: 3
            }
        }
    });

    // Testimonial Carousel
    $('.testimonial-carousel').owlCarousel({
         loop: true,
         autoplay: false,
         autoplayTimeout: 5000,
         dots: true,
         dotsEach: true,
         nav:false,
         navText: ["<i class='fas fa-long-arrow-alt-left''></i>", "<i class='fas fa-long-arrow-alt-right''></i>"],
         responsive: {
             0: {
                 items: 1
             },
             768: {
                 items: 1
             },
             992: {
                 items: 1
             },
             1000: {
                 items: 1
             },
             1199: {
                 items: 1
             },
             1920: {
                 items: 1
            }
        }
    });
    // Testimonial Carousel-Two
    $('.testimonial-carousel-two').owlCarousel({
         loop: true,
         autoplay: false,
         autoplayTimeout: 5000,
         dots: true,
         dotsEach: true,
         nav:false,
         navText: ["<i class='fas fa-long-arrow-alt-left''></i>", "<i class='fas fa-long-arrow-alt-right''></i>"],
         responsive: {
             0: {
                 items: 1
             },
             768: {
                 items: 1
             },
             992: {
                 items: 2
             },
             1000: {
                 items: 2
             },
             1199: {
                 items: 2
             },
             1920: {
                 items: 2
            }
        }
    });


    //MIXITUP   
    var mixer = mixitup('.grid-portfolio-container', {
        animation: {
                duration: 1000
            }
    });

});


$(document).ready(function(){

        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        var radius = canvas.height / 2;
        ctx.translate(radius, radius);
        radius = radius * 0.90
        setInterval(drawClock, 1000);

        function drawClock() {
          drawFace(ctx, radius);
          drawNumbers(ctx, radius);
          drawTime(ctx, radius);
        }

        function drawFace(ctx, radius) {
          var grad;
          ctx.beginPath();
          ctx.arc(0, 0, radius, 0, 2*Math.PI);
          ctx.fillStyle = '#caeee3';
          ctx.fill();
          grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
          grad.addColorStop(0, '#00583d');
          grad.addColorStop(0.5, '#fff');
          grad.addColorStop(1, '#00583d');
          ctx.strokeStyle = grad;
          ctx.lineWidth = radius*0.1;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
          ctx.fillStyle = '#00583d';
          ctx.fill();
        }

        function drawNumbers(ctx, radius) {
          var ang;
          var num;
          ctx.font = radius*0.15 + "px arial";
          ctx.textBaseline="middle";
          ctx.textAlign="center";
          for(num = 1; num < 13; num++){
            ang = num * Math.PI / 6;
            ctx.rotate(ang);
            ctx.translate(0, -radius*0.85);
            ctx.rotate(-ang);
            ctx.fillText(num.toString(), 0, 0);
            ctx.rotate(ang);
            ctx.translate(0, radius*0.85);
            ctx.rotate(-ang);
          }
        }

        function drawTime(ctx, radius){
            var now = new Date();
            var hour = now.getHours();
            var minute = now.getMinutes();
            var second = now.getSeconds();
            //hour
            hour=hour%12;
            hour=(hour*Math.PI/6)+
            (minute*Math.PI/(6*60))+
            (second*Math.PI/(360*60));
            drawHand(ctx, hour, radius*0.5, radius*0.07);
            //minute
            minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
            drawHand(ctx, minute, radius*0.8, radius*0.07);
            // second
            second=(second*Math.PI/30);
            drawHand(ctx, second, radius*0.9, radius*0.02);
        }

        function drawHand(ctx, pos, length, width) {
            ctx.beginPath();
            ctx.lineWidth = width;
            ctx.lineCap = "round";
            ctx.moveTo(0,0);
            ctx.rotate(pos);
            ctx.lineTo(0, -length);
            ctx.stroke();
            ctx.rotate(-pos);
        }

})


$(document).ready(function(){
 // Calender Jquery
     var curDate = (new Date()).getDate();
        var curMonth = (new Date()).getMonth();
        var curYear = (new Date()).getFullYear();
        var startDay = (new Date(curYear, curMonth, 1)).getDay();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var noofdays = ["31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
        var prevMonth = noofdays[curMonth - 1];
        if (curMonth == 11) {
          prevMonth = noofdays[0]
        } else if (curMonth == 0) {
          prevMonth = noofdays[11]
        };
        var totalDays = noofdays[curMonth];
        var counter = 0;
        var precounter = prevMonth - (startDay - 1);
        var rightbox = 6;
        var flag = true;

        jQuery('.curr-month b').text(months[curMonth]);
        for (var i = 0; i < 42; i++) {
          if (i >= startDay) {
            counter++;
            if (counter > totalDays) {
              counter = 1;
              flag = false;
            }
            if (flag == true) {
              jQuery('.all-date ul').append('<li class="monthdate">' + counter + '</li>');
            } else {
              jQuery('.all-date ul').append('<li style="opacity:.8">' + counter + '</li>');
            }
          } else {
            jQuery('.all-date ul').append('<li style="opacity:.8">' + precounter + '</li>');
            precounter++;
          }

          if (i == rightbox) {
            jQuery(jQuery('.all-date ul li')[rightbox]).addClass("b-right");
            rightbox = rightbox + 7;
          }

          if (i > 34) {
            jQuery(jQuery('.all-date ul li')[i]).addClass("b-bottom");
          }

          if ((jQuery(jQuery('.all-date ul li')[i]).text() == curDate) && (jQuery(jQuery('.all-date ul li')[i]).css('opacity') == 1)) {
            jQuery(jQuery('.all-date ul li')[i]).css({
              "background-color": "#00583d",
              "color": "#caeee3"
            });
          }
        };

     })   

    // to top Jquery
        $(window).scroll(function(){
            if($(this).scrollTop() > 40){
                $('#to-top').fadeIn();
            } else{
                $('#to-top').fadeOut();
            }
        })

        $("#to-top").click(function(){
            $('html , body').animate({scrollTop :0},800)
    });