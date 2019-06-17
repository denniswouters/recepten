<?php
$pageName = "Gerechten";
$pageSVG1 = "#88CCAE";
$pageSVG2 = "#7BC6A5";
$pageSVG3 = "#6EC19C";
include 'headerHoofdmenu.php';
include_once 'includes/connection.php';

$conn;
$getQuery = "SELECT DISTINCT soortkeuken FROM recepten";
$viewQuery = mysqli_query($conn, $getQuery) or die("Bad query: $viewQuery");
$execute = mysqli_num_rows($viewQuery);
?>

<div class="filterCategorie">
<section class="divCenter">
    <div id="searchBar">
        <input class="search" type="text" id="searchInput" placeholder="Wat zou je willen eten?">
        <img src="img/icons/zoom.png" class="loop">
        <p id="searchResults"></p>
    </div>

    <div class = "filterGerechten"></div>
    <h3 id="soortenKeukens">Uitgelicht</h3>
    <section class="horizontal-scroll">
        <?php
        if (mysqli_num_rows($viewQuery) > 0) {
            while ($row = mysqli_fetch_array($viewQuery)) {
                echo "<div class='category-item' name={$row['soortkeuken']} id='filterCategorie'>";
                echo '<img src="img/hamburger_category_icon.png">';
                echo "<a class=filter-item name={$row['soortkeuken']}>{$row['soortkeuken']}</a><br>\n";
                echo '</div>';
            }
        } else {
            echo "<h2>Geen soorten keukens</h2>";
        }
        ?>
    </section>
    
    <div class="container">
        <div class="list" id="list">
        </div>
    
        
    </div>
    </div>

    <script type="text/javascript" src="js/recepten.js"></script>

<?php include 'footer.php'; ?>


