<?php
    $pageName = "Nieuws";
    $pageSVG1 = "#9CCFE9";
    $pageSVG2 = "#8FC9E7";
    $pageSVG3 = "#83C3E4";
    include 'headerHoofdmenu.php';
    include_once 'includes/connection.php';

    $sql = "SELECT * FROM berichten";
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);
?>

<section class="divCenter">
<div id="searchBar">
    <input class="search" type="text" id="searchInput" placeholder="Waar ben je naar opzoek?">
    <img src="img/icons/zoom.png" class="loop">
    <p id="searchResults"></p>
</div>

<h3 id="uitgelicht">Uitgelicht</h3>
<section class="horizontal-scroll">
	<?php foreach ($result as $berichten): ?>

	 <div class="divItem">
		<img class="subject" src="<?php echo $berichten['afbeelding']; ?>">
		<h2><?php echo $berichten['titel']; ?></h2>
		<div class="content"><?php echo $berichten['inhoud']; ?>
		</div>
		<img class="chevron" src="https://static.thenounproject.com/png/933251-200.png">
		<p class="extra-info" id="knopje" onclick="event.stopPropagation()"><i class="material-icons">date_range</i> 29 mei 2019</p>
	</div>
	
	<?php endforeach; ?>
</section>

<section class="divSection">
	<?php foreach ($result as $berichten): ?>

	 <div class="divItem">
		<img class="subject" src="<?php echo $berichten['afbeelding']; ?>">
		<h2><?php echo $berichten['titel']; ?></h2>
		<div class="content"><?php echo $berichten['inhoud']; ?>
		</div>
		<img class="chevron" src="https://static.thenounproject.com/png/933251-200.png">
		<p class="extra-info" id="knopje" onclick="event.stopPropagation()"><i class="material-icons">date_range</i> 29 mei 2019</p>
	</div>
	
	<?php endforeach; ?>
</section>

</section>
<?php include 'footer.php'; ?>
