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
  const {author, title} = req.query;
  const filteredPublications = publications.filter(
    post => post.author === author && post.title === title,
  );
  if (filteredPublications.length > 0) {
    res.status(200).json(filteredPublications);
  } else {
    const errorObject = {error: 'No existe ninguna publicación con dicho título y autor indicado'};
    res.status(400).json(errorObject);
  }
});

server.get('/posts/:author', (req, res) => {
  const {author} = req.params;
  const filteredPublications = publications.filter(post => post.author === author);
  if (filteredPublications.length > 0) {
    res.status(200).json(filteredPublications);
  } else {
    const errorObject = {error: 'No existe ninguna publicación del autor indicado'};
    res.status(400).json(errorObject);
  }
});

server.put('/posts/:id', (req, res) => {
  const {id} = req.params;
  const {title, contents} = req.body;
  const post = publications.find(post => post.id === Number(id));
  if (post) {
    if (title && contents) {
      post.title = title;
      post.contents = contents;
      res.status(200).json(post);
    } else {
      const errorObject = {
        error: 'No se recibieron los parámetros necesarios para modificar la publicación',
      };
      res.status(400).json(errorObject);
    }
  } else {
    const errorObject = {
      error: 'No se recibió el id correcto necesario para modificar la publicación',
    };
    res.status(400).json(errorObject);
  }
});

server.delete('/posts/:id', (req, res) => {
  const {id} = req.params;
  const postIndex = publications.findIndex(post => post.id === Number(id));
  if (postIndex > -1) {
    publications.splice(postIndex, 1);
    res.status(200).json({success: true});
  } else {
    const errorObject = {
      error: 'No se recibió el id correcto necesario para eliminar la publicación',
    };
    res.status(400).json(errorObject);
  }
});

server.delete('/posts', (req, res) => {
  const errorObject = {error: 'No se recibió el id de la publicación a eliminar'};
  res.status(400).json(errorObject);
});

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = {publications, server};
