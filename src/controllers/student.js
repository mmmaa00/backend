const studentService = require('../services/student')

const getAll = async (req, res) => {
  console.log(req.query);
  const { data} = await studentService.getAll() 
  res.send({
    status: true,
    data
  })
}

const getById = async (req, res) => {
  const { id } = req.params.id;
  const { data } = await studentService.getById(id);
  res.send({
      status: true,
      data
    })
}

// const getStudentInClass = async (req, res) => {
//     const { idClass } = req.params;
//     const { data } = await studentService.getStudentInClass(idClass);
//     res.send({
//         status: 1,
//         data
//     })
// }

// const create = async (req, res) => {
//   await studentService.create(req.body)
//   res.send({
//     status: 1,
//   })
// }
// const updateById = async (req, res) => {
//   const { id } = req.params;
//   await studentService.updateById(id, req.body)
//   res.send({
//     status: 1,
//   })
// }
// const deleteById = async (req, res) => {
//   const { id } = req.params;
//   await studentService.deleteById(id)
//   res.send({
//     status: 1,
//   });
// }

module.exports = {
  getAll,
  getById,
  // getStudentInClass,
  // create,
  // updateById,
  // deleteById
}