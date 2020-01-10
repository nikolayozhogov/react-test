$(function(){
	// Плавная прокрутка к якорю
	$('body').on('click', '.scroll_link', function(e) {
		//e.preventDefault()

		console.log('click');

		let nextEl = $(this).closest('section').next()

		$('html, body').stop().animate({
		   	scrollTop: $(nextEl).offset().top
		}, 1000)
	})
})

$(window).load(function(){
	// Наша команда
	$('.examples').owlCarousel({
		loop: true,
		navSpeed: 500,
		dotsSpeed: 500,
		nav: false,
	   	dots: true,
	   	margin: 4,
		responsive : {
			1024 : {
	   			items: 3
			},
			768 : {
	   			items: 3
			},
			480 : {
	   			items: 2
			},
			0 : {
				items: 1
			}
		},
		onInitialized: function(event){
			setHeight( $(event.target).find('.slide') )
		},
		onResized: function(event){
			$(event.target).find('.slide').height('auto')

			setHeight( $(event.target).find('.slide') )
		},
		onRefreshed: function(event){
			$(event.target).find('.slide').height('auto')

			setHeight( $(event.target).find('.slide') )
		}
	})
})


function setHeight(className){
    let maxheight = 0
    let object = $(className)

    object.each(function() {
    	let elHeight = $(this).innerHeight()

        if( elHeight > maxheight ) {
        	maxheight = elHeight
        }
    })

    object.innerHeight( maxheight )
}