import { pool } from '../helper/db.js';

const selectAllTasks = async () => {
    return await pool.query('select * from task')
}

const insertTask = async (description) => {
    return await pool.query('insert into task (description) values ($1) returning *', [description])
}

const removeTask = async (id) => {
    return await pool.query('delete from task where id = $1', [id])
}

export { selectAllTasks, insertTask, removeTask };