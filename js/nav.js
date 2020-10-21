$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.menu-toggle').toggleClass('active')
        $('nav').toggleClass('active')
    })
})


let indice = 1;
muestraSlides(indice);

function avanzarSlide(){
    muestraSlides(indice+=n);
}

function posicionSlide(n){
    muestraSlides(indice=n);
}

setInterval(function tiempo(){
    muestraSlides(indice+=1)
},6000);

function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('itemSlide');
    let pagination = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length();
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }

    for(i = 0; i < pagination.length; i++){
        pagination[i].className = pagination[i].className.replace(" activar", "");
    }

    slides[indice-1].style.display = 'flex';
    pagination[indice-1].className += ' activar';

}



$(document).ready(function(){
    $('.bxslider').bxSlider({
        mode:'fade',
        auto: false,
        touchEnabled: false
    });
});