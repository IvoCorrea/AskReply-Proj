const body = require('body-parser')
const express = require('express')
const router = express.Router()

const { questionExist } = require('../middlewares/questionExist')
const QuestionTable = require('../../database/models/Question')

router.get('/', async (req, res) => {
    res.render('askTo')
})

router.post('/postform', questionExist, async (req, res) => {
    const question = {
        questionTitle: req.body.titleFormAsk,
        questionDescription: req.body.descriptionFormAsk
    }

    try {
        await QuestionTable.create({
            title: question.questionTitle,
            description: question.questionDescription
        })
        res.status(201).render('askSuccess', ({
            questionTitle: question.questionTitle,
            questionDescription: question.questionDescription,
        }))
        
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        })
        console.error(error)
    }
})

module.exports = router