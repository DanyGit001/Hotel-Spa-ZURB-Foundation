function obtenerAlto() {
    var alto = $('header').height();
    $('#overlay').css({'height': alto+'px'});
}

(function($) {
    
    window.setTimeout('obtenerAlto()', 200);


    $('#galeria .column img').wrap('<a data-open="modalGaleria">');

    $('#galeria a').on('click', function() {
        var imagen = $(this).find('img').attr('src');
        var imagenSeleccionada = imagen.split('thumbnail');
        var URLCompleta = imagenSeleccionada[0]+ 'fullsize' + imagenSeleccionada[1];
        $('#imagenContenedor').attr('src', URLCompleta);
});
})(jQuery);

$(window).resize(function() {
    obtenerAlto();

});

$(document).foundation();
