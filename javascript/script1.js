$(document).ready(function(){
	
	$('ul.category li').click(function(){
        var idx = $(this).index()
    
    $(".theme_container").removeClass("active");
    $(".theme_container").eq(idx).addClass("active");
        

		$('ul.category li').removeClass('on');
		$('.themeline .theme_img').removeClass('on');

		$(this).addClass('on');
		$("#"+$(this).data('id')).addClass('on');
	})

});
$(document).ready(function(){
	
	$('ul.category2 li').click(function(){
        var idx = $(this).index()
    
    $(".theme_container2").removeClass("active");
    $(".theme_container2").eq(idx).addClass("active");
        

		$('ul.category2 li').removeClass('on');
		$('.themeline .theme_img').removeClass('on');

		$(this).addClass('on');
		$("#"+$(this).data('id')).addClass('on');
	})

});

$(document).ready(function(){
                    $('.bxSlider').bxSlider({
                        auto:true,
                        speed:800,
                        pause:2000,
                        mode:'horizontal',
                        autoControl:false,
                        pager:false,
                        captions:true,
                    });
        
                });
                location.href = "#tab1";


$('.gnbnav').on("mouseenter", function(){
    $('.inr').fadeToggle(500);
})
$('.domestic li:nth-child(3)').on('mouseenter', function(){
    $('.recommand').fadeToggle(500);
});

// $(window).mousemove(function(e){
//     //$(".cursor").css("left", "100px");
//     //$(".cursor").css("top", "100px");

//     $('.cursor').css({left: e.clientX -25, top: e.clientY -25 })
// });


//  $('.mouseCont .style1').hover(function(){
//      $('.cursor').addClass('style1');
//  }, function(){
//      $('.cursor').removeClass('style1');
//  });

//  $('.mouseCont .style2').hover(function(){
//      $('.cursor').addClass('style2');
//  }, function(){
//      $('.cursor').removeClass('style2');
//  });

//  $('.mouseCont .style3').hover(function(){
//     $('.cursor').addClass('style3');
//  }, function(){
//      $('.cursor').removeClass('style3');
//  });

// $('.mouseCont .style3').hover(function(){
//      $('.cursor').addClass('style3');
//  }, function(){
//      $('.cursor').removeClass('style3');
//  });

// const cursor = $('.cursor');
// const follower = $('.cursor-follower');

// $(window).mousemove(function(e){
//     cursor.css({left:e.pageX -5, top:e.pageY -5})
//     follower.css({left:e.pageX -15, top:e.pageY -15})
// })
