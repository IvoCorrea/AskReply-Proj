const Sequelize = require('sequelize')
const connection = require('./sequelize')

const Question = connection.define('question', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

async function createTable(){
    try {
        await Question.sync({ force: false })
        
    } catch (error) {
        console.error(error)
    }
}

createTable()