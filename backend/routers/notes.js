const {Router} = require('express');

const {showAll, showOne, insertNote, editNote, deleteNote} = require("../records/notes.router");

const notesRouter = Router();

notesRouter
    .get('/', async (req, res) => {
        const notes = await showAll();
        res.status(200).json(notes);
    })
    .get('/:id', async (req, res) => {
        const {id} = req.params
        const note = await showOne(id)
        res.status(200).json(note)
    })
    .post('/', async (req, res) => {
        const {name, text, priority, active} = req.body;
        console.log(req.body);
        const id = await insertNote(name, text, priority, active);
        res.status(200).json(id)
    })
    .put('/:id', async (req, res) => {
        const {id} = req.params;
        const {name, text, priority, active} = req.body;
        await editNote(id, name, text, priority, active);
        res.status(200).json(id);
    })
    .delete('/:id', async (req, res) => {
        const {id} = req.params;
        await deleteNote(id)
        res.status(200).json(id)
    })

module.exports = {
    notesRouter,
};