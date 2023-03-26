const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
];

module.exports = routes;
