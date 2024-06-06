const Sequelize = require('sequelize')

const connection = new Sequelize('askandreply', 'root', '5272', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection