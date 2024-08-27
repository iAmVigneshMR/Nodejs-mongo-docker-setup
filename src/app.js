// const express = require('express')
import express from 'express';
const app = express()
// let mongoose = require('mongoose');
import mongoose from 'mongoose';
const port = 3000
import routesUrls from '../routes/index.js';
// const routesUrls = require('../routes/index');
// const cors = require('cors');
import cors from 'cors';

app.use(express.json());
app.use(cors());
app.use('/crudapis', routesUrls);

// mongoose.connect('mongodb://root:123@localhost:27017/?authSource=admin', {
// mongoose.connect('mongodb://root:123@mongodb:27017/express-mongo', {
// mongoose.connect('mongo://root:123@mongo:27017/', {
// mongoose.connect('mongo://root:root123@mongo:27017/express-mongo', {
// mongoose.connect('mongodb://root:123@localhost:27017/express-mongo', {
  // mongoose.connect('mongodb://mongodb-001:27017/', {
    // mongoose.connect('mongodb://mongodb:27017/', {
      mongoose.connect('mongo://mongo:27017/', {
  // mongoose.connect('mongo://root:pass@mongo:27017/express-mongo?authSource=admin', {
  // dbName: 'event_db',
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection;

db.on('open', () => {
  console.log('Connected to mongoDB');
});
db.on('error', (error) => {
  console.log({error})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})