const db = require('../utils/db');

const getAll = async () => {
  const sql = `
  SELECT id, fullName, gender, age
  FROM student ;`
  const data = await db.queryMulti(sql);
  return {
    data,
  }
};

const getById = async (idStudent) => {
  const sql = `
  SELECT fullName, gender, age
  FROM student
  WHERE idStudent = ? ;`
  const data = await db.queryOne(sql,idStudent)
  return {
    data
  }
};

// const getStudentInClass = async (idClass) => {
//     const sql = `
//     SELECT fullName, gender, age, id
//     FROM student
//     WHERE idClass = ? AND isDelete = 0
//     LIMIT 1;`
//     const data = await db.queryMulti(sql, [idClass])
//     return {
//         data
//     }
// }

// const create = async ({ fullName, gender, age }) => {
//   console.log({ fullName, gender, age });  
//   const sql = `
//   INSERT INTO student(id,fullName, gender, age)
//   VALUES(uuid(), ?, ?, ?);`
//   await db.query(sql, [fullName, gender, age]);
// };

// const updateById = async (id, { fullName, gender, age }) => {
//   const sql = `
//   UPDATE student
//   SET 
//     fullName = ?,
//     gender = ?,
//     age = ?
//   WHERE id = ? AND isDelete = 0;`
//   await db.query(sql, [fullName, gender, age, id])
// };

// const deleteById = async (id) => {
//   const sql = `
//   UPDATE student
//   SET 
//     isDelete = 1
//   WHERE id = ?;`
//   await db.query(sql, [id]);
// };

// const getAllId = async () => {
//   const sql = `
//   SELECT id, fullName
//   FROM student
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
  // getStudentInClass,
  // create,
  // updateById,
  // deleteById,
  // getAllId
}