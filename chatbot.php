<?php include 'headerChatbot.php'; ?>

	<div id="quickbox"></div>

	<div id="chatBox">
		<span class="bubble bot">Hey daar! Ik ben Mattie. Jouw hulp bij een coeliakie diagnose!</span><br>
	</div>
</div>

<div id="phone-input">
	<img id="qqButton" src="img/icons/qq.png" onclick="hideQQButton()"/>
	<input id="input" class="messageinput" placeholder="Kies een vraag of begin met typen!" onkeydown="removeText(event)" type="text">
	<img id="rec" class="messagebutton" src="img/icons/sendbutton.png"/>
</div>

	<script type="text/javascript" src="js/chat.js"></script>


<?php include 'footer.php'; ?>
