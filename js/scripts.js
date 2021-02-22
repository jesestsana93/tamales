$(function () {
    /*-----------------------------------------------------------
        1. FUNCIONES PARA EL MENU PRINCIPAL
    -------------------------------------------------------------*/
    /*  Inserta y quita la clase ".icono-cerrar" al boton del menú*/
    $('#menu-navegacion .navbar-toggler').click(function () {
        $('.boton-menu').toggleClass('icono-cerrar');
    });

    /*Al hacer click en un enlace del menú principal */
    $('#menu-navegacion .navbar-nav a').click(function () {
        /* 1) Quita la clase ".icono-cerrar" */
        $('.boton-menu').removeClass('icono-cerrar');

        /*2) Contraemos el menu */
        $('#menu-navegacion .navbar-collapse').collapse('hide');
    });

    /*-----------------------------------------------------------
    2. INICIANDO "page-scroll-to-id"
    -------------------------------------------------------------*/
    $('#menu-principal a').mPageScroll2id({
        offset: 100,
        highlightClass: 'active'
    });

    /*-----------------------------------------------------------
    3. CONFIGURACION DE SLICK PARA LA PARTE DEL BANNER
    ------------------------------------------------------------*/
    $('#banner').slick({
        dots: true,
        infinite: true,
        speed: 2000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000        
    });

});