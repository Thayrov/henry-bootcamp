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

$('#delete').click(() => {
  let id = $('#inputDelete').val();
  $.ajax({
    url: 'http://localhost:5000/amigos/' + id,
    type: 'DELETE',
    success: () => {
      $('#success').empty();
      $('#success').text('Tu amigo fue borrado con éxito!');
    },
  });
});
