import {pool} from "../config/db.js"

const get_all_student= async()=>{
   const [rows]=await  pool.query("SELECT * FROM students;");
   return rows;
}

//const result = await pool.query(...)
//const rows = result[0] shorterr way to write this is const [row]

const getStudentById=async(id)=>{
const [rows]= await pool.query(
    `select * from students
    where id=?`,[id]
    
)
return rows;
}


const createStudent=async(name,branch)=>{
    const [rows]= await pool.query(`
        insert into students(name,branch)
        values(?,?)`,[name,branch])
        return rows.insertId;

}

const deleteStudent=async(id)=>{
    const[rows]=await pool.query(`delete from students where id=?`,[id]);
    return rows.affectedRows;
}

export {get_all_student,deleteStudent,createStudent,getStudentById}