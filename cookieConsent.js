// 5. Cookie container

$(document).ready(function(){   
    if (window.localStorage.getItem('accept_cookies')) {
          $(".cookie-container").hide();
      }
    
      $(".cookie-btn").click(function() {
     window.localStorage.setItem('accept_cookies', true);
          $(".cookie-container").fadeOut(1000);
      }); 
  }); 