import express from 'express'
import dotenv from 'dotenv';
import {check_connection} from "./config/db.js"
import {get_all_student,deleteStudent,createStudent,getStudentById} from './models/student.js'
dotenv.config();


const port=process.env.PORT

const app=express();
//middlewears
app.use(express.json())


//create route 

app.post("/create",async (req,res)=>{
let bname=req.body.name;
let bbranch=req.body.branch;
 const new_student= await createStudent(bname,bbranch);
const student = await getStudentById(new_student)
res.json(student)
})

//

app.listen(port,()=>{
    console.log("server running at port 3000");
    check_connection();

})