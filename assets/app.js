$(function(){
    $('.toggle-menu').click(function(e){
      e.preventDefault();
      $('.sidebar').toggleClass('toggled');
    });
  });

  $(document).ready(function hideCard() {
    var x = document.getElementById("projectCard");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    };

   
  });


  
  //onclick of project images (p1, p2, etc.) display projectCard for each
  //onclick of About Me title/image, display meCard again
  //populate projectCard by grabbing element ids and adding attributes for text to decribe languages demonstrated.
  