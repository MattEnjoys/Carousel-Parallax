<?php require_once "config.php"; ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible"
          content="IE=edge" />
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0" />
    <title>Carousel Slider</title>
    <!-- Lien vers le fichier CSS -->
    <link rel="stylesheet"
          href="style.css" />
</head>

<body>
    <div class="container">
        <div class="content">
            <!-- Contenu de l'introduction -->
            <div class="introduce"></div>
            <div class="thumbnail-list">
                <!-- Contenu de la liste de vignettes -->
                <div class="wrapper"></div>
            </div>
        </div>

        <div class="navigation">
            <!-- Bouton de navigation suivant -->
            <button class="next-button">Next</button>
            <!-- Ligne de séparation -->
            <span class="line"></span>
            <!-- Numéro d'ordre -->
            <span class="ordinal-number"> </span>
        </div>
    </div>
    <!-- Lien vers le fichier JavaScript -->
    <script src="main.js"></script>
</body>

</html>