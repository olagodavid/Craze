$(document).foundation()

(function($){

 $.fn.tabbed_interface = function(options) {

  var defaults = {
   fade_duration: 500,
   
   
  };

  var options = $.extend(defaults, options);

  return this.each(function(el) {

   el = this;

   $(el).children('ul').children('li').children('a').click(function(){

    $(el).children('div').fadeOut(options.fade_duration/2).
     filter(this.hash).fadeIn(options.fade_duration/2);

    return false;

   });
						
   $('.box-content>a').bind("click touch", function(e)
   
   { e.preventDefault(); 
	  
				$(el).children('div').css('position','absolute').fadeOut(options.fade_duration/2);
				
       return false;
		  
	  });
   
  
   $(el).children('div').css('position','absolute').hide();

  
  });

 };
})(jQuery);

$(document).ready(function(){
     $('#tabbed-interface').tabbed_interface({
		
								
								fade_duration:1100
								}); 
     
    });
	

