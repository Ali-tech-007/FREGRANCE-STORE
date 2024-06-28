<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = "your@email.com";
    $subject = "New Message from Fragrance Store Contact Form";
    $txt = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    mail($to, $subject, $txt, $headers);
    header("Location: thank-you.html");
    exit();
}
?>