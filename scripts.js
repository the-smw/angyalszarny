// Toggle function for contact card PC


$(document).ready(function () {
    $(".email").click(function () {
      $(".card2").toggle();
      $(".card2").css({"background-color":"#ADC7BD","color":"#ffffff"});
      $(".card2 .highlight").css("color", "#ffffff");
      $(".email").css({"background-color":"#ADC7BD","color":"#ffffff"});
      $(".email i").css("color", "#ffffff");
      $(".address").css({"background-color":"#ffffff","color":"#ADC7BD", "border-right":"none", "border-left":"1px solid #ADC7BD"});
      $(".address i").css("color", "#ADC7BD");
      $(".open-hours").css({"background-color":"#ffffff","color":"#ADC7BD", "border-right":"1px solid #ADC7BD", "border-left":"none"});
      $(".open-hours i").css("color", "#ADC7BD");
      $(".card1").hide();
      $(".card3").hide();
    });
  });





  $(document).ready(function () {
    $(".open-hours").click(function () {
      $(".card3").toggle();
      $(".card3").css({"background-color":"#ADC7BD","color":"#ffffff"});
      $(".card3 h4").css("color", "#ffffff");
      $(".open-hours").css({"background-color":"#ADC7BD","color":"#ffffff"});
      $(".open-hours i").css("color", "#ffffff");
      $(".address").css({"background-color":"#ffffff","color":"#ADC7BD", "border-right":"none", "border-left":"1px solid #ADC7BD"});
      $(".address i").css("color", "#ADC7BD");
      $(".email").css({"background-color":"#ffffff","color":"#ADC7BD", "border-right":"none", "border-left":"1px solid #ADC7BD"});
      $(".email i").css("color", "#ADC7BD");
      $(".card1").hide();
      $(".card2").hide();
    });
  });





  $(document).ready(function () {
    $(".address").click(function () {
      $(".card1").toggle();
      $(".address").css({"background-color":"#ADC7BD","color":"#ffffff"});
      $(".address i").css("color", "#ffffff");
      $(".open-hours").css({"background-color":"#ffffff","color":"#ADC7BD", "border-right":"1px solid #ADC7BD", "border-left":"none"});
      $(".open-hours i").css("color", "#ADC7BD");
      $(".email").css({"background-color":"#ffffff","color":"#ADC7BD", "border-right":"1px solid #ADC7BD", "border-left":"none"});
      $(".email i").css("color", "#ADC7BD");
      $(".card2").hide();
      $(".card3").hide();
    });
  });





  //Display more images in the gallery

  $(document).ready(function () {
    $(".more").click(function () {
      $(".hide").css("display", "flex");
    });
  });





  