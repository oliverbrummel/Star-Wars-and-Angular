const express = require("express");
const router = express.Router();
const request = require('request');
// const MongoClient = require("mongodb").MongoClient;
// const ObjectID = require("mongodb").ObjectID;

// Connect
// const connection = closure => {
//   return MongoClient.connect("mongodb://localhost:27017/mean", (err, db) => {
//     if (err) return console.log(err);

//     closure(db);
//   });
// };

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == "object" ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

// Get films
router.get("/films", (req, res, next) => {
  let apiRequestPath = req.query.apiRequestPath;
  request({uri: apiRequestPath})
    .pipe(res);
});

// Get characters
router.get("/characters", (req, res, next) => {
  let apiRequestPath = req.query.apiRequestPath;
  request({uri: apiRequestPath})
    .pipe(res);
});

// Get planets
router.get("/planets", (req, res, next) => {
  let apiRequestPath = req.query.apiRequestPath;
  request({uri: apiRequestPath})
    .pipe(res);
});

// Get species
router.get("/species", (req, res, next) => {
  let apiRequestPath = req.query.apiRequestPath;
  request({uri: apiRequestPath})
    .pipe(res);
});

// Get starships
router.get("/starships", (req, res, next) => {
  let apiRequestPath = req.query.apiRequestPath;
  request({uri: apiRequestPath})
    .pipe(res);
});

// Get vehicles
router.get("/vehicles", (req, res, next) => {
  let apiRequestPath = req.query.apiRequestPath;
  request({uri: apiRequestPath})
    .pipe(res);
});

module.exports = router;
