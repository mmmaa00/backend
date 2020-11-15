const classService = require('../services/class')

const getAll = async (req, res) => {
  console.log(req.query);
  const { data} = await classService.getAll() 
  res.send({
    status: true,
    data,
  })
}

const getById = async (req, res) => {
  const { id } = req.params.id;
  const { data } = await classService.getById(id);
  res.send({
      status: true,
      data
    })
}
// const create = async (req, res) => {
//   await classService.create(req.body)
//   res.send({
//     status: 1,
//   })
// }
// const updateById = async (req, res) => {
//   const { id } = req.params;
//   await classService.updateById(id, req.body)
//   res.send({
//     status: 1,
//   })
// }
// const deleteById = async (req, res) => {
//   const { id } = req.params;
//   await classService.deleteById(id)
//   res.send({
//     status: 1,
//   });
// }

module.exports = {
  getAll,
  getById,
  // create,
  // updateById,
  // deleteById
}