$(document).ready(function(){
    getQuote();
    var randomQuote;
    var randomN;
    var author;
   function getQuote(){
   var quotes = ["We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.","What one programmer can do in one month, two programmers can do in two months.","Java is to JavaScript as ham is to hamster.","One of the best programming skills you can have is knowing when to walk away for awhile."];
   
  author = ["Ellen Ullman","'Ellen Ullman'","'Jeremy Keith'","'Oscar Godson'"];
   
   
    randomN = (Math.floor(Math.random()*quotes.length));
   //dec --> int 
   randomQuote = quotes[randomN];
    author = author[randomN];
   $(".quote").text(randomQuote);
   $(".author").text(author);               
   
   
 }
    
    // criar breaks //
 // tweet//
     $('#tweet').on("click",function(){
      window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " " +   author);
      
      
    });
    
    /*
    $('#fb').on("click",function(){
      window.open("https://www.facebook.com/luis.lota.9/?text=" + randomQuote);
    });
    
    */
    
    // show only //
    $("#newQuote").on("click",function(){
      
      getQuote();
         $("button").click(function(){
     $(".quotes").animate({
         left: '250px',
         opacity: '0.5',
         height: 'auto',
         width: '50%',
       color:'white',
      
     });    
      });  
       }); 
        });