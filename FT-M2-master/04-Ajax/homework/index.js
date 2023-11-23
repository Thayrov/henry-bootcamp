$('#boton').click(() => {
  $.get('http://localhost:5000/amigos', data => {
    $('#lista').empty();
    data.forEach(element => {
      let lista = $('<li></li>').text(element.name);
      $('#lista').append(lista);
    });
  });
});

$('#search').click(() => {
  let id = $('#input').val();
  $.get('http://localhost:5000/amigos/' + id, data => {
    $('#amigo').text(data.name);
    $('#input').val('');
  });
});

//
$('#delete').click(() => {
  let id = $('#inputDelete').val();
  let amigo = $.get('http://localhost:5000/amigos/' + id);
  $.ajax({
    url: 'http://localhost:5000/amigos/' + id,
    type: 'DELETE',
    success: () => {
      $('#success').text(`${amigo.responseJSON.name} fue borrado con éxito!`);
    },
  });
});
