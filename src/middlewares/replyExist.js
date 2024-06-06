const ReplyTable = require('../../database/models/Reply')
const body = require('body-parser')

async function replyExist(req, res, next) {
    
    const { questionIdForm, textFormReply } = req.body
    console.log( req.body )
    try {
        const existingReply = await ReplyTable.findOne({
            where: {
                body: textFormReply,
                questionId: questionIdForm
            },
            raw: true,
        })
        console.log(existingReply)
        if (existingReply) {
            return res.status(409).json({
                error: "A reply with the same body already exists"
            })
        }
        next()

    } catch (error) {

        console.log(error)
        return res.status(500).send('database error')
    }
}

module.exports = { replyExist } 