


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


  //触屏轮播图的滑动
  //1.获取轮播图对象
  var carousel = $('.carousel');
  var startX=null;
  var endX=null;
  var width=10;

  //2.注册触摸事件
  carousel.on('touchstart', function(e){
     startX = e.originalEvent.touches[0].clientX 
     
  });

   carousel.on('touchmove', function(e){
     endX = e.originalEvent.touches[0].clientX 
  })

   carousel.on('touchend', function(e){
     var distance = Math.abs(startX - endX);
    
     if(distance > width){
     $(this).carousel(startX > endX ? 'next' : 'prev');
      
     } 

  })

}) 