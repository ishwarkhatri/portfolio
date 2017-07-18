$(document).ready(function() {

     /* Animations on Scroll */
    
    /* Animation for profile picture */
    
    $('.js--wp-roll-in').waypoint(function (direction) {
        setTimeout(function() { $('.js--wp-roll-in').addClass('animated rollIn'); }, 1000);
    }, {
        offset: '50%'
    });
    
     /* Animations for experience section 1 */
    $('.js--wp-experience-1').waypoint(function (direction) {
        
        if(direction == "down") {
            setTimeout(function() { $('.js--wp-fade-in-center-1').addClass('animated fadeIn'); }, 0);
            setTimeout(function() { $('.js--wp-fade-in-left-1').addClass('animated fadeInLeft'); }, 200);
            setTimeout(function() { $('.js--wp-fade-in-right-1').addClass('animated fadeInRight'); }, 400);
        } 
        else if(direction == "up") {
            $('.js--wp-fade-in-center-1').removeClass('animated fadeIn');
            $('.js--wp-fade-in-left-1').removeClass('animated fadeInLeft');
            $('.js--wp-fade-in-right-1').removeClass('animated fadeInRight');
        }
        
    }, {
       offset: '40%' 
    });
    
    /* Animation for connector 1 */
     $('.js--wp-fade-in-down-1').waypoint(function (direction) {
         if(direction == "down") {
            $('.js--wp-fade-in-down-1').addClass('animated fadeInDown');
         }
         else if(direction == "up") {
             $('.js--wp-fade-in-down-1').removeClass('animated fadeInDown');
         }
    }, {
        offset: '60%'
    });
    
    
    /* Animations for experience section 2 */
    $('.js--wp-experience-2').waypoint(function (direction) {
        
        if(direction == "down") {
            setTimeout(function() { $('.js--wp-fade-in-center-2').addClass('animated fadeIn'); }, 0);
            setTimeout(function() { $('.js--wp-fade-in-left-2').addClass('animated fadeInLeft'); }, 200);
            setTimeout(function() { $('.js--wp-fade-in-right-2').addClass('animated fadeInRight'); }, 400);
        } 
        else if(direction == "up") {
            $('.js--wp-fade-in-center-2').removeClass('animated fadeIn');
            $('.js--wp-fade-in-left-2').removeClass('animated fadeInLeft');
            $('.js--wp-fade-in-right-2').removeClass('animated fadeInRight');
        }
        
    }, {
       offset: '60%' 
    });
    
    /* Animation for connector 2 */
     $('.js--wp-fade-in-down-2').waypoint(function (direction) {
        if(direction == "down") {
            $('.js--wp-fade-in-down-2').addClass('animated fadeInDown');
         }
         else if(direction == "up") {
             $('.js--wp-fade-in-down-2').removeClass('animated fadeInDown');
         }
    }, {
        offset: '60%'
    });
    
    
    /* Animations for experience section 3 */
    $('.js--wp-experience-3').waypoint(function (direction) {
        
        if(direction == "down") {
            setTimeout(function() { $('.js--wp-fade-in-center-3').addClass('animated fadeIn'); }, 0);
            setTimeout(function() { $('.js--wp-fade-in-left-3').addClass('animated fadeInLeft'); }, 200);
            setTimeout(function() { $('.js--wp-fade-in-right-3').addClass('animated fadeInRight'); }, 400);
        } 
        else if(direction == "up") {
            $('.js--wp-fade-in-center-3').removeClass('animated fadeIn');
            $('.js--wp-fade-in-left-3').removeClass('animated fadeInLeft');
            $('.js--wp-fade-in-right-3').removeClass('animated fadeInRight');
        }
        
    }, {
       offset: '60%' 
    });
    
    /* Animation for connector 3 */
     $('.js--wp-fade-in-down-3').waypoint(function (direction) {
        if(direction == "down") {
            $('.js--wp-fade-in-down-3').addClass('animated fadeInDown');
         }
         else if(direction == "up") {
             $('.js--wp-fade-in-down-3').removeClass('animated fadeInDown');
         }
    }, {
        offset: '60%'
    });
    
    /* Animations for experience section 4 */
    $('.js--wp-experience-4').waypoint(function (direction) {
        
        if(direction == "down") {
            setTimeout(function() { $('.js--wp-fade-in-center-4').addClass('animated fadeIn'); }, 0);
            setTimeout(function() { $('.js--wp-fade-in-left-4').addClass('animated fadeInLeft'); }, 200);
            setTimeout(function() { $('.js--wp-fade-in-right-4').addClass('animated fadeInRight'); }, 400);
        } 
        else if(direction == "up") {
            $('.js--wp-fade-in-center-4').removeClass('animated fadeIn');
            $('.js--wp-fade-in-left-4').removeClass('animated fadeInLeft');
            $('.js--wp-fade-in-right-4').removeClass('animated fadeInRight');
        }
        
    }, {
       offset: '60%' 
    });
    
    
    /* Animations for Skill section */
    $('.js--wp-section-skills').waypoint(function (direction) {
        if(direction=='down') {
            setTimeout(function() { $('.js--wp-bounce-in-1').addClass('animated bounceIn'); }, 0);
            setTimeout(function() { $('.js--wp-bounce-in-2').addClass('animated bounceIn'); }, 100);
            setTimeout(function() { $('.js--wp-bounce-in-3').addClass('animated bounceIn'); }, 200);
            setTimeout(function() { $('.js--wp-bounce-in-4').addClass('animated bounceIn'); }, 300);
            setTimeout(function() { $('.js--wp-bounce-in-5').addClass('animated bounceIn'); }, 400);
            setTimeout(function() { $('.js--wp-bounce-in-6').addClass('animated bounceIn'); }, 500);
            setTimeout(function() { $('.js--wp-bounce-in-7').addClass('animated bounceIn'); }, 600);
            setTimeout(function() { $('.js--wp-bounce-in-8').addClass('animated bounceIn'); }, 700);
            setTimeout(function() { $('.js--wp-bounce-in-9').addClass('animated bounceIn'); }, 800);
            setTimeout(function() { $('.js--wp-bounce-in-10').addClass('animated bounceIn'); }, 900);
            setTimeout(function() { $('.js--wp-bounce-in-11').addClass('animated bounceIn'); }, 1000);
            setTimeout(function() { $('.js--wp-bounce-in-12').addClass('animated bounceIn'); }, 1100);
            setTimeout(function() { $('.js--wp-bounce-in-13').addClass('animated bounceIn'); }, 1200);
            setTimeout(function() { $('.js--wp-bounce-in-14').addClass('animated bounceIn'); }, 1300);
            setTimeout(function() { $('.js--wp-bounce-in-15').addClass('animated bounceIn'); }, 1400);
            setTimeout(function() { $('.js--wp-bounce-in-16').addClass('animated bounceIn'); }, 1500);
            setTimeout(function() { $('.js--wp-bounce-in-17').addClass('animated bounceIn'); }, 1600);
        }
        else if(direction == "up") {
            $('.js--wp-bounce-in-1').removeClass('animated bounceIn');
            $('.js--wp-bounce-in-2').removeClass('animated bounceIn');
            $('.js--wp-bounce-in-3').removeClass('animated bounceIn');
            $('.js--wp-bounce-in-4').removeClass('animated bounceIn');
            $('.js--wp-bounce-in-5').removeClass('animated bounceIn');
            $('.js--wp-bounce-in-6').removeClass('animated bounceIn');
            $('.js--wp-bounce-in-7').removeClass('animated bounceIn');
            $('.js--wp-bounce-in-8').removeClass('animated bounceIn');
            $('.js--wp-bounce-in-9').removeClass('animated bounceIn');
            $('.js--wp-bounce-in-10').removeClass('animated bounceIn');
            $('.js--wp-bounce-in-11').removeClass('animated bounceIn');
            $('.js--wp-bounce-in-12').removeClass('animated bounceIn');
            $('.js--wp-bounce-in-13').removeClass('animated bounceIn');
            $('.js--wp-bounce-in-14').removeClass('animated bounceIn');
            $('.js--wp-bounce-in-15').removeClass('animated bounceIn');
            $('.js--wp-bounce-in-16').removeClass('animated bounceIn');
            $('.js--wp-bounce-in-17').removeClass('animated bounceIn');
        }
            
    }, {
        offset: '20%'
    });

    /* Animation on Education section */
    
    $('.js--wp-fade-in-left-big').waypoint(function (direction) {
        
        if(direction == "down") {
            setTimeout(function() { $('.js--wp-fade-in-left-big').addClass('animated fadeInLeftBig'); }, 0);
        } 
        else if(direction == "up") {
            $('.js--wp-fade-in-left-big').removeClass('animated fadeInLeftBig');
        }
        
    }, {
       offset: '60%' 
    });

    $('.js--wp-fade-in-right-big').waypoint(function (direction) {
        
        if(direction == "down") {
            setTimeout(function() { $('.js--wp-fade-in-right-big').addClass('animated fadeInRightBig'); }, 0);
        } 
        else if(direction == "up") {
            $('.js--wp-fade-in-right-big').removeClass('animated fadeInRightBig');
        }
        
    }, {
       offset: '60%' 
    });

    
    
    
    /* Smooth Scrolling */
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
    });
    
    
    /* Map */
    var map = new GMaps({
      div: '.map',
      lat: 40.5450293,
      lng: -74.490000
    });
    
    map.addMarker({
      lat: 40.5450293,
      lng: -74.5040128,
      title: 'Mi Casa',
      infoWindow: {
          content: '<p>Mi Casa</p>'
        }
    });
    
    
    
});