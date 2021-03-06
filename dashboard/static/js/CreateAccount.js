// JavaScript File
// Todo: Disable button click while processing a request
// Todo: Make only one alert message visible at a time,
//      stack the alert messages with a number, 
//      and display messages as close button is pressed

$(document).ready( function() {
    
    $('.alert .close').on('click', function(e) {
        $(this).parent().hide();
    });
    
    $('#Create_Account').click(function() {
        console.log('I clicked a button');
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var email = $('#email').val();
        var username = $('#username').val();
        var password = $('#password').val();
        var isadmin = $('#is_admin').val();
        
        data = {
            'first_name': firstname, 
            'last_name': lastname,
            'email': email, 
            'username': username, 
            'password': password,
            'is_admin': isadmin
        };
                
        $.ajax({
            // ajax call to users.py put method, if it returns true it logs the guest in 
            //  and redirects the user to the login page
            url: '/api/user',
            method: 'PUT',
            data: JSON.stringify(data),
            contentType: 'application/json',
          success: function(response) {
              console.log('woot');
                 $('#message').html("User was created");
                 $('#alert-message')[0].classList.add('alert-success');
                 $('#alert-message').show();
                 window.location = '/users';
            },
            error: function(error) {
                try {
                    
                    json = JSON.parse(error.responseText);
                    if (json.message) {
                        $('#message').html(json.message);
                        $('#alert-message')[0].classList.add('alert-danger');
                        $('#alert-message').show();
                    }
                }
                catch (e) {
                    console.log(e);
                }
            }
        });
     });
});