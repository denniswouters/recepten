<?php
$pageName = "Gerechten";
$pageSVG1 = "#88CCAE";
$pageSVG2 = "#7BC6A5";
$pageSVG3 = "#6EC19C";
include 'headerHoofdmenu.php';
include_once 'includes/connection.php';
?>
<body>
<?php
$sqlAll = "SELECT * FROM restaurants";
$sqlUitgelicht = "SELECT * FROM restaurants WHERE uitgelicht='ja'";


$resultAll = mysqli_query($conn, $sqlAll);
$resultUitgelicht = mysqli_query($conn, $sqlUitgelicht);
//    $resultCheckAll = mysqli_num_rows($resultAll);
//    $resultCheckUitgelicht = mysqli_num_rows($resultUitgelicht);
?>

<script>
    console.log("Hallo");
</script>

<script>
    console.log("Hallo");
</script>




<section class="divCenter">
    <div id="searchBar">
        <input class="search" type="text" id="searchInput" placeholder="Waar ben je naar opzoek?">
        <img src="img/icons/zoom.png" class="loop">
        <p id="searchResults"></p>
    </div>

    <h3 id="uitgelicht">Uitgelicht</h3>

    <section class="horizontal-scroll">
        <?php foreach ($resultUitgelicht as $restaurant): ?>
            <div class="divItem">
                <img class="subject" src="img/<?php echo $restaurant['restaurant_img']; ?>">
                <h2><?php echo $restaurant['restaurant_naam']; ?></h2>
                <div class="content">
                    <?php echo $restaurant['restaurant_beschrijving']; ?>
                    <a target="_blank" href="<?php echo $restaurant['restaurant_link']; ?>" class="buttonRestaurant">Bekijk de site!</a>
                </div>
                <img class="chevron" src="https://static.thenounproject.com/png/933251-200.png">
                <p class="extra-info" id="knopje" onclick="event.stopPropagation()"></i></p>
            </div>

        <?php endforeach; ?>
    </section>

    <section class="divSection">
        <?php foreach ($resultAll as $restaurant): ?>

            <div class="divItem regular">
                <img class="subject" src="img/<?php echo $restaurant['restaurant_img']; ?>">
                <h2><?php echo $restaurant['restaurant_naam']; ?></h2>
                <div class="content">

                    <?php echo $restaurant['restaurant_beschrijving']; ?>
                    <a target="_blank" href="<?php echo $restaurant['restaurant_link']; ?>" class="buttonRestaurant">Bekijk de site!</a>
                </div>
                <img class="chevron" src="https://static.thenounproject.com/png/933251-200.png">
                <p class="extra-info" id="knopje" onclick="event.stopPropagation()"></i></p>
            </div>

        <?php endforeach; ?>
    </section>

</section>


</body>

</html>