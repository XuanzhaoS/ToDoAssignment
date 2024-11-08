// import { pool } from '../helper/db.js';
import { Router } from 'express';
// import { emptyOrRows } from '../helper/utils.js';
// import { auth } from '../helper/auth.js';
import { getTasks, postTask, deleteTask } from '../controllers/TaskController.js';

const router = Router();

// router.get('/',(req,res) => {
//     pool.query('select * from task',(error, result) => {
//         if (error) {
//             return res.status(500).json({error: error.message})
//         }
//         // return res.status(200).json(result.rows)
//         return res.status(200).json(emptyOrRows(result))
//     })
// })
router.get('/', getTasks);

// router.post("/create",auth, (req, res, next) => {
//     const { description } = req.body

//     // if (!description || description.trim() === "") {
//     //     return res.status(400).json({ error: 'Description is required' })
//     // }
//     pool.query(
//       "insert into task (description) values ($1) returning *",
//       [req.body.description],
//       (error, result) => {
//         if (error) return next(error)
//         return res.status(201).json(id: result.rows[0].id)
//         }
//     )
//   })
router.post('/create', postTask);

// router.delete('/delete/:id',(req,res) => {
//     const id = parseInt(req.params.id)
//     pool.query('delete from task where id = $1',
//         [id],
//         (error,result) => {
//             if (error) {
//                 return res.status(500).json({error: error.message})
//             }
//             return res.status(200).json({id})
//     })
// })
router.delete('/delete/:id', deleteTask);

export default router;