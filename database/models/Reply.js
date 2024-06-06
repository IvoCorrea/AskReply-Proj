const Sequelize = require('sequelize')
const connection = require('../sequelize')

const Reply = connection.define('reply', {
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    questionId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

async function createTable(){
    try {
        await Reply.sync({ force: false })

    } catch (error) {
        console.error(error)
    }
}

createTable()
module.exports = Reply