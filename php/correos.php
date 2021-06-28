<?php 
    if(isset($_POST['send'])){
        if(!empty($_POST['name']) && !empty($_POST['message']) && !empty($_POST['email'])){
            $name = $_POST['name'];
            $message = $_POST['message'];
            $email = $_POST['email'];

            $header = "From: noreply@example.com" . "\r\n";
            $header = "Reply-To: noreply@example.com" . "\r\n";
            $header = "X-Mailer: PHP/". phpversion();
            
            $mail = @mail($email,$message,$header);
            if($mail){
                echo "<h4>Enviado exitosamente :)</h4>";
            }
        }
    }

?>