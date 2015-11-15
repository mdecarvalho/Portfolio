<section class="page-content">
    <?php
        if (isset($_POST['submit'])){

            if (empty($_POST['name']) || empty($_POST['mail']) || empty($_POST['subject']) || empty($_POST['message'])){
        		echo "ERROR, all the fields were not informed. ";
        	}
            else{
                $to      = 'contact@michael-decarvalho.com';
                $subject = $_Post['mail'];
                $message = $_Post['message'];
                $headers = 'From:'. $_POST['mail']. "\r\n" .
                    'Reply-To:'. $_POST['mail'] . "\r\n" .
                    'X-Mailer: PHP/' . phpversion();

                mail($to, $subject, $message, $headers);
            }
        }
    ?>
    <h1>CONTACT ME</h1>
    <form class="contact-form" method="post" action="">
            <input type="hidden" class="input-text" name="submit"><br/>
            <input type="text" name="name" placeholder="Name" maxlength="50" class="input-text"><br/>
            <input type="text" name="mail" placeholder="email" maxlength="50" class="input-text"><br/>
            <input type="text" name="subject" placeholder="Subject"maxlength="100" class="input-text"><br/>
            <textarea rows="25" name="message" placeholder="Enter your message" maxlength="5000" class="input-text"></textarea>
            <input type="button" class="send-button link-button" name="submit-button" value="Send">
    </form>
</section><!-- end page-content.section-->
