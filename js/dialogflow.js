var accessToken = "ea8a430f4c8d4ab88b79a06d89dc8d28";
var baseUrl = "https://api.api.ai/v1/";

let mattieSpeak = new SpeechSynthesisUtterance();
mattieSpeak.lang = 'nl-NL';

$(document).ready(function() {
  $("#input").keypress(function(event) {
    if (event.which == 13 && $("input").val() != "") {
      $('#chatBox').append('<span class="bubble me">' + $('input').val() + '</span><br><br>')
      event.preventDefault();
      let query  = $('input').val();
      $('input').val('')
      send(query);
      var scherm = $('#chatBox');
      var height = scherm[0].scrollHeight;
      scherm.scrollTop(height);
      $("input").prop("disabled", true);
    }
  });
  $("#rec").click(function(){
    if ($("input").val() != "") {
      $('#chatBox').append('<span class="bubble me">' + $('input').val() + '</span><br><br>')
      event.preventDefault();
      let query  = $('input').val()
      $('input').val('')
      send(query);
      var scherm = $('#chatBox');
      var height = scherm[0].scrollHeight;
      scherm.scrollTop(height);
      $("input").prop("disabled", true);
    }
  });
});


function checkForChange() {

  if (document.getElementById('tempId')) {

    var tempId = document.getElementById("tempId").parentElement.textContent;
    var newSpan = document.createElement('span');

    if (tempId.includes("recepten")) {
      newSpan.className = 'bubble suggestionMenu sugRecepten';
      newSpan.innerHTML = '<div class="circleW"><img src="img/recepten.png"/></div><p>Overheerlijke recepten</p>';
      document.getElementById('chatBox').appendChild(newSpan);
      document.getElementById('tempId').removeAttribute("id");

    } else if (tempId.includes("spiekbriefje")) {
      newSpan.className = 'bubble suggestionMenu sugSpiekbriefje';
      newSpan.innerHTML = '<div class="circleW"><img src="img/recepten.png"/></div><p>Het spiekbriefje</p>';
      document.getElementById('chatBox').appendChild(newSpan);
      document.getElementById('tempId').removeAttribute("id");

    } else if (tempId.includes("nieuws")) {
      newSpan.className = 'bubble suggestionMenu sugNieuws';
      newSpan.innerHTML = '<div class="circleW"><img src="img/recepten.png"/></div><p>Het laatste nieuws</p>';
      document.getElementById('chatBox').appendChild(newSpan);
      document.getElementById('tempId').removeAttribute("id");

    } else if (tempId.includes("restaurant")) {
      newSpan.className = 'bubble suggestionMenu sugRestaurants';
      newSpan.innerHTML = '<div class="circleW"><img src="img/recepten.png"/></div><p>De dichtstbijzijnde restaurants</p>';
      document.getElementById('chatBox').appendChild(newSpan);
      document.getElementById('tempId').removeAttribute("id");
    } else {
      // alert("geen overeenkomend woord gevonden");
    }
  } else {
    // alert("geen tempId gevonden");
  }
}




function send(query) {
  var text = query;
  $.ajax({
    type: "POST",
    url: baseUrl + "query?v=20180101",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      "Authorization": "Bearer " + accessToken
    },
    data: JSON.stringify({ query: text, lang: "en", sessionId: "somerandomthing" }),
    success: function(data) {
      setResponse(data);
    }
  });
}


function setResponse(val) {
  speechSynthesis.cancel();

  document.getElementById("expression").src = "img/expressions/typing1.png";

  setTimeout(function () {
    document.getElementById("expression").src = "img/expressions/typing2.png";
  }, 330);
  setTimeout(function () {
    document.getElementById("expression").src = "img/expressions/typing3.png";
  }, 660);
  setTimeout(function () {
    document.getElementById("expression").src = "img/expressions/typing99.png";
  }, 1000);
  setTimeout(function () {
    document.getElementById("expression").src = "img/expressions/mattie.png";
  }, 1500);
  setTimeout(function(){
    $("input").prop("disabled", false);
    $("#chatBox").append('<span class="bubble bot">'+ val.result.fulfillment.speech + '</span><br><br>');
    checkForChange();
    var scherm = $('#chatBox');
    var height = scherm[0].scrollHeight;
    scherm.scrollTop(height);


    // text to speech
    var textspeak = val.result.fulfillment.speech.toString();
    //console.log(textspeak);
    var stripresult = textspeak.replace(/<a\b[^>]*>(.*?)<\/a>/gi,"$1");
    var result = stripresult.replace(/<\/?\w+[^>]*\/?>/g, "");
    console.log(result);
    mattieSpeak.text = result;

    mattieSpeak.rate = 0.9;
    console.log(mattieSpeak.rate);

    speechSynthesis.speak(mattieSpeak);




  }, 1000);

}


function stopSpeak() {
  speechSynthesis.cancel();
  if(mattieSpeak.volume == 0){
    mattieSpeak.volume = 1;
    //console.log(mattieSpeak.volume);
    document.getElementById('micMattie').src='img/icons/speaker.svg';
  }
  else {
    mattieSpeak.volume = 0;
    document.getElementById('micMattie').src='img/icons/mute.svg';
  }
}
