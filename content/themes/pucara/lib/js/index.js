(function(){
  $('.post:first').wrap("<div class='new-notice col-md-6 col-xs-12'></div>");
  $('.new-notice .post').addClass('col-md-12');

  $('.post:nth-child(1n+2)').wrapAll("<div class='others col-md-6 col-sm-12'></div>");
  $('.others .post').addClass('col-md-6 col-xs-12')
})();
