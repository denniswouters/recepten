<!doctype html>
<html lang="en">
  <head>
      <title>Mattie</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="Description" content="Mattie POC">
      <meta name="theme-color" content="#0c6073">
      <link rel="stylesheet" type="text/css" href="css/style.css">
      <link rel="manifest" href="manifest.json">
      <link rel="apple-touch-icon" href="img/icons/apple-icon.png">
    	<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script type="text/javascript" src="js/dialogflow.js"></script>
      <script type="text/javascript" src="js/chat.js"></script>
      <script type="text/javascript" src="main.js"></script>

      <script type="text/javascript">
        $(function() {
            $("#input").focus();
        });
    </script>

  </head>

  <body>
    <div id="phone" class="chatscreen">
      <div id="phone-head">
        <div class="header-container">
            
            <div class="header">
                    <svg width="100%" height="262" viewBox="0 0 375 262" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <circle cx="188" cy="-803" r="1065" fill="#FED884" />
                            <path d="M1046.5 -839.5C1046.5 -251.317 569.683 225.5 -18.5 225.5C-606.683 225.5 -1083.5 -251.317 -1083.5 -839.5C-1083.5 -1427.68 -606.683 -1904.5 -18.5 -1904.5C569.683 -1904.5 1046.5 -1427.68 1046.5 -839.5Z" fill="#FFD16C" />
                            <path d="M652 -635.5C652 -156.393 263.607 232 -215.5 232C-694.607 232 -1083 -156.393 -1083 -635.5C-1083 -1114.61 -694.607 -1503 -215.5 -1503C263.607 -1503 652 -1114.61 652 -635.5Z" fill="#FECA57" />
                            <text id="page-title" style="fill: white; font-size: 28px; font-family: 'Lato', sans-serif; font-weight: 700; padding: 50px;" x="50" y="120">Mattie</text>
                            <g>
                    </svg>
                    
                    <img class="mattie" src="img/mattieicon.png">
                    <img id="micMattie" src="img/icons/speaker.svg" onclick="stopSpeak()"/>
                      <hr class="divider-title">

                </div>
        </div>
      </div>
      <div id="phone-body">
