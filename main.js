window.onload = function() {
	registerServiceWorker();
	setupDivItems();
	setupSearchItems();
}

function registerServiceWorker() {
  // Registreert ServiceWorker script in de browsers
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', { scope: '/mattie-master/' }).then(() => {
      console.log('Service Worker registered successfully.');
    }).catch(error => {
      console.log('Service Worker registration failed:', error);
    });
  }
}

function setupDivItems() {
	let allDivItems = document.getElementsByClassName("divItem");
	let extraDivItems = document.getElementsByClassName("extra-info");

	let makeDivItem = function() {
		console.log("Making item from DIV");

		document.getElementsByClassName("divSection")[0].style.marginTop = "0px";
		document.getElementsByClassName("divSection")[0].style.paddingBottom = "0px";
		document.getElementsByClassName("horizontal-scroll")[0].style.paddingBottom = "0";
		document.getElementById("searchBar").style.display = "none";
		document.getElementById("uitgelicht").style.display = "none";

		for (let i = 0; i < allDivItems.length; i++) {
	        allDivItems[i].style.display = "none";
	    }

	    this.style.display = "block";
		this.style.width = "100vw";
		this.style.height = "100%";
		this.style.minHeight = "64vh";
		this.style.margin = "0px";
		this.style.borderRadius = "0px";
		this.style.backgroundColor = "white";

		let title = this.getElementsByTagName("h2")[0];
		title.style.top = "110px";
		title.style.left = "26px";
		title.style.marginRight = "16px";
		title.style.fontSize = "26px";
		title.style.width = "90vw";
		title.style.zIndex = "101";
		title.style.position = "fixed";
		title.style.color = "white";
		title.style.lineHeight = "30px";

		let text = this.getElementsByClassName("content")[0];
		text.style.display = "block";
		text.style.margin = "16px";
		text.style.marginTop = "30px";
		text.style.whiteSpace = "normal";

		let image = this.getElementsByClassName("subject")[0];
		image.style.width = "auto";
		image.style.minWidth = "100vw";
		image.style.height = "265px";
		image.style.top = "0";
		image.style.left = "0";
		image.style.borderRadius = "0";
		image.style.opacity = "1";
		image.style.position = "fixed";
		image.style.zIndex = "100";

		let chevron = this.getElementsByClassName("chevron")[0];
		chevron.style.display = "none";

		let extraInfo = this.getElementsByClassName("extra-info")[0];
		extraInfo.style.display = "block";
		extraInfo.style.position = "fixed";
		extraInfo.style.zIndex = "102";
		extraInfo.style.color = "white";
		extraInfo.style.fontSize = "13px";
		extraInfo.style.left = "26px";
		extraInfo.style.top = "200px";

		for (let i = 0; i < allDivItems.length; i++) {
    		allDivItems[i].removeEventListener('click', makeDivItem, false);
		}

		createButton();
	}

	let createButton = function() {
		console.log("Creating button");
		let button = document.createElement("BUTTON");
		button.style.backgroundImage = "url(https://i.imgur.com/Lv7zNhY.png)";
		button.style.width = "13px";
		button.style.height = "23px";
		button.id = "closeButton";
		document.body.appendChild(button);
		button.addEventListener("click", closeDivItem, false);
	}

	let closeDivItem = function() {
		console.log("Closing news item");
		document.getElementsByClassName("divSection")[0].removeAttribute("style");
		document.getElementById("closeButton").parentNode.removeChild(this);
		document.getElementById("searchBar").removeAttribute("style");
		document.getElementsByClassName("horizontal-scroll")[0].removeAttribute("style");
		document.getElementById("uitgelicht").removeAttribute("style");

    	for (let i = 0; i < allDivItems.length; i++) {
        	allDivItems[i].removeAttribute('style');
        	let numberOfChildren = allDivItems[i].children.length;
        		for (let j = 0; j < numberOfChildren; j++) {
        			allDivItems[i].children[j].removeAttribute("style");
        		}
   		}
   		for (let i = 0; i < allDivItems.length; i++) {
    		allDivItems[i].addEventListener('click', makeDivItem, false);
		}
	}

	let showExtraInfo = function() {
		console.log("Showing extra info");
	}

	// Event listeners
	for (let i = 0; i < allDivItems.length; i++) {
    	allDivItems[i].addEventListener('click', makeDivItem, false);
	}
	for (let i = 0; i < extraDivItems.length; i++) {
		extraDivItems[i].addEventListener('click', showExtraInfo, false);
	}
}

function setupSearchItems() {
	let searchItems = function() {
		console.log("Searching...");

		let results, horizontal, uitgelicht, input, filter, divs, txtValue, aantalResultaten;
    	input = document.getElementById("searchInput");
    	results = document.getElementById("searchResults");
    	horizontal = document.getElementsByClassName("horizontal-scroll")[0];
    	uitgelicht = document.getElementById("uitgelicht");

    	filter = input.value.toUpperCase();

    	divs = document.getElementsByClassName("divItem");
    	for (let i = 0; i < divs.length; i++) {
        	h2 = divs[i].getElementsByTagName("h2")[0];
        	txtValue = h2.textContent || h2.innerText;
        	if (txtValue.toUpperCase().indexOf(filter) > -1) {
            	divs[i].style.display = "";
        	} else {
            divs[i].style.display = "none";
        	}
    	}

    	if (filter == "") {
    		results.style.display = "none";
    		horizontal.style.display = "block";
    		uitgelicht.innerHTML = "Uitgelicht";
    		aantalResultaten = 0;
    	} else {
    		aantalResultaten = divs.length - document.querySelectorAll(".divItem[style='display: none;']").length;
    		results.style.display = "block";
    		horizontal.style.display = "none";
    		results.innerHTML = "Resultaten voor: " + input.value;

    		uitgelicht.innerHTML = aantalResultaten+ " resultaten";
    	}
    	

	}

	let searchInput = document.getElementById("searchInput");
	searchInput.addEventListener('keyup', searchItems);
}