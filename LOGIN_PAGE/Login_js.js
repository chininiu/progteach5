
$(document).ready(function() 
{
    const register_switch = $("#register_switch");
    const login_switch = $("#login_switch");
    const forms= $(".form");
    const terms = $("#termsandprivacy");
    $("#email").focus(enlarge);
    $("#email").blur(hide);
    $("#password").focus(enlarge1);
    $("#password").blur(hide1);
    const register_username = $("#reg-username");
    const register_password = $("#reg-password");
    const register_email = $("#reg-email");
    const submit_register = $("#form-reg");
    const submit_log = $('#log-form');
    const login_email = $('#email');
    const login_password = $('#password');
    

    $("#check").change(function() { 
    if ($(this).is(':checked')) { 
    shadow();
}
   else
    {
        $("#container_form").css({"box-shadow": "none"})
    }
});

    function enlarge()
    {
        $("#circle").css({ "opacity" : "0.9", "background-color" : "black"
        });
   
    }
    function hide()
    {
        $("#circle").css({ "opacity" : "0"
    });
    }

    function enlarge1()
    {
        $("#circle").css({ "opacity" : "0.9", "background-color" : "#3B1C32"
        });
   
    }
    function hide1()
    {
        $("#circle").css({ "opacity" : "0"
    });
    }
    function shadow()
    {
        $("#container_form").css({"box-shadow": "0 0 50px rgba(0, 255, 156, 0.5)"})
    }

    register_switch.click(function(){
        forms.addClass("switch")
    })

    login_switch.click(function(){
        forms.removeClass("switch")
    })

    submit_register.submit(function(e){
        e.preventDefault();

        forms.removeClass("switch")
        var Register_Username = register_username.val();
        var Register_Password = register_password.val();
        var Register_Email = register_email.val();

        localStorage.setItem('username', Register_Username);
        localStorage.setItem('password', Register_Password);
        localStorage.setItem('email', Register_Email);
    

    })

    terms.click(function(){
        window.location.href = "https://youtu.be/Jllu94-8PxI?si=6ZIAJgRPQGlaRmui"
    })
    submit_log.submit(function(e){
        e.preventDefault();

        var input_email = localStorage.getItem('email');
        var input_pass = localStorage.getItem('password');
        
        if(login_email.val() != input_email && login_password.val()== input_pass)
        {
            alert("Invalid Email");
        }
        
        if(login_password.val() != input_pass && login_email.val() == input_email)
        {
            alert("Invalid Password");
        }
        if(login_password.val() !=  input_pass && login_email.val() != input_email)
        {
            alert("Invalid Password and Email");
        }
        if(login_password.val() ==  input_pass && login_email.val() == input_email)
        {
            window.location.href="../HOME_PAGE(Logged)/home_page-logged.html"
        }
    })

    $('#back').click(function(){
        window.location.href ="../HOME_PAGE (Not Logged)/index.html"
    })

    
})

