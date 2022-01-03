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

})

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
