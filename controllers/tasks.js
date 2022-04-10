const Task  = require('../modules/Task')


const  getAllTasks = (req, res) => {
    res.send('All Items From the file')
}

const createTask = async (req,  res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
}

const getTask =(req, res) => {
    res.json({ id: req.params.id })
}

const UpdateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('delete Task')
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    UpdateTask,
    deleteTask,
}