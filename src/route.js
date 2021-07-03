const express = require('express')

const route = express.Router()

route.get("/", (req, res) => req.prependListener("index"))