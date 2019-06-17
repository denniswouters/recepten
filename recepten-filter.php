<?php
$pageName = "Gerechten";
$pageSVG1 = "#88CCAE";
$pageSVG2 = "#7BC6A5";
$pageSVG3 = "#6EC19C";
include 'headerHoofdmenu.php';



    // $conn;
    // $viewQuery = "SELECT * FROM recepten WHERE soortkeuken ='hollands'";
    // $execute = mysqli_query($conn, $viewQuery);
    require_once 'includes/connection.php';
    // $viewQuery = "SELECT * FROM recepten WHERE soortkeuken = 'Hollands'";
    // $execute = mysqli_query($conn, $viewQuery) or die("Bad Query: $viewQuery");
    // $row = mysqli_fetch_array($viewQuery);

    if (isset($_GET['keuken'])) {
        $soortkeuken = $_GET['keuken'];

        $viewQuery = "SELECT * FROM recepten WHERE soortkeuken = '$soortkeuken'";
        $execute = mysqli_query($conn, $viewQuery) or die("Bad Query: $viewQuery");
    }
?>



<div class="zoekenopkeuken">

    <h3 class="recepten-subkopje-h3">Zoeken op keuken</h3>



    <div class="results" style="display: flex;">
    <h1>
        <!-- <?php echo $row['gerecht']; ?> -->
    </h1>

        <div id="content">
            
        <?php if (empty($execute)): ?>
                    <p>Geen resultaten.</p>
                <?php else: ?>
                    <?php foreach ($execute as $keuken): ?>
                        <div class="divItem"><a class="" href="receptenItem.php?gerechten=<?php echo $keuken['gerecht'] ?>">
                            <?php echo $keuken['gerecht']. "<br>" ?>
                            </a></div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>

            
        
            
            
            
            
            <?php
            // if(mysqli_num_rows($result) > 0) {
            //     while($row = mysqli_fetch_array($result)) {
            //         echo "<a href='recepten-filter.php?id={$row['recept_id']}'>{$row['soortkeuken']}</a><br>\n";

            //     }
            // }
            // else {
            //     echo "<h2>Geen soorten recepten.</h2>";
            // }

            ?>
        </div>





</div>
</div>