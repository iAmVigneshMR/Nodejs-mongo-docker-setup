
// const express = require('express')
import express from 'express';
export const router = express.Router();
// const { getAllUsers, saveUsers, editUsers, deleteUsers } = '../controllers/index';
import { getAllUsers, saveUsers, editUsers, deleteUsers } from '../src/controllers/index.js';
// const { getAllUsers, saveUsers, editUsers, deleteUsers } = require('../controllers/index');

router.route("/getAllUsers").get(getAllUsers);
router.route("/createUsers").post(saveUsers);
router.route("/editUsers").post(editUsers);
router.route("/deleteUsers").post(deleteUsers);

// module.exports = router
export default router;