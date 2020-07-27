$(document).ready( function () {    
        function myFunc(newTime) {
            var countDownDate = new Date(newTime).getTime();

                var myTime = setInterval(function() {
                    var now = new Date().getTime();
                    var distance = countDownDate - now;


                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                     $("#timer").html(days + "d " + hours + "h "
                    + minutes + "m " + seconds + "s ");
                  });

            $('input[name=onloadTime]').on('change', function() {
                clearInterval(myTime);
                var newTime = $(this).val();
                myFunc(newTime);        

            }); 
        };
    myFunc('Dec 31, 2020');
    });

  
