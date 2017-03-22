$("#contactform").submit(function(e) {
    
    $.ajax({
        url: "https://formspree.io/suleymaniye.1494@gmail.com", 
        method: "POST",
        data: $(this).serialize(),
        dataType: "json"
    });
    
});
