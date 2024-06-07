const express = require('express')
const body = require('body-parser')
const router = express.Router()

const QuestionTable = require('../../database/models/Question')
const ReplyTable = require('../../database/models/Reply')
const { replyExist } = require('../middlewares/replyExist')

router.get('/:id', async (req, res) => {
    const Id = req.params.id
    
    try {
        if (Id == null || Id == undefined) throw new Error('Id not finded')

        const QuestionDb = await QuestionTable.findOne({ where: {id: Id}})
        const Replies = await ReplyTable.findAll({
            raw: true,
            where: {
                questionId: Id
            },
            order: [
                ['id', 'DESC']
            ]
        })

        console.log(Replies)

        if (QuestionDb == undefined) throw new Error('Question not finded')

        res.status(200).render('question', {
            question: QuestionDb,
            replies: Replies
        })
    } catch (error) {
        console.log(error)
        res.status(400).redirect('/')
    }
})

router.post('/sendreply', replyExist , async (req, res) => {
    const { questionIdForm, textFormReply } = req.body

    try {
        await ReplyTable.create({
            body: textFormReply,
            questionId: questionIdForm
        })

        res.status(201).redirect(`/question/${questionIdForm}`)

    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        })
        console.error(error)
    }
})

module.exports = router