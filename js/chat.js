var questions = ["Wat is coeliakie?","Waar zit gluten in?","Waar kan ik uiteten?","Waar kan ik boodschappen halen?","Wat kan ik vanavond eten?"];
var quickbox = document.getElementById("quickbox");
var inputbar = document.getElementById("input");
var quickButton = document.getElementById("qqButton");




function showQQButton() {
  quickButton.style.display = "block";
  inputbar.style.width = "60%";
  inputbar.style.paddingLeft = "13%";
  quickbox.style.display = "none";
  inputbar.placeholder = "Stel Mattie een vraag!";
}

function hideQQButton() {
  quickButton.style.display = "none";
  inputbar.style.width = "68%";
  inputbar.style.paddingLeft = "5%";
  quickbox.style.display = "block";
  inputbar.placeholder = "Kies een vraag of begin met typen!";
}




const event = new KeyboardEvent("keypress", {
  view: window,
  keyCode: 13,
  bubbles: true,
  cancelable: true
});


window.onload = function () {
  for (var q in questions) {
    var qq = document.createElement('div');
    qq.className = "quick";
    qq.innerHTML = questions[q];
    qq.onclick = function(){
      var t = this.innerText || this.textContent;
      inputbar.value = t;
      //document.querySelector("input").dispatchEvent(event);     < Ook een mogelijkheid, maar werkt niet op iOS
      document.getElementById("rec").click();
      showQQButton();
    };
    quickbox.appendChild(qq);
  }
}


function removeText(event) {
  if (inputbar.value.length > 0) {
    showQQButton();
  }
}
