	
	const button = document.querySelector("#buttonmute");
  var myAudio = document.getElementById("audioval");
  const icon = document.querySelector("#buttonmute > ul > li > a > i");
  
  var verifcircle = 0;
  let fata_progress = [
    ['Les Portes', 90, 90],
	['Les Fins', 5, 5],
    ['Prologue', 2, 2],
    ['Coulisse', 1.5, 2]
  ]

  let requiem_progress = [
    ['I: Tales of a Distant Past', 25, 50],
	['Not a Sorrow in the World', 25, 50],
    ['II: Whats Past is Prologue', 25, 50],
	['Assento Dele', 4, 10],
	['Happily Ever ~After~', 4, 10],
	['Fragment', 5, 10],
	['Short Story: I', 9, 30],
  ['Coulisse', 1, 2]
  ]

  let reinc_progress = [
    ['I: Seeing Glass', 0, 50],
    ['II: Chains', 0, 50],
	['III: River Of Oblivion', 0, 50],
    ['IV: Epilogue', 0, 9],
	['Short Story: II', 0, 50]
  ]

  var VerifAutoPlay = "NON"
   var MyTimerSlider = window.setInterval(TimerSlider, 5000);
   var verifscrollrelease;
   // MyTimerSlider.play()
   // MyTimerSlider.stop()
   function TimerSlider() {
   var myRadio = $('input[name="controls"]:checked').val();
   
   var ValueRadio = 1;
   
   if (myRadio == 5) {
   ValueRadio = 1;
    }
   else {
   ValueRadio = parseInt(myRadio) + 1;
   }
  
    $("#button-" + ValueRadio).prop("checked", true);
  }
  
        function Play()
        {
         if (myAudio.paused) {
              myAudio.play();
        //$('#musicbtn').text('Pause');
          }
          else {
             myAudio.pause();
         //$('#musicbtn').text('Play');
  
          }
        }
      
         function PlaySound(SoundName)
        {
      var mySound = document.getElementById(SoundName);
      mySound.currentTime = 0;
              mySound.play();
         //$('#musicbtn').text('Play');
      
        }
      
      
    function loadDoc() {
  <!--$("#Page").remove();-->
  //$("main").remove();
  updateProgress('navigation', Math.round(getTotalProgress(fata_progress)) / 100);
  <!--$('body').css('background-image', 'url("ressources/OtherMenu.png")');-->
  //$('body').css('background-image', 'none');
  //$('.fog-container').css('position', 'fixed');
  //$('#slideshow-wrap').val().trigger("button-2");
  
  //$("#button-2").prop("checked", true);
  }
    function loadDoctest() {
  var sheet = document.getElementById("styles-accueil");
  
  if (sheet.disabled == false)  {
  sheet.disabled = true;
   }
   else {
   sheet.disabled = false;
   }
  <!--sheet.parentNode.removeChild(sheet); A FAIRE SI JE VEUX SUPPRIME UN CSS-->
  
  }
    function loadPage() {
      var chemin = window.location.pathname; 
    //var chemin = window.location.hash; -->
  //VerifEtatMusic(); 
  
    if (chemin == "/download") {
      window.scroll(0, 0);
       $( "main" ).load( "Page/telechargement.html" );
      // $('.fog-container').css('position', 'fixed');
      $('.absolute-bg').css('background-image', 'none');
      } else if (chemin == "/progress") {
       $( "main" ).load( "Page/progression.html" );
      $('.absolute-bg').css('background-image', 'none');
        } else if (chemin == "/faq") {
       $( "main" ).load( "Page/FAQ.html" );
      $('.absolute-bg').css('background-image', 'none');
          } else if (chemin == "/credit") {
       $( "main" ).load( "Page/credits.html" );
      $('.absolute-bg').css('background-image', 'none');
         } else {
      $( "main" ).load( "Page/accueil.html" );
      $('.absolute-bg').css('background-image', 'url("ressources/BG_mainmenu_gigapixel.jpg")');
      // $('.fog-container').css('position', 'absolute');
  
        }
  
  }
  
    function loadPageSwitch(PageNumber) {
  switch(PageNumber) {
    case 0:
      $( "main" ).load( "Page/accueil.html" );
    $('.absolute-bg').css('background-image', 'url("ressources/BG_mainmenu_gigapixel.jpg")');
   window.history.pushState("window.location.hostname", "The House In Fata Morgana", "/");
      break;
    case 1:
     $( "main" ).load( "Page/progression.html" );
      $('.absolute-bg').css('background-image', 'none');
      window.history.pushState("window.location.hostname", "The House In Fata Morgana", "/progress");
      break;
      case 2:
      window.scroll(0, 0);
      $( "main" ).load( "Page/telechargement.html" );
    $('.absolute-bg').css('background-image', 'none');
      window.history.pushState("window.location.hostname", "The House In Fata Morgana", "/download");
      break;
      case 3:
     $( "main" ).load( "Page/FAQ.html" );
      $('.absolute-bg').css('background-image', 'none');
      window.history.pushState("window.location.hostname", "The House In Fata Morgana", "/faq");
      break;
      case 4:
       $( "main" ).load( "Page/credits.html" );
      $('.absolute-bg').css('background-image', 'none');
      window.history.pushState("window.location.hostname", "The House In Fata Morgana", "/credit");
      break;
  }
  
  }
  
  window.addEventListener('click', function (event) {
  //$("body").click(function(){ // Verifie si un clique a etait declenché pour la music...
  ///$("#Page").load($(this).data('url'));
  
  if (VerifAutoPlay == "NON") {
  VerifAutoPlay = "OUI";
         if (myAudio.paused) {
              myAudio.play();
        //$('#musicbtn').text('Pause');
          }
  }
  
  });
  
  $('body').on('change', 'input[type=radio][name=controls]', function() {
    if (MyTimerSlider) {
              clearInterval(MyTimerSlider);
        MyTimerSlider = setInterval(TimerSlider, 5000);
        }
  });
  
  window.addEventListener('popstate', function (event) {
    // The URL changed...
    loadPage();
    PlaySound("ClickAllLink");
  });
        
  window.addEventListener('scroll', ScrollEvent);
  
  function ScrollEvent() {
   var scrolltotop = window.scrollY;
      var yvalue = scrolltotop * 0.7;
    var VerifChangeScroll = verifscrollrelease
  //	if (yvalue > 1200)
  //	{
    //yvalue = 1200;
  //	}
  
    $('.absolute-bg').css('backgroundPosition', "center" + " calc(30% - " + yvalue + "px)");
  
    
          var reveals = document.querySelectorAll('.reveal');

          for(var i = 0; i < reveals.length; i++){

            var windowheight = window.innerHeight * 0.50;
            var revealtop = reveals[i].getBoundingClientRect().top;

            if (revealtop < windowheight){
              if (verifscrollrelease != i) {

               verifscrollrelease = i;
               }
          }
        }

if (VerifChangeScroll != verifscrollrelease){

  reveals[verifscrollrelease].classList.remove('disableup');
  reveals[verifscrollrelease].classList.remove('disabledown');
       reveals[verifscrollrelease].classList.add('active');
   $('.Fenetredownloads').css('--valuescrollnum', verifscrollrelease + 1);

        for(var i = 0; i < reveals.length; i++){
   
        if (i  < verifscrollrelease){
        reveals[i].classList.remove('active');
        reveals[i].classList.add('disableup');
        reveals[i].classList.remove('disabledown');
         
          }else if (i  > verifscrollrelease){
            reveals[i].classList.remove('active');
       reveals[i].classList.add('disabledown');
          }

        }

        PlaySound("ClickAllLink");  
        }
        VerifChangeScroll = verifscrollrelease
        
      }
  
  myAudio.addEventListener('play', function(){
          icon.classList.remove('fa-music-note-slash');
      icon.classList.add('fa-music-note', 'fa-shake');
    VerifAutoPlay = "OUI";
  });
  
  myAudio.addEventListener('pause', function(){
          icon.classList.remove('fa-music-note', 'fa-shake');
      icon.classList.add('fa-music-note-slash');
  });
  
    $('body').on('click', 'a', function() {
      PlaySound("ClickAllLink")
      });