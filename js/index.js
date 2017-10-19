


$(function(){

	function resize(){
	  var windowWidth = $(window).width();

	  var isWidth = windowWidth<768;
	  
	  $(".carousel-inner .item").each(function(i,item){
	      var items =$(item);
	      var imgSrc = isWidth ? items.data('image-xs') : items.data('image-lg');
	      items.css('backgroundImage','url("'+imgSrc+'")') ;
          
          if(isWidth){
          	items.html('<img src="'+imgSrc+'" alt="" />');
          }else{
          	items.empty();
          } 

	  })
		
	}
 
  $(window).on('resize',resize).trigger('resize');

  var ul = $('.nav-tabs');
  var width = 0;
  ul.children().each(function(index,ele){
      width += ele.clientWidth;
  });
  
  if(width>$(window).width()){

  ul.css('width',width).parent().css('overflow-x','scroll');
  	
  }
  
  
  //新闻部分
  
  var newsTitle = $('.news_title'); 

  $('#news .nav li a').on('click',function(){
     var $this = $(this);
     var title = $this.data('title');
     newsTitle.text(title);
  })

}) 