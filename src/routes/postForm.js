const body = require('body-parser')
const express = require('express')
const router = express.Router()

const QuestionTable = require('../../database/models/Question')

router.post('/', async (req, res) => {
    const question = {
        questionTitle: req.body.titleFormAsk,
        questionDescription: req.body.descriptionFormAsk
    }

    try {
        await QuestionTable.create({
            title: question.questionTitle,
            description: question.questionDescription
        })
        res.status(201).redirect('/')
        
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        })
        console.error(error)
    }
})

module.exports = router