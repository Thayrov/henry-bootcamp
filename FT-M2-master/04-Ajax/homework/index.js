const URL_BASE = 'http://localhost:5000/amigos/';

const crearListaAmigos = element => $('#lista').append(`<li>${element.name}</li>`);

const transformarAmigos = data => {
  $('#lista').empty();
  data.forEach(crearListaAmigos);
  $('img').hide();
};

const verAmigos = () => $.get(URL_BASE, transformarAmigos);

const mostrarAmigoBuscado = data => {
  $('#amigo').text(data.name);
  $('#input').val('');
};

const obtenerID = param => $(param).val();

const buscarAmigo = () => $.get(URL_BASE + obtenerID('#input'), mostrarAmigoBuscado);

const mostrarSuccess = amigo =>
  $('#success').text(`${amigo.responseJSON.name} fue borrado con éxito!`);

const borrarAmigo = () => {
  let id = obtenerID('#inputDelete');
  let amigo = $.get(URL_BASE + id);
  $.ajax({
    url: URL_BASE + id,
    type: 'DELETE',
    success: () => mostrarSuccess(amigo),
  });
};

$('#boton').click(verAmigos);
$('#search').click(buscarAmigo);
$('#delete').click(borrarAmigo);
