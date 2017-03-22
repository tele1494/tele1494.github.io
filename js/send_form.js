$("#contactform").submit(function(e) {
    
    var email = document.getElementById("inputemail"),
        message = document.getElementById("inputmessage");
    
    $.ajax({
        url: "https://formspree.io/suleymaniye.1494@gmail.com", 
        method: "POST",
        data: $(this).serialize(),
        dataType: "json"
    });
});