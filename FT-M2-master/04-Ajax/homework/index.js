const URL_BASE = 'http://localhost:5000/amigos/';

const crearListaAmigos = element => {
  let lista = $('<li></li>').text(element.name);
  $('#lista').append(lista);
};

const transformarAmigos = data => {
  $('#lista').empty();
  data.forEach(crearListaAmigos);
};

const verAmigos = () => $.get(URL_BASE, transformarAmigos);

const mostrarAmigoBuscado = data => {
  $('#amigo').text(data.name);
  $('#input').val('');
};
const buscarAmigo = () => {
  let id = $('#input').val();
  $.get(URL_BASE + id, mostrarAmigoBuscado);
};

const mostrarSuccess = amigo =>
  $('#success').text(`${amigo.responseJSON.name} fue borrado con éxito!`);

const borrarAmigo = () => {
  let id = $('#inputDelete').val();
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
