<?php
if(isset($_POST['email']) && $_POST['email'] != '') {

  if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $content = $_POST['content'];
  
    $from = 'My site';
    $subject = "New form submission";
    $email_body = "Name: $name;\n Email: $email;\n Message: $content";
  
    $to = "vlada.pysh1@gmail.com";
    $headers = "From: $from \r\n";
  
    $headers .= "Reply to: $email \r\n";
  
    mail($to,$subject,$email_body,$headers);
  }
}
header("Location:https://vladapysh.github.io/portfolio/");

?>