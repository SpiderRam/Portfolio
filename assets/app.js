$(function(){
    $('.toggle-menu').click(function(e){
      e.preventDefault();
      $('.sidebar').toggleClass('toggled');
    });
  });

  //document.onpageload: display meCard but hide projectCard
  //onclick of project titles/images (p1, p2, etc.) display projectCard for each
  //onclick of About Me title/image, display meCard again
  //populate projectCard by grabbing element ids and adding attributes for text, images, and links.
  //create an object that holds KVPs for each project?