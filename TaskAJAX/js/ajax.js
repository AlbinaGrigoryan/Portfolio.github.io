$(function () {
    $('form.user_reg').on('submit', function (e) {
        e.preventDefault();
        // get data
        var form = $(this),
            btn = form.find('button[type=submit]'),
            messages = form.find('.messages'),
            
            uName = form.find('input[name=name]').val(),
            uPhone = form.find('input[name=phone]').val(),
            uGender = form.find('input[name=gender]:checked').val(),
            ubirthDate = form.find('select[name=birthdate]').val(),
            uTerms = form.find('input[name=terms]'),
            uTermsVal = 0;
        var formData = new FormData(form[0]);
        
        
        
        if (uTerms.is(':checked')) {
            uTermsVal = 1;
        }
        // formData
        formData.append('terms', uTermsVal);
	
        
        /* check data */
        // phone
        if (uPhone == '') {
            messages.html('<span class="color-danger">Մուտքագրեք ձեր հեռախոսահամարը:<span>');
            return false;
        }
        // birthdate
        if (ubirthDate == 0) {
            messages.html('<span class="color-danger">Նշեք ծննդյան տարեթիվը:<span>');
            return false;
        }
        // terms
        if (uTermsVal == 0) {
            messages.html('<span class="color-danger">Գրանցվելու համար հարկավոր է համաձայնվել պայմանների հետ:<span>');
            return false;
        };
   
        $.ajax({
            url: 'https://weber.am/server.php',
            type: 'post',
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            beforeSend: function() {
                messages.html('Տվյալների բեռնում...');
                btn.prop('disabled', true);
            },
            success: function(data) {
                setTimeout(function() {
                    messages.html('<span class="color-success">Գրանցումը հաջողությամբ կայացավ:<span>');
                    btn.prop('disabled', false);
                }, 1000);
            },
            error: function() {
                messages.html('<span class="color-danger">Կապի խափանում, խնդրում ենք կրկին փորձել:<span>');
                btn.prop('disabled', false);
            }
        });
    }); 
});