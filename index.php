<!-- Michael De Carvalho -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="description" content="Michael De Carvalho, French Web Developer" />
    <meta name="keywords" content="developer, développeur, PHP, portfolio" />
    <meta name="viewport" content="initial-scale=1.0">
    <base href="/">
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
    <link href="css/style.css" rel="stylesheet" media="all" type="text/css">
    <link href="game/game.css" rel="stylesheet" media="all" type="text/css">
    <title>Michael De Carvalho, French Web Developer</title>
</head>
<body id="top" ng-app="mdcApp" ng-controller="ScrollController">
    <ng-include src="'app/views/header.html'"></ng-include>
    <br>
    <section class="main-content" >
        <ng-view></ng-view>
    </section><!--end main-content.section -->
    <script src="bower_components/jquery/dist/jquery.js"></script>
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular-route/angular-route.js"></script>
    <script src="app/app.js"></script>
    <script src="app/controllers/mainController.js"></script>
    <script src="app/controllers/workController.js"></script>
    <script src="app/controllers/aboutmeController.js"></script>
    <script src="app/controllers/contactmeController.js"></script>
    <script src="app/controllers/ScrollController.js"></script>
</body>
</html>