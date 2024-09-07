const express = require("express")
const router = express.Router()

router.post('/pizzas', (req, res) => {
    try {
        if (global.pizzas) {
            res.send(global.pizzas)
        }
        else {
            res.status(400).send("Pizzas not found")
        }
    } catch (error) {
        console.log(error.message)
        res.status(400).send("Server Error")
    }
})
router.post('/burgers', (req, res) => {
    try {
        if (global.burgers) {
            res.send(global.burgers)
        }
        else {
            res.status(400).send("Burgers not found")
        }
    } catch (error) {
        console.log(error.message)
        res.status(400).send("Server Error")
    }
})
router.post('/beverages', (req, res) => {
    try {
        if (global.beverages) {
            res.send(global.beverages)
        }
        else {
            res.status(400).send("Beverages not found")
        }
    } catch (error) {
        console.log(error.message)
        res.status(400).send("Server Error")
    }
})
router.post('/desserts', (req, res) => {
    try {
        if (global.desserts) {
            res.send(global.desserts)
        }
        else {
            res.status(400).send("Desserts not found")
        }
    } catch (error) {
        console.log(error.message)
        res.status(400).send("Server Error")
    }
})
router.post('/wraps', (req, res) => {
    try {
        if (global.wraps) {
            res.send(global.wraps)
        }
        else {
            res.status(400).send("Wraps not found")
        }
    } catch (error) {
        console.log(error.message)
        res.status(400).send("Server Error")
    }
})

module.exports = router;