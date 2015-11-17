<?php
require_once('PHPMailer/_lib/class.phpmailer.php');
$errors = array();  	// array to hold validation errors
$data = array(); 		// array to pass back data
// validate the variables ======================================================
	if (empty($_POST['name']))
		$errors['name'] = 'Name is required.';
	if (empty($_POST['mail']))
		$errors['mail'] = 'E-mail is required.';
    if (empty($_POST['subject']))
    		$errors['subject'] = 'Subject is required.';
	if (empty($_POST['content']))
		$errors['content'] = 'Message is required.';
// return a response ===========================================================
	// response if there are errors
	if ( ! empty($errors)) {
		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;

	} else {
		$mail = new PHPMailer();
		$mail->From = $_POST['mail'];
		$mail->FromName = $_POST['name'];
		$mail->Subject = $_POST['subject'];
		$mail->Body = $_POST['content'];
		$mail->AddAddress("contact@michael-decarvalho.com");
		if(!$mail->send())
		{
				echo "Mailer Error: " . $mail->ErrorInfo;
		}
		else
		{
			$data['success'] = true;
			$data['message'] = 'Thank you, the email was sent.';
    	}
	}
	echo json_encode($data);
?>
