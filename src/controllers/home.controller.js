const express = require('express')
const router = express.Router()
const QuestionTable = require('../../database/models/Question')

router.get('/', async (req, res) => {

    const Questions = await QuestionTable.findAll({ raw: true, order:[
        ['id','DESC']
    ] })
    res.status(200).render("index", {
        QuestionsArray: Questions
    })
})

module.exports = router