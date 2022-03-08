const {v4: uuid} = require('uuid');

const {pool} = require("../utils/db");

const showAll = async () => {
    const [response] = await pool.execute('SELECT * FROM `notes`');
    return response;
};

const showOne = async (id) => {
    const [response] = await pool.execute('SELECT * FROM `notes` WHERE `id` = :id', {
        id,
    });
    return response;
};

const insertNote = async (name, text, priority, active) => {
    const id = uuid();
     await pool.execute('INSERT INTO `notes`(`id`,`name`,`text`,`priority`,`active`) VALUES(:id, :name, :text, :priority, :active)', {
        id,
        name,
        text,
        priority,
        active,
    });
    return id;
};

const editNote = async (id, name, text, priority, active) => {
    await pool.execute('UPDATE `notes` SET `id`=:id, `name`=:name, `text`=:text, `priority`=:priority, `active`=:active WHERE `id`=:id', {
        id,
        name,
        text,
        priority,
        active,
    });
};

const deleteNote = async (id) => {
    await pool.execute('DELETE FROM `notes` WHERE `id` = :id', {
        id
    });
};

module.exports = {
    showAll,
    showOne,
    insertNote,
    editNote,
    deleteNote,
};