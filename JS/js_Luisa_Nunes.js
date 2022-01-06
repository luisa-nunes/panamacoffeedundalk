//JS Luisa Nunes	

// About us Page

	$('.slider-principal').slick({
			    dots: true,
			    infinite: true,
			    speed: 300,
			    slidesToShow: 1,
			    adaptiveHeight: true,
			    autoplay: true,
			    autoplaySpeed: 2000
});

 // News Page
        
    
    var carouselQuotes = new Carousel({
        container: '.quote-slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
()