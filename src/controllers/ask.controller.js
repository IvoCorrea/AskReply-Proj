const body = require('body-parser')
const express = require('express')
const router = express.Router()

const { questionExist } = require('../middlewares/questionExist')
const QuestionTable = require('../../database/models/Question')

router.get('/', async (req, res) => {
    res.render('askTo')
})

router.post('/sendquestion', questionExist, async (req, res) => {
    const { titleFormAsk, descriptionFormAsk } = req.body

    try {
        await QuestionTable.create({
            title: titleFormAsk,
            description: descriptionFormAsk
        })
        res.status(201).render('askSuccess', ({
            questionTitle: titleFormAsk,
            questionDescription: descriptionFormAsk,
        }))
        
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        })
        console.error(error)
    }
})

module.exports = router