<?php
    if (isset($_POST['submit'])){
        if (empty($_POST['name']) || empty($_POST['mail']) || empty($_POST['subject']) || empty($_POST['message'])){
            echo "ERROR, all the fields were not informed. ";
        }
        else{
            $to      = 'contact@michael-decarvalho.com';
            $subject = $_POST['subject'];
            $message = $_POST['message'];
            $headers = 'From:'. $_POST['mail']. "\r\n" .
                'Reply-To:'. $_POST['mail'] . "\r\n" .
                'X-Mailer: PHP/' . phpversion();

            mail($to, $subject, $message, $headers);
            header('Location: ./#/contactme?send=' ."fastback");
        }
    }
?>
