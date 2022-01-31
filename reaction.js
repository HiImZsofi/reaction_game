   function openPage(){ //megnyitja az instructions divet
    $("#next_page").stop(0,0).animate(  //slide animáció
        { left: 0 },
        1000
    );
    $('#maindiv').hide();
    $('#resultdiv').hide();  //elrejti a mögötte lévő div tartalmát
   //console.log("eltűnik"); //tesztelésre
}

function hiding(){
    $('#maindiv').hide();
    $('#choosemode').hide();
    $('#next_page').hide();
    $("#resultdiv").hide();
    $('#startdiv').show();
}

var atvillanas = 0;
var is_green = true;

  $(document).ready(function () {
    
    $("#one").click(function(){ //egy player gomb kattintás function
        openPage();
        $("<h2>In this gamemode, you are going to play alone. When you see the background switch from green to red, press click as soon as you can. If you press before the switch, it won't count.</h2>").appendTo('#next_page'); 
        $("<h2>Press space to continue.</h2>").appendTo('#next_page'); 
        //console.log("megjelenik a szöveg"); //tesztelésre
        document.body.onkeyup = function(e){
            if(e.keyCode == 32){
                hiding();
                $("#start").css("display","block"); //eltünteti a gombot
                //console.log("mukodik"); //tesztelésre
            };
        };
      });

      var presses = 0;

      function reset(){
        $("#startdiv").css("background-color", "green");
        $("#startdiv").show();

        var milisec = Math.floor(Math.random() * 5000) + 1000; //kisorsolja hány századmásodperc teljen el mielőtt pirosra vált
        //console.log(milisec); //teszt
    
        setTimeout(colorSwitch, milisec);//amennyi a sorsolt szám annyival késlelteti a váltást       
      }

      $("#start").click(function () {

        $("#start").hide();

         reset();

        }); 

        $("#startdiv").click(function(e) {    
              
          if(is_green){
            alert("Clicked too soon. You tryin to pull something here, eh?");
          }
          else{
            //timestamp mentés: megnyomás pillanata
           var megnyomas = Date.now();
           // eltelt: megnyomás - átvillanás
           var elapsedTime = megnyomas-atvillanas;
           
           //kiírás
           //alert("Your reaction time was " + elapsedTime + " ms");
           //$("#startdiv").css("pointer-events","none");
           $("#startdiv").hide();
           $("#resultdiv").show();
           $("#resultdiv").css("display","block");
           $('#resultdiv').text("Your reaction time was : " + elapsedTime + " ms | Click here to play again!");
           alert("github");
          }
           
    
       });

        $("#resultdiv").click(function () {
          $("#resultdiv").hide();
          reset();          
          
          });
  });

  function colorSwitch(){    
    
    $("#startdiv").css("background-color", "red");
    is_green = false;
    $("#startdiv").css("pointer-events","auto");
    // timestamp mentés: átvillanás pillanata
    atvillanas = Date.now();

    
}



  

