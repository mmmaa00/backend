const R = require('express').Router();
const studentController = require('../controllers/student')

const { tryCatch } = require('../middlewares/errorHandle')

R.get('/',
  tryCatch(studentController.getAll))

R.get('/:id',
  tryCatch(studentController.getById))

// R.get('/class/:id',
//   tryCatch(studentController.getStudentInClass))

// R.post('/',
//   tryCatch(studentController.createStudent))

// R.put('/:id',
//   tryCatch(studentController.updateStudent))
  
// R.delete('/:id',
//   tryCatch(studentController.deleteStudent))

module.exports = R