<?php 
    $destinatario = 'jj-0808@hotmail.com';
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $header = "Enviado desde GratoPeru";
    $mensajeCompleto = $mensaje . "\nAtentamente: " . $name;

    mail($destinatario, $mensaje, $header);
    echo "<scrip>alert('Correo enviado :)')</script>";
    echo "<scrip>setTimeout(\"location.href='../html/cotizacion.html'\",1000)</script>";

?>