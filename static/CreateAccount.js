// JavaScript File
$(document).ready( function() {
    $('#Create_Account').click(function() {
    
    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var email = $('#email').val();
    var username = $('#username').val();
    var password = $('#userPassword').val();
    
   // console.log("Click Function");
        $.ajax({
            url: '/createaccount',
            data: $('form').serialize(),
            method: 'POST',
           success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
        });
     });
});