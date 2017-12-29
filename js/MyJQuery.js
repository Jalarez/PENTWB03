$(document).ready(function(){

    alert("Documento Listo");

    $('#img1').on('click',function(ev) {
        $(ev.currentTarget).hide();
    });

    $('#boton1').on('click', function() {
        $('#img1').show();
    });

    $('#boton2').on('click', function() {
        $('#div1').append('<p>Nuevo Elemento agregado!</p>').css( "color", "green" );
    })

    $('.divPrincipal div').on('click',function(ev) {
        $(ev.currentTarget).fadeTo(500,0);
    })

    $('#boton3').on('click', function(ev) {
        $('.divPrincipal div').fadeTo(0,1);
    })

    $('.divPrincipal div').on('mouseover', function(ev) {
        $(ev.currentTarget).css('background-color','yellow');
    })

    $('.divPrincipal div').on('mouseout', function(ev) {
        $(ev.currentTarget).css('background-color','transparent');
    })

});