const QuestionTable = require('../../database/models/Question')
const body = require('body-parser')

async function questionExist(req, res, next) {
    const { titleFormAsk, descriptionFormAsk } = req.body

    try {
        const existingQuestion = await QuestionTable.findOne({
            where: {
                title: titleFormAsk,
                description: descriptionFormAsk
            },
            raw: true,
        })

        if (existingQuestion) {
            return res.status(409).json({
                error: "A question with the same title and description already exists"
            })
        } 
        next()
        
    } catch (error) {     
        return res.status(500).send('database error')
    }
}

module.exports = { questionExist }