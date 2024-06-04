const express = require('express')
const router = express.Router()

const QuestionTable = require('../../database/models/Question')

router.get('/:id', async (req, res) => {
    const Id = req.params.id
    
    try {
        if (Id == null || Id == undefined) throw new Error('Id not finded')

        const QuestionDb = await QuestionTable.findOne({ where: {id: Id}})

        if (QuestionDb == undefined) throw new Error('Question not finded')

        res.status(200).render('question', {
            question: QuestionDb
        })
    } catch (error) {
        console.log(error)
        res.status(400).redirect('/')
    }
})

module.exports = router