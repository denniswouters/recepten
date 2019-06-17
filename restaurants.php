<?php
    $pageName = "Restaurant";
    $pageSVG1 = "#FF9C68";
    $pageSVG2 = "#FF9055";
    $pageSVG3 = "#FF8442";
    include 'headerHoofdmenu.php';
    include_once 'includes/connection.php';


?>

<body>
<?php
    $sql = "SELECT * FROM restaurants ";
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);
?>


<ul>

    <!-- als er geen paginas/opdrachten bevinden in de database -->
    <?php if (empty($result)): ?>
        <p>Sorry, geen opdrachten</p>

        <!-- als er wel paginas bevinden in de database -->
    <?php else: ?>

        <!-- loop over een array -->
        <?php foreach ($result as $restaurant): ?>
            <div class="itemRestaurant">
                <?php echo $restaurant['restaurant_naam']; ?> <br>
                <?php echo $restaurant['restaurant_stad']; ?>
                <br>
            </div>

            <!--einde van de foreach-->
        <?php endforeach; ?>
        <br><br>

        <!--einde van de totale loop-->
    <?php endif; ?>
</ul>

</body>

</html>


