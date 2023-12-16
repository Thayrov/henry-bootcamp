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

server.get('/posts', (req, res) => {
  const filteredPublications = publications.filter(
    post => post.author === req.query.author && post.title === req.query.title,
  );
  if (filteredPublications.length > 0) {
    res.status(200).json(filteredPublications);
  } else {
    const errorObject = {error: 'No existe ninguna publicación con dicho título y autor indicado'};
    res.status(400).json(errorObject);
  }
});

server.get('/posts/:author', (req, res) => {});

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = {publications, server};
