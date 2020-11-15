const db = require('../utils/db');

const getAll = async ({ limit, offset}) => {
  const sql = `
  SELECT id, className
  FROM class;`
  const data = await db.queryMulti(sql);

  return {
    data,
  }
};

const getById = async (idClass) => {
  const sql = `
  SELECT className
  FROM class
  WHERE idClass = ? ;`
  const data = await db.queryOne(sql, idClass)
  return {
    data
  }
};

// const create = async ({ className }) => {
//   console.log({ className });  
//   const sql = `
//   INSERT INTO class(id,className)
//   VALUES(uuid(), ?);`
//   await db.query(sql, [className]);
// };

// const updateById = async (id, { className}) => {
//   const sql = `
//   UPDATE class
//   SET 
//     className = ?,
//   WHERE id = ? AND isDelete = 0;`
//   await db.query(sql, [className, id])
// };

// const deleteById = async (id) => {
//   const sql = `
//   UPDATE class
//   SET 
//     isDelete = 1
//   WHERE id = ?;`
//   await db.query(sql, [id]);
// };

// const getAllId = async () => {
//   const sql = `
//   SELECT id, className
//   FROM class
//   WHERE isDelete = 0;`
//   const data = await db.queryMulti(sql);
//   return {
//     data,
//     metadata: {
//       length: data.length
//     }
//   }
// };

module.exports = {
  getAll,
  getById,
  // create,
  // updateById,
  // deleteById,
  // getAllId
}