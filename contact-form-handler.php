<?php


$myemail = 'suleymaniye.1494@gmail.com';//<-----Put Your email address here.

    $to = $myemail;
    $email_subject = "Contact form submission: Nombre";
    $email_body = "You have received a new message. ".
    " Here are the details:\n Name: campo_vacío \n ".
    "Email: $email_address\n Message \n $message";
    $headers = "From: $myemail\n";
    $headers .= "Reply-To: $email_address";
    mail($to,$email_subject,$email_body,$headers);
    //redirect to the 'thank you' page
    header('Location: contact-form-thank-you.html');


?>
