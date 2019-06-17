<?php 
    include 'headerHoofdmenuReceptenItem.php'; 
    include 'includes/connection.php';

    if (isset($_GET['gerechten'])) {
        $gerecht = $_GET['gerechten'];

        $viewQuery = "SELECT * FROM recepten WHERE gerecht = '$gerecht'";
        $executerecept = mysqli_query($conn, $viewQuery) or die("Bad Query: $viewQuery");
        $executetijd = mysqli_query($conn, $viewQuery) or die("Bad Query: $viewQuery");
        $executepersonen = mysqli_query($conn, $viewQuery) or die("Bad Query: $viewQuery");
        $executeingredienten = mysqli_query($conn, $viewQuery) or die("Bad Query: $viewQuery");
        $executebereiding = mysqli_query($conn, $viewQuery) or die("Bad Query: $viewQuery");
    }
?>

<div class="receptenPagina">

    <div id="receptenPaginaHead">
        <!-- Terug knop -->
        <div id="backButton">
            <a href="recepten.php">    
                <img class="menuBackButton" src="img/recepten/backButton.svg">
            </a>
        </div>

        <!-- Titel -->
            <div id="menuTitel">
                <?php 
                if(mysqli_num_rows($executerecept) > 0) {
                    while($row = mysqli_fetch_array($executerecept)) {
                        echo $row['gerecht'];
                    }
                }
                ?>
            </div>

        <!-- Ondertitel -->
            <div id="menuOndertitel">
                <img class="ondertitelKlok" src="img/recepten/ondertitelKlok.svg">
                <div class="ondertitelTekst">
                    <?php 
                        if(mysqli_num_rows($executetijd) > 0) {
                            while($row = mysqli_fetch_array($executetijd)) {
                                echo $row['tijd'];
                            }
                        }
                    ?>
                </div>

                <img class="ondertitelPersonen" src="img/recepten/ondertitelPersonen.svg">
                <div class="ondertitelTekst2">
                    <?php 
                        if(mysqli_num_rows($executepersonen) > 0) {
                            while($row = mysqli_fetch_array($executepersonen)) {
                                echo $row['personen'];
                            }
                        }
                    ?>
                </div>
            </div>
    </div>

    <div id="receptenIngredienten">


        <div class="ingredientenTitel">Ingrediënten</div>
        <div class="ingredientenRecept">
            <!-- Echoes -->
            <div class="normaleTekst">
                <?php 
                    if(mysqli_num_rows($executeingredienten) > 0) {
                        while($row = mysqli_fetch_array($executeingredienten)) {
                            echo $row['ingredienten'];
                        }
                    }
                ?>
            </div>
        </div>

        <div class="ingredientenTitelBereiding">Bereidingswijze</div>
        <div class="ingredientenBereiding">
            <!-- Echoes -->
            <div class="normaleTekst">
                <?php 
                    if(mysqli_num_rows($executebereiding) > 0) {
                        while($row = mysqli_fetch_array($executebereiding)) {
                            echo $row['bereidingswijze'];
                        }
                    }
                ?>
            </div>
        </div>
    </div>

</div>


<?php include 'footer.php'; ?>