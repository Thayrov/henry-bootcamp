const express = require('express');

let publications = [];

const server = express();

server.use(express.json());

server.post('/posts', (req, res) => {
  const {author, title, contents} = req.body;
  if (author && title && contents) {
    const newPost = {
      id: Date.now(),
      author,
      title,
      contents,
    };
    publications.push(newPost);
    res.status(201).json(newPost);
  } else {
    const errorObject = {
      error: 'No se recibieron los parámetros necesarios para crear la publicación',
    };
    res.status(400).json(errorObject);
  }
});

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = {publications, server};
