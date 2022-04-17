$(document).ready(function () {
    /*Logica Carrusel*/
    var swiper = new Swiper(".mySwiper", {
       slidesPerView: 3,     
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                
            },
            480: {
                slidesPerView: 1,
                
            },      
            640: {
                slidesPerView: 2,
                
            },
            980: {
                slidesPerView: 2,
                
            },
            1200: {
                slidesPerView: 3,
                
            },
        },

        a11y: {
            prevSlideMessage: 'Anterior',
            nextSlideMessage: 'Siguiente',
          },

    });
    /* funcion para que todas las cards del carrusel queden del mismo tamaño*/
    var MaxAlt =0;
    $('.Cont__Guia__Card_parrafo').each(function(){
        var altura =$(this).height();
        if(altura > MaxAlt){ MaxAlt = altura;}
    });    
    $('.Cont__Guia__Card_parrafo').height(MaxAlt);
});