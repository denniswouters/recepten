<?php
  $pageName = "Hoofdmenu";
  $pageSVG1 = "#E0E0E0";
  $pageSVG2 = "#C4C4C4";
  $pageSVG3 = "#B2B2B2";
  include 'headerHoofdmenu.php';
?>




    <div class="menubutton-container">
        <ul>
            <a href="chatbot.php">
              <li class="menubutton sugRecepten recepten">
                <p>Mattie</p>
              </li>
            </a>

            <a href="recepten.php">
              <li class="menubutton sugRestaurants restaurants">
                <p>Gerechten</p>
              </li>
            </a>

            <a href="restaurants.php">
              <li class="menubutton sugSpiekbriefje spiekbriefje">
                <p>Restaurants</p>
              </li>
            </a>

            <a href="spiekbriefje.php">
              <li class="menubutton sugNieuws nieuws">
                  <p>Spiekbriefje</p>
              </li>
            </a>

            <a href="nieuws.php">
              <li class="menubutton sugNieuws nieuws">
                  <p>Nieuws</p>
              </li>
            </a>

        </ul>
    </div>


<?php include 'footer.php'; ?>
