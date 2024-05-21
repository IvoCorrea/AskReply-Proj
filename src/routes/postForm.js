const body = require('body-parser')
const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    const question = {
        questionTitle: req.body.titleFormAsk,
        questionDescription: req.body.descriptionFormAsk
    }
    console.log(question)
    
    res.status(200).render('postForm', {
        questionTitle: question.questionTitle,
        questionDescription: question.questionDescription
    })
})

module.exports = router